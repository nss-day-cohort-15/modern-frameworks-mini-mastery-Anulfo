"use strict";

app.controller("viewCtrl", function($scope, FlowerStorage) {
    
    FlowerStorage.getFlowerList()
    .then((itemCollectionArr) => {
        console.log("Flower Array", itemCollectionArr);
        $scope.arrangements = itemCollectionArr;
    });
});