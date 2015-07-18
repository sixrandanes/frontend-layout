/**
 * Created by sylvain.leborgne on 02/07/15.
 */
export default (ngModule) => ngModule.config(routeConfiguration);

function routeConfiguration($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/welcome');

    $stateProvider.state('welcome', {
        name: 'welcome',
        url: '/welcome',
        templateUrl: './components/welcome/welcomeView.html',
        controller: 'WelcomeController as welcomeController'
    });
}