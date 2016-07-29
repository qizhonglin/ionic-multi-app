/**
 * Created by 310031267 on 2016/7/28.
 */

'use strict';

// Reddit constructor function to encapsulate HTTP and pagination logic
(function () {
  angular.module('main')
    .factory('Reddit', Reddit);
  Reddit.$inject = ['$http'];
  function Reddit ($http) {
    var Reddit = function () {
      this.items = [];
      this.busy = false;
      this.after = '';
    };

    Reddit.prototype.nextPage = function () {
      if (this.busy) { return; }
      this.busy = true;

      var url = 'https://api.reddit.com/hot?after=' + this.after + '&jsonp=JSON_CALLBACK';
      $http.jsonp(url).success(function (data) {
        var items = data.data.children;
        for (var i = 0; i < items.length; i++) {
          this.items.push(items[i].data);
        }
        this.after = 't3_' + this.items[this.items.length - 1].id;
        this.busy = false;
      }.bind(this));
    };

    return Reddit;
  }
})();
