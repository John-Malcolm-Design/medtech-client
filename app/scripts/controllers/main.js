'use strict';

/**
 * @ngdoc function
 * @name medtechClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the medtechClientApp
 */
angular.module('medtechClientApp')
  .controller('MainCtrl', ['$scope', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    this.name = 'John Malcolm';
    
    // // $scope.handle='';
    
    // $scope.characters = 5;
    
    // // Two way data binding with directives example
    // // n.b - Digest Loop and Watch list
    // $scope.lowerCaseHandle = function(){
    //     return $filter('lowercase')($scope.handle);
    // };
    
    // $scope.apply(function(){}) 
    // ^ Tells Angular to run the Digest Loop
    // AngularJS auto wraps everything in scope.apply if it
    // is contained within the AngularJS architecture
    // $scope.$watch('handle', function(newValue, oldValue){
    //     console.info('Changed');
    //     console.log('Old: ' + oldValue);
    //     console.log('New: ' + newValue);
    // });
    
  }]);
