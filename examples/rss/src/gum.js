import {Observable, Subject} from 'rx';
import Inferno from 'inferno';
import InfernoDOM from 'inferno-dom';

const createElement = Inferno.TemplateFactory.createElement;

export const el = (tag, attrs, children) =>
    children.concat ? createElement.apply(null, [tag, attrs].concat(children))
    : createElement(tag, attrs, children);

export const renderTemplate = (template, domElement) =>
    InfernoDOM.render(template, domElement);

export const template = (tpl) => Inferno.createTemplate(tpl);

export const render = (component, domElement) =>
    component.subscribe(template =>
			renderTemplate(template, domElement)); 

export const cell = () => new Subject();

export const stream = Observable;

export const set = (value, cell) => 
    (ev) => cell ? cell.onNext(value) : null;
