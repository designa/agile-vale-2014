angular.module('agileVale')
  .controller('ConferenceCtrl', ['$scope', 'DesignaEvents' , function($scope, DesignaEvents){
      
      DesignaEvents.fetch().then(function(response){
        $scope.conference = response.data;
      });

      $scope.timeOf = function(schedule){
        return Object.keys(schedule)[0];
      }

  }]);