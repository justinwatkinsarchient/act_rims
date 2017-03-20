import * as angular from 'angular';
import template from './about.html!text';

class AboutController implements ng.IComponentController {
    static $inject = [];
    constructor() {
        console.log('about me');
    }
}

export var  Component = <ng.IComponentOptions> {
    controller:AboutController,
    template:template,
}

export var Name = 'rims.about'; 