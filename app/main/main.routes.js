(function() {
    'use strict';

    angular
        .module('app.main')
        .config(config);

        config.$inject = ['$stateProvider', '$urlRouterProvider'];

        function config($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('main', {
                    url: '/',
                    templateUrl: 'app/main/main.view.html',
                    controller: 'Main',
                    controllerAs: 'vm'
                });

                $urlRouterProvider.otherwise('main');
        }
})();