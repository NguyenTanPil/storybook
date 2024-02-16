import TodoItem from '.';

export default {
	title: 'Design System/Atoms/Todo',
	component: TodoItem,
	render: (args, { loaded: { todo } }) => (
		<TodoItem
			{...args}
			{...todo}
		/>
	),
};

export const Primary = {
	loaders: [
		async () => ({
			todo: { title: 'Todo title' },
		}),
	],
};
