/**
 * Created by 310031267 on 2016/7/27.
 */
'use strict';

(function () {
  angular.module('main')
    .config(stateConfig);

  stateConfig.$inject = ['$stateProvider'];

  function stateConfig ($stateProvider) {
    $stateProvider
      .state('main.scroll', {
        url: '/scroll',
        views: {
          'tab-scroll': {
            templateUrl: 'main/scroll/scroll.html',
            controller: 'TabScrollCtrl'
          }
        }
      });
  }

})();
