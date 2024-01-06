import InboxScreen from './index';
import store from '../../lib/store';
import { rest } from 'msw';
import { MockedState } from '../TaskList/TaskList.stories';
import { Provider } from 'react-redux';
import { fireEvent, waitFor, within, waitForElementToBeRemoved } from '@storybook/test';

export default {
	component: InboxScreen,
	title: 'InboxScreen',
	decorators: [(story) => <Provider store={store}>{story()}</Provider>],
	tags: ['autodocs'],
};

export const Default = {
	parameters: {
		msw: {
			handlers: [
				// create the mock router instead the real router
				// If it doesn't exist, the data will be get from server
				rest.get('https://jsonplaceholder.typicode.com/todos?userId=1', (req, res, ctx) => {
					return res(ctx.json(MockedState.tasks));
				}),
			],
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		// Waits for the component to transition from the loading state
		await waitForElementToBeRemoved(await canvas.findByTestId('loading'));
		await waitFor(async () => {
			// Simulates pinning the first task
			await fireEvent.click(canvas.getByLabelText('pinTask-1'));
			// Simulates pinning the third task
			await fireEvent.click(canvas.getByLabelText('pinTask-3'));
		});
	},
};

export const Error = {
	parameters: {
		msw: {
			handlers: [
				rest.get('https://jsonplaceholder.typicode.com/todos?userId=1', (req, res, ctx) => {
					return res(ctx.status(403));
				}),
			],
		},
	},
};
