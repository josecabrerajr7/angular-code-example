(function() {
    'use strict';

    angular
        .module('app.about')
        .config(config);

        config.$inject = ['$stateProvider', '$urlRouterProvider'];

        function config($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('about', {
                    url: 'about',
                    templateUrl: 'app/about/about.view.html',
                    controller: 'About',
                    controllerAs: 'vm'
                });

                
        }
})();