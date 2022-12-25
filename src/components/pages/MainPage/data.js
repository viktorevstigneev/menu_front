import menuType1 from '../../../img/menu_type3.png';
import menuType2 from '../../../img/menu_type2.png';
import menuType3 from '../../../img/menu_type1.png';

import menuRedType1 from '../../../img/menu_red_type1.jpg';
import menuBlackType1 from '../../../img/menu_black_type1.jpg';
import menuBlueType1 from '../../../img/menu_blue_type1.webp';

import menuRedType1Bar from '../../../img/menu_red_type1-bar.webp';
import menuBlueType1Bar from '../../../img/menu_blue_type1-bar.webp';
import menuBlackType1Bar from '../../../img/menu_black_type1-bar.jpg';

import clear from '../../../img/close.png';

export const IMAGES_RESTAURANTS = [
	{
		image: menuRedType1,
		color: 'red',
		type: 'card',
	},
	{
		image: menuBlackType1,
		color: 'black',
		type: 'card',
	},
	{
		image: menuBlueType1,
		color: 'blue',
		type: 'book',
	},
	{
		image: menuRedType1,
		color: 'red',
		type: 'fold',
	},
	{
		image: menuBlackType1,
		color: 'black',
		type: 'card',
	},
	{
		image: menuBlueType1,
		color: 'blue',
		type: 'card',
	},
];

export const IMAGES_BAR = [
	{
		image: menuRedType1Bar,
		color: 'red',
		type: 'card',
	},
	{
		image: menuBlueType1Bar,
		color: 'blue',
		type: 'book',
	},
	{
		image: menuBlackType1Bar,
		color: 'black',
		type: 'fold',
	},
];

export const COLORS_FILTER = [

	{
		name: 'black',
		hex: '#000',
	},
	{
		name: 'blue',
		hex: '#2600ff',
	},
	{
		name: 'red',
		hex: '#ff0000',
	},
	{
		name: 'green',
		hex: '#00bb10',
	},
	{
		name: 'yellow',
		hex: '#fffb00',
	},
];

export const TYPE_FILTER = [
	{
		type: 'card',
		img: menuType1,
	},
	{
		type: 'book',
		img: menuType2,
	},
	{
		type: 'fold',
		img: menuType3,
	},
];
