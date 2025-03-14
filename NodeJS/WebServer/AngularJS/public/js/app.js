angular.module('TestApp', []);

angular.module('TestApp')
    .controller('MainController', ctrlFunc);

//controller function
function ctrlFunc() {
      
    this.people = clientPeople;
}