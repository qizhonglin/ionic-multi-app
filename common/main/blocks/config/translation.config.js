'use strict';

(function () {
  angular.module('main')
      .config(translationConfig);

  translationConfig.$inject = ['$translateProvider'];

  function translationConfig ($translateProvider) {
    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: 'i18n/{lang}/{part}.json'
    });

    $translateProvider.preferredLanguage('zh-cn');
  }
})();


