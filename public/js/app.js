var app = angular.module('app',[]);

app.controller('appController', function ($scope, $http) {

console.log("app-ctrl 💰");

$http.get('/public').success(function(response){
console.log("Sending...💰");
});

});
