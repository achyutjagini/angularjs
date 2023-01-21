/*
This is a JavaScript code snippet that defines an AngularJS module. A module is a container 
for the different parts of an AngularJS application, such as controllers, services, 
filters, and directives.

In this case, the code creates a new module called "myApp" using the "angular.module"
method. The method takes two arguments: the name of the module, "myApp", and an array
of dependencies. In this case, the array is empty, indicating that the module has no
dependencies on other modules.

This module is then used to define the controller in the following line which is 
app.controller("myCtrl", function($scope) {...});
This is done by chaining the .controller method to the module.

It's important to note that, this script should be included before the <div ng-app="myApp"> 
is being defined in the HTML file.
*/

var app = angular.module("myApp", []);