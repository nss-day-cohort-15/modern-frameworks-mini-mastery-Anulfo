"use strict";

app.factory("FlowerStorage", ($q, $http, FirebaseURL, $location) => {
    
    let getFlowerList = function(){
        let items = [];
        //This is the Angular way of doing promises
        return $q((resolve, reject)=>{
          $http.get(`${FirebaseURL}/arrangements.json?orderBy="uid"&equalTo="${user}"`)
          //Angular does the parsing of the object  for you, just like AJAX or getJSON
          .success((itemObject) => {
              Object.keys(itemObject).forEach((key) => {
                itemObject[key].id = key;
                items.push(itemObject[key]);
              });
              resolve(items);
            })
          .error((error)=>{
            reject(error);
          });
        });
      };
      return {getItemList};
});