/*
This is a JavaScript code snippet that defines a controller for an AngularJS application. 
The controller is defined using the "app.controller" method, which takes two arguments: the 
name of the controller, "myCtrl", and a function that defines the behavior of the controller. 
The function takes a single argument, "$scope", which is an object that represents the scope
of the controller.

In this case, the controller sets the values of two properties on the $scope object: "firstName"
and "lastName". These properties are set to "John" and "Doe" respectively. These values will 
be used in the view and can be accessed using expressions such as {{firstName}} and {{lastName}}.
This controller is available for any view that is within the scope of the ng-app element which is
"myApp".

It's important to note that, this script should be included after the <div ng-app="myApp">
and ng-controller="myCtrl"> is being defined in the HTML file.
*/

app.controller("myCtrl", function($scope) {
  $scope.firstName = "John";
  $scope.lastName= "Doe";
});