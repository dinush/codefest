var noteApp = angular.module('noteApp', []);

noteApp.controller('mainCtrl',function($scope){    
  console.log("somthsd");

  $scope.notes = [{text:"3rd normal form", others:"Malith, Sisinda and 2 others wants to clarify this"}, {
    text:"participation constraints", others:"Pasan and Hasanga wants to clarify this"
  }];
  
  
  $scope.addNote = function () {
    if ($scope.noteText !== ''){
      $scope.notes.push({text:$scope.noteText, done:false});
      $scope.noteText = '';
    }
  };
  
});