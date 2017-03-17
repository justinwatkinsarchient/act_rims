import * as angular from 'angular';
import template from './home.html!text';

export class  Home implements ng.IComponentOptions {
    public controller = HomeController;
    template = template;
}

class HomeController implements ng.IComponentController {
    static $inject = [];
    constructor() {
        console.log('home me');
    }
}

export var name = 'home';