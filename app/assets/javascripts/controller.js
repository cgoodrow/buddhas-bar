var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
  $scope.catselect = {category:""};

  $scope.menu = [
    {
      "name":"Hummus",
      "category":"Starter",
      "price":"$4.99",
      "id":"hummus",
      "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
    },
    {
      "name":"Grape Leaves",
      "category":"Starter",
      "price":"$5.99",
      "id":"grapeLeaves",
      "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
    },
    {
      "name":"Fries",
      "category":"Starter",
      "price":"$3.50",
      "id":"fries",
      "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
  },
  {
    "name":"BBQ",
    "category":"Pizza",
    "price":"$13.99",
    "id":"bbq",
    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
  },
  {
    "name":"BLT",
    "category":"Pizza",
    "price":"$11.99",
    "id":"blt",
    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
  },
  {
    "name":"Meat",
    "category":"Pizza",
    "price":"$13.99",
    "id":"meat",
    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
  },
  {
    "name":"Buddha",
    "category":"Burger",
    "price":"$7.99",
    "id":"buddha",
    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
  },
  {
    "name":"Olive",
    "category":"Burger",
    "price":"$6.99",
    "id":"olive",
    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
  },
  {
    "name":"Steak",
    "category":"Burger",
    "price":"$8.99",
    "id":"steak",
    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
  },
  {
    "name":"Cheese",
    "category":"Burger",
    "price":"$5.99",
    "id":"cheese",
    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
  },
  {
    "name":"Club",
    "category":"Sandwich",
    "price":"$6.99",
    "id":"club",
    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
  },
  {
    "name":"Ham",
    "category":"Sandwich",
    "price":"$5.99",
    "id":"ham",
    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
  },
  {
    "name":"Coors",
    "category":"On Tap",
    "price":"$2.99",
    "id":"coors",
    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
  },
  {
    "name":"Budweiser",
    "category":"On Tap",
    "price":"$2.99",
    "id":"budweiser",
    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
  }
]

  $scope.menuCategories = [{id:"", display:'All'},{id:"Pizza", display:'Pizza'}, {id:"Burger", display:'Burger'}, {id:"Sandwich", display: 'Sandwiches'}, {id:"Starter", display:'Starters'}, {id:"On Tap", display: 'On Tap'}];

  $scope.valueSelected = function (value) {

      if (value === null) {
          $scope.catselect = undefined;
      }
  };
});
