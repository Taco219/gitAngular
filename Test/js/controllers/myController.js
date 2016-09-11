app.controller("myCtrl", function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});

app.controller("ctrUrl", function ($scope, $location) {
    $scope.myUrl = $location.absUrl();
});

app.controller("ctrTimeOut", function ($scope, $timeout) {
    $scope.myHeader = "Hello world!";
    $timeout(function () {
        $scope.myHeader = "Ben je er nog?";
    }, 10000);
});

app.controller("ctrInterval", function ($scope, $interval) {
    $scope.theTime = new Date().toLocaleDateString();
    $interval(function () {
        $scope.theTime = new Date().toLocaleDateString();
    }, 1000);
});