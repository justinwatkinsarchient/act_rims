import * as angular from 'angular';
import template from './home.html!text';

export var Component = <ng.IComponentOptions> {
    controller: HomeController,
    template: template
}

class HomeController implements ng.IComponentController {
    static $inject = [];
    constructor() {
        console.log('home me');
    }
}

export var Name = 'rims.home';