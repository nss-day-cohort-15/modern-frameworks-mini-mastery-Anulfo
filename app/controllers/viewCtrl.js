"use strict";

app.controller("viewCtrl", function($scope, ItemStorage, SearchTermData, AuthFactory) {
    $scope.searchText = SearchTermData;
    
    let user = $scope.$parent.getUser();
    console.log($scope.$parent.getUser);
    ItemStorage.getFlowerList()
    .then((itemCollectionArr) => {
        console.log("Item Array", itemCollectionArr);
        $scope.items = itemCollectionArr;
    });
});