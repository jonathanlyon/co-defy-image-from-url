import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
	id: 'co-defy-image-from-url',
	name: 'Image from URL',
	icon: 'box',
	description: 'Displays external image from URL entered into an input field',
	component: InterfaceComponent,
	options: null,
	types: ['string'],
});
