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
      .state('main.list-detail', {
        url: '/list-detail',
        views: {
          'tab-list': {
            templateUrl: 'main/list/list-detail.html',
            // controller: 'SomeCtrl as ctrl'
          }
        }
      });
  }

})();
