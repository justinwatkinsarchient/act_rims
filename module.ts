import * as angular from 'angular';
import uiRouter from 'angular-ui-router';
import { StateProvider, Ng1StateDeclaration } from 'angular-ui-router';
import * as AboutComponent from './about';
import * as HomeComponent from './home';

var moduleName = 'app.rims';

export const moduleStates = {
    states: [
        <Ng1StateDeclaration>{
            name: 'app.rims',
            url: '/rims',
            abstract: true,
            template: '<div ui-view></div>',
        },
        <Ng1StateDeclaration>{
            name: 'app.rims.index',
            url: '',
            component: HomeComponent.name
        },
        <Ng1StateDeclaration>{
            name: 'app.rims.about',
            url: '/about',
            component: AboutComponent.name
        }
    ]
};

export default angular.module(moduleName, [uiRouter])
.component(AboutComponent.name, AboutComponent.About)
.component(HomeComponent.name, HomeComponent.Home);