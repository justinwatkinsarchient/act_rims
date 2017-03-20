import * as angular from 'angular';
import uiRouter from 'angular-ui-router';
import { StateProvider, Ng1StateDeclaration } from 'angular-ui-router';
import * as AboutComponent from './about';
import * as HomeComponent from './home';
import * as LayoutComponent from './layout';
import template from './layout.html!text';

var moduleName = 'app.rims';

export const moduleStates = {
    states: [
        <Ng1StateDeclaration>{
            name: 'app.rims',
            url: '/rims',
            abstract: true,
            component: LayoutComponent.Name,
        },
        <Ng1StateDeclaration>{
            name: 'app.rims.index',
            url: '',
            component: HomeComponent.Name,
            data: {
                "title": "Rims",
                "navigation": "Rims"
            }
        },
        <Ng1StateDeclaration>{
            name: 'app.rims.about',
            url: '/about',
            component: AboutComponent.Name,
            data: {
                "title": "Rims",
                "navigation": "Rims"
            }
        }
    ]
};

export default angular.module(moduleName, [uiRouter])
.component(LayoutComponent.Name, LayoutComponent.Component)
.component(AboutComponent.Name, AboutComponent.Component)
.component(HomeComponent.Name, HomeComponent.Component);