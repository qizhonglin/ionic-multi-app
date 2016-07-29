/**
 * Created by 310031267 on 2016/7/26.
 */
'use strict';

(function () {
  angular
    .module('main')
    .config(stateConfig);

  stateConfig.$inject = ['$stateProvider'];

  function stateConfig ($stateProvider) {
    $stateProvider
      .state('main.debug', {
        url: '/debug',
        views: {
          'tab-debug': {
            templateUrl: 'main/debug/debug.html',
            controller: 'DebugCtrl as ctrl'
          }
        }
      });
  }

})();
