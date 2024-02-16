import '../src/index.css';

// Registers the msw addon
import { initialize, mswLoader } from 'msw-storybook-addon';

// Initialize MSW
initialize();

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
/** @type { import('@storybook/react').Preview } */
const preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		backgrounds: {
			values: [
				{ name: 'red', value: '#f00' },
				{ name: 'green', value: '#0f0' },
				{ name: 'blue', value: '#00f' },
			],
		},
		options: {
			storySort: {
				order: ['TaskList', 'Button', 'InboxScreen'],
			},
		},
		toc: {
			contentsSelector: '.sbdocs-content',
			headingSelector: 'h1, h2, h3',
			ignoreSelector: '#primary',
			title: 'Table of Contents',
			disable: false,
			unsafeTocbotOptions: {
				orderedList: false,
			},
		},
	},
	loaders: [mswLoader],
};

export default preview;
