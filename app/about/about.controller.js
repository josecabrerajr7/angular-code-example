(function() {
    'use strict';

    angular
        .module('app.about')
        .controller('About', About);

        About.$inject = [];

        function About() {
            var vm = this;

            vm.main = 'This is the About Page';
        }
})();