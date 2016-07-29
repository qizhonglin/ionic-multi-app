/**
 * Created by 310031267 on 2016/7/27.
 */

'use strict';

(function () {
  angular.module('main')
    .controller('TabScrollCtrl', TabScrollCtrl);

  TabScrollCtrl.$inject = ['$scope', 'Reddit'];
  function TabScrollCtrl ($scope, Reddit) {
    $scope.reddit = new Reddit();
  }
})();


