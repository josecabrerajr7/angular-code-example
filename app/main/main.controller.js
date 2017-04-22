(function() {
    'use strict';

    angular
        .module('app.main')
        .controller('Main', Main);

        Main.$inject = [];

        function Main() {
            var vm = this;

            vm.main = 'This is the Home Page';
        }
})();