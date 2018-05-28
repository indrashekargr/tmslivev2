var ApiUrlPrefix = "/";
app.controller("BUMasterCtrl", function ($rootScope, loginAuthentication, $scope, $http, $state, $stateParams, $interval, $window, $location, $timeout, $filter) {
$scope.userinfodata = loginAuthentication.getLoggedInUserInfo();
//console.log($scope.userinfodata);
$scope.state = $state;
window.$scope = $scope;

    var Id=null;

//Fetch All Business Unit List for Administration

    function getBuList() {
        $http.get(ApiUrlPrefix + "fetchbusinessunitmasterlist").success(function (data) {
            $scope.getBuList = data;
        });
    }
    getBuList();

//Add Business Unit for Administration
    $scope.AddBu = function () {
        if($scope.buName== undefined && $scope.Description== undefined) {
            alert("Please enter all the mandatory fields");
            $("#AddBuModal").modal("show");
        } else if($scope.buName== null || $scope.buName== undefined||$scope.buName==""){
            alert("Please enter Business unit name");
        }else if($scope.Description== null || $scope.Description== undefined||$scope.Description==""){
            alert("Please enter Description");
        } else if($scope.Description.length>100){
            alert("Description must be 100 digits");
        }
        else {
            var bulist = {
                "buName": $scope.buName
                , "Description": $scope.Description
                , "CreatedBy":$scope.userinfodata.Username
            };
            $http.post(ApiUrlPrefix + 'addbumasterbyadmin ', bulist).then(function (response) {
                //  console.log(response);
                $("#AddBuModal").modal("hide");
                alert(response.data);
                $location.path( "/bumaster" );
            },function(error){
                console.log(error);
            });
            getBuList()
            $scope.Clear();
        }
    }
    $scope.Clear = function () {
        $scope.buName = "";
        $scope.Description = "";
    }

//Business Unit Update for Administration

    $scope.editbu = function (Id, buName, description) {
        $scope.bu = {
            "Id":Id
           , "buName": buName
            , "Description": description
        }
        console.log($scope.bu);
        $scope.updateBu = function () {

            if($scope.bu.buName== undefined && $scope.bu.Description== undefined) {
                alert("Please enter all the mandatory fields");

            } else if($scope.bu.buName== null || $scope.bu.buName== undefined||$scope.bu.buName==""){
                alert("Please enter Business Unit name");
            }else if($scope.bu.Description== null || $scope.bu.Description== undefined||$scope.bu.Description==""){
                alert("Please enter Description");
            } else if($scope.bu.Description.length>100){
                alert("Description must be 100 digits");
            }
            else{

                var updateBu = {
                    "Id": Id
                    , "buName": $scope.bu.buName
                    , "Description": $scope.bu.Description
                    , "ModifiedBy": $scope.userinfodata.Username
                };

                $http.put(ApiUrlPrefix + 'updatebumasterbyadmin', updateBu).success(function (data) {
                    $('#exampleModaladd').modal('hide');
                    $http.get(ApiUrlPrefix + 'fetchbusinessunitmasterlist').success(function (data) {
                        alert("Business unit updated successfully");
                        $scope.getBuList = data;
                    });
                }).error(function (data) {
                    $scope.error = "An error has occured while updating! " + data;
                });
            }
        }
    }

});