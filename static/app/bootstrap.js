/**
 * Created by sylvain.leborgne on 02/07/15.
 */
import jquery from 'jquery';
import angular from 'angular';
import bootstrap from './assets/javascripts/bootstrap.min';
import myModule from './components/app.module';

angular.element(document).ready(function () {
    angular.bootstrap(document, ['myModule']);
});