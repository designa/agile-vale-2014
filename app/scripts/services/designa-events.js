'use strict';
angular.module('ngDesignaEvents', []).provider('DesignaEvents', function () {
  var urlBase = 'http://eventos.designa.com.br/api/sample';
  this.setEventName = function (eventName) {
    this.eventName = eventName;
    urlBase = 'http://eventos.designa.com.br/api/' + this.eventName;
  };
  this.$get = [
    '$http',
    function ($http) {
      var eventName = this.eventName;
      function fetch() {
        return $http.get(urlBase);
      }
      function speakers() {
        return $http.get(urlBase + '/speakers');
      }
      function speaker(id) {
        return $http.get(urlBase + '/speakers/' + id);
      }
      function talks() {
        return $http.get(urlBase + '/talks');
      }
      function talk(id) {
        return $http.get(urlBase + '/talks/' + id);
      }
      function sponsors() {
        return $http.get(urlBase + '/sponsors');
      }
      function sponsor(id) {
        return $http.get(urlBase + '/sponsors/' + id);
      }
      function schedules() {
        return $http.get(urlBase + '/schedules');
      }
      return {
        fetch: fetch,
        speakers: speakers,
        talks: talks,
        sponsors: sponsors,
        schedules: schedules
      };
    }
  ];
});