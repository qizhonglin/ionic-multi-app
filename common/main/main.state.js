/**
 * Created by 310031267 on 2016/7/26.
 */
'use strict';

(function () {

  angular.module('main').config(stateConfig);

  stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function stateConfig ($stateProvider, $urlRouterProvider) {
    // ROUTING with ui.router
    $urlRouterProvider.otherwise('/main/list');
    $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'main/main.html',
        resolve: {
          translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
            $translatePartialLoader.addPart('global');
            return $translate.refresh();
          }]
        }
      });
  }
})();
