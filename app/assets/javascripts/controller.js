var myApp = angular.module('myApp', []);


myApp.controller('MyController', function MyController($scope) {
  $scope.catselect = {category:""};

  $scope.menu = [
    {
      "name":"Hummus",
      "category":"Starters",
      "price":"$4.99"
    },
    {
      "name":"Grape Leaves",
      "category":"Starters",
      "price":"$5.99"
    },
  {
    "name":"Hawaiian",
    "category":"Pizza",
    "price":"$12.99"
  },
  {
    "name":"BBQ",
    "category":"Pizza",
    "price":"$13.99"
  },
  {
    "name":"BLT",
    "category":"Pizza",
    "price":"$11.99"
  },
  {
    "name":"Meat",
    "category":"Pizza",
    "price":"$13.99"
  },
  {
    "name":"Buddha",
    "category":"Burger",
    "price":"$7.99"
  },
  {
    "name":"Olive",
    "category":"Burger",
    "price":"$6.99"
  },
  {
    "name":"Club",
    "category":"Sandwiche",
    "price":"$6.99"
  },
  {
    "name":"Ham",
    "category":"Sandwiche",
    "price":"$5.99"
  },
  {
    "name":"Coors",
    "category":"On Tap",
    "price":"$2.99"
  },
  {
    "name":"Budweiser",
    "category":"On Tap",
    "price":"$2.99"
  }
]

  $scope.menuCategories = [{id:"", display:'All'},{id:"Pizza", display:'Pizza'}, {id:"Burger", display:'Burger'}, {id:"Sandwiche", display: 'Sandwiches'}, {id:"Starters", display:'Starters'}, {id:"On Tap", display: 'On Tap'}];

  $scope.valueSelected = function (value) {

      if (value === null) {
          $scope.catselect = undefined;
      }
  };
});
