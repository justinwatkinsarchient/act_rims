import * as angular from 'angular';
import template from './about.html!text';

export class  About implements ng.IComponentOptions {
    public controller = AboutController;
    template = template;
}

class AboutController implements ng.IComponentController {
    static $inject = [];
    constructor() {
        console.log('about me');
    }
}

export var name = 'about';