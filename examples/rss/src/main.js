import {el, render, template, stream} from './gum'; 
import reader from './components/reader';

const items = [
    {title: 'Item 1', text: 'adodnfoisdfoij'},
    {title: 'Item 2', text: 'jajsdjoaijsd;'}
];

window.onload = () =>
    render(reader(items), document.body); 



