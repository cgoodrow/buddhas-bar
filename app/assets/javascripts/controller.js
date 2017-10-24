$(document).on('turbolinks:load', function() {


var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
  $scope.catselect = {category:""};

  $scope.menu = [
    {
      "name":"Hummus",
      "category":"Starter",
      "price":"$4.99"
    },
    {
      "name":"Grape Leaves",
      "category":"Starter",
      "price":"$5.99"
    },
    {
      "name":"Fries",
      "category":"Starter",
      "price":"$3.50"
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
    "name":"Steak",
    "category":"Burger",
    "price":"$8.99"
  },
  {
    "name":"Cheese",
    "category":"Burger",
    "price":"$5.99"
  },
  {
    "name":"Club",
    "category":"Sandwich",
    "price":"$6.99"
  },
  {
    "name":"Ham",
    "category":"Sandwich",
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

  $scope.menuCategories = [{id:"", display:'All'},{id:"Pizza", display:'Pizza'}, {id:"Burger", display:'Burger'}, {id:"Sandwich", display: 'Sandwiches'}, {id:"Starter", display:'Starters'}, {id:"On Tap", display: 'On Tap'}];

  $scope.valueSelected = function (value) {

      if (value === null) {
          $scope.catselect = undefined;
      }
  };
});
});
