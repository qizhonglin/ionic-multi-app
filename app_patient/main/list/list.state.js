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
      .state('main.list', {
        url: '/list',
        views: {
          'tab-list': {
            templateUrl: 'main/list/list.html',
            controller: 'TabListCtrl'
          }
        }
      });
  }

})();
