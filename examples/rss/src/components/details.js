import {el, stream, set, template} from '../gum';

const detailsTpl = template(
    (title, text) => el('div', {}, [
   	el('h1', {}, title),
    	el('p', {}, text)
]));

const view = (item) =>
      detailsTpl(item.title, item.text);

export const main = (curItem) =>
    curItem.map(item => {
	debugger;
	return view(item);});

export default main;
