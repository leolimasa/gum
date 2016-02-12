import {el, stream, cell, template} from '../gum';
import rssList from './rssList';
import details from './details';

export const readerTpl = template(
    (list, details) => el('div', {}, [
    	el('h1', {}, 'Awesome RSS Reader'),
    	list,
	details
    ]
));

export const component = (curItem, items) =>
    stream.combineLatest(
	rssList(items),
	details(curItem),
	curItem,
	(list, details, selItem) => {
	    debugger;
	    return readerTpl(list, details);
	});

export const main = (items) =>
    component(cell().startWith(items[0]), items);

export default main;
