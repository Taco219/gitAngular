app.controller("ctrShoppingList", function ($scope) {
    $scope.products = ["melk", "cola", "kaas"];
    $scope.addItem = function(){
        $scope.errortext = "";
        if(!$scope.item){return ;}
        if($scope.products.indexOf($scope.item) == -1){
            $scope.products.push($scope.item);
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
    };
    $scope.removeItem = function (x) {
        $scope.errortext= "";
        $scope.products.splice(x,1);
    };
});
