var ApiUrlPrefix = "/";
app.controller("RoleMasterCtrl", function ($rootScope, loginAuthentication, $scope, $http, $state, $stateParams, $interval, $window, $location, $timeout, $filter) {
$scope.userinfodata = loginAuthentication.getLoggedInUserInfo();
$scope.state = $state;
window.$scope = $scope;

//Fetch all Roles master data for Administration
function getRoleList() {
    $http.get(ApiUrlPrefix + "roleslistforhr").success(function (data) {
        $scope.getRoleList = data;
       console.log($scope.getRoleList);
    });
}
getRoleList();

//Add role master data for Administration
    $scope.AddRole = function () {

        if($scope.Name== undefined && $scope.Description== undefined) {
            alert("Please enter all the mandatory fields");
            $("#AddRoleModal").modal("show");
        } else if($scope.Name== null || $scope.Name== undefined||$scope.Name==""){
            alert("Please enter Role name");
        }else if($scope.Description== null || $scope.Description== undefined||$scope.Description==""){
            alert("Please enter Description");
        } else if($scope.Description.length>100){
            alert("Description must be 100 digits");
        }
        else {
            var rolelist = {
                "Name": $scope.Name
                , "Description": $scope.Description
                , "CreatedBy":$scope.userinfodata.Username
            };
            $http.post(ApiUrlPrefix + 'addrolemasterbyadmin ', rolelist).then(function (response) {
                //  console.log(response);
                $("#AddRoleModal").modal("hide");
                alert(response.data);
                $location.path( "/rolemaster" );
            },function(error){
                console.log(error);
            });
            getRoleList()
            $scope.Clear();
        }

    }

    $scope.Clear = function () {
        $scope.Name = "";
        $scope.Description = "";
    }

    //Edit and Update Role Master Data for Administration

    $scope.editrole = function (RoleID, name, description) {
        $scope.role = {
            "Name": name
            , "Description": description
        }
        console.log($scope.role);
        $scope.updateRole = function () {

            if($scope.role.Name== undefined && $scope.role.Description== undefined) {
                alert("Please enter all the mandatory fields");

            } else if($scope.role.Name== null || $scope.role.Name== undefined||$scope.role.Name==""){
                alert("Please enter Role name");
            }else if($scope.role.Description== null || $scope.role.Description== undefined||$scope.role.Description==""){
                alert("Please enter Description");
            } else if($scope.role.Description.length>100){
                alert("Description must be 100 digits");
            }
            else{

                var updateRole = {
                    "RoleID": RoleID
                    , "Name": $scope.role.Name
                    , "Description": $scope.role.Description
                    , "ModifiedBy": $scope.userinfodata.Username
                };

                $http.put(ApiUrlPrefix + 'updaterolemasterbyadmin', updateRole).success(function (data) {
                    $('#exampleModaladd').modal('hide');
                    $http.get(ApiUrlPrefix + 'roleslistforhr').success(function (data) {
                        alert("Role updated successfully");
                        $scope.getRoleList = data;
                    });
                }).error(function (data) {
                    $scope.error = "An error has occured while updating! " + data;
                });
            }
        }
    }
});