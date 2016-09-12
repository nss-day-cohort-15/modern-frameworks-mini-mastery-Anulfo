"use strict";

app.controller("viewCtrl", function($scope, FlowerStorage) {
    
    FlowerStorage.getFlowerList()
    .then((itemCollectionArr) => {
        console.log("Item Array", itemCollectionArr);
        $scope.arrangements = itemCollectionArr;
    });
});