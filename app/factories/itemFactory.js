"use strict";

app.factory("FlowerStorage", ($q, $http, FirebaseURL) => {
    
    let getFlowerList = function(){
        let items = [];
        return $q((resolve, reject)=>{
          $http.get(`${FirebaseURL}/arrangements.json`)
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
      return {getFlowerList};
});