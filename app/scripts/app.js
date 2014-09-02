'use strict';

/**
 * @ngdoc overview
 * @name agileVale2014App
 * @description
 * # agileVale2014App
 *
 * Main module of the application.
 */
 angular.module('agileVale', [
  'ngResource',
  'ngSanitize',
  'ngDesignaEvents'
  ])
 .config(function(DesignaEventsProvider){
  DesignaEventsProvider.setEventName('agilevale');
})
