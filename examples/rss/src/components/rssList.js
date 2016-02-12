import {el, stream, set, cell, template} from '../gum';

const itemTpl = template(
    (title, onclick) => el('li', {onClick: onclick}, title));

const rssListTpl = template(
    (items) => el('ul', {}, items));

const view = (items, selectedItem) =>
      rssListTpl(
	  items.map(
	      item =>
		  itemTpl(item.title, set(item, selectedItem))
	  )
      );

export const main = (items, selectedItem) => {
    return stream.return(
    	view(items)	
    );
};

export default main;
