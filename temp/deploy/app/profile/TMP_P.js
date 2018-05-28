var ApiUrlPrefix = "/";
app.controller('ProfileCtrl', function ($rootScope, loginAuthentication, $scope, $http, $state, $stateParams, $interval, $window, $location, $timeout, $filter) {
    $scope.userinfodata = loginAuthentication.getLoggedInUserInfo();
    //console.log($scope.userinfodata);
    $scope.state = $state;
    window.$scope = $scope;
    //console.log($scope.userinfodata.EmployeeId);
    
    //Fetch Employee view self detail

    function DataCall(id) {
        $http.get(ApiUrlPrefix + "fetchEmployeeMasterDetailsBasedOnEmpId/" + id).success(function (data) {
            $scope.currentEmployee = data[0];
           // console.log(data);
        });
    }
    DataCall($scope.userinfodata.EmployeeId);

     //Fetch Employee view self resource skills detail
    function resourceSkills() {

        $http.get(ApiUrlPrefix + "fetchResourceSkillDetailsBasedOnUser/" + $scope.userinfodata.UserId).success(function (response) {
            $scope.currentEmployeeResource = response;
           

           // console.log(response);
        });
      }
   resourceSkills();

    //Add Feedback Form
    $scope.addFeedbackform = function(bugtype,bugdetail) {

        if(bugtype== undefined && bugdetail== undefined){
            alert("Please select all the mandatory fields");
            $("#AddFeedbackModal").modal("show");
        }
        else if(bugtype== null || bugtype== undefined||bugtype==""){
            alert("Please select bug type");
        }
        else if(bugdetail== null || bugdetail== undefined||bugdetail==""){
            alert("Please enter details");
        }
        else
        {
            var newFeedback = {
                "EmployeeId": $scope.userinfodata.EmployeeId
                , "Type": bugtype
                , "Details": bugdetail
            };
            $http.post(ApiUrlPrefix + 'addFeedback', newFeedback).then(function (response) {
                if (response.data) {
                    alert("Thank you for your valuable feedback...");
                    $location.path( "/profile" );
                    $("#FeedbackModal").modal("hide");
                    $("#AddSkillModal").modal("hide");
                }

            },function(error){
                console.log(error);
            });
        }
    }
});