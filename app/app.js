"use strict";

var app = angular.module("FlowerStore", ["ngRoute"])
.constant("FirebaseURL", "https://flower-power-angular.firebaseio.com");

app.config(function($routeProvider){
    $routeProvider.
        when('/', {
            templateUrl: 'partials/flower-view.html', 
            controller: 'viewCtrl'
        }).
        otherwise('/');
});


    firebase.initializeApp();
