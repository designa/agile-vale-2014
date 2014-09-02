angular.module('agileVale')
  .controller('ConferenceCtrl', ['$scope', 'DesignaEvents' , function($scope, DesignaEvents){
      
      DesignaEvents.fetch().then(function(response){
        $scope.conference = response.data;
        console.log($scope.conference);
      });

  }]);