import { Button } from './Button';
import { useArgs } from '@storybook/preview-api';
import {
	Controls,
	Description,
	Stories,
	Subtitle,
	Title,
	Primary as PrimaryDocs,
	ArgTypes,
	Canvas,
	ColorPalette,
} from '@storybook/blocks';

export default {
	component: Button,
	args: { theme: 'light' },
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<Subtitle />
					<Description />
					{/* <Canvas /> */}
					<PrimaryDocs />
					<ColorPalette />
					{/* <ArgTypes /> */}
					<Controls />
					<Stories />
				</>
			),
		},
	},
};

export const Primary = {
	args: {
		label: 'Primary',
		primary: true,
	},
};

export const Secondary = {
	args: {
		label: 'Secondary',
		primary: false,
	},
};

export const Large = {
	args: {
		label: 'Large',
		primary: false,
		size: 'large',
	},
};

export const Small = {
	args: {
		label: 'Small',
		primary: false,
		size: 'small',
	},
};

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

export const ChangeBgColor = {
	args: {
		label: 'Change Bg Color',
		primary: false,
		backgroundColor: 'Yellow',
	},

	render: (args) => {
		const [{ backgroundColor }, updateArgs] = useArgs();

		const changeColor = () => {
			const newColor = getRandomColor();
			updateArgs({ backgroundColor: newColor });
		};

		return (
			<Button
				{...args}
				backgroundColor={backgroundColor}
				onClick={changeColor}
			/>
		);
	},
};

export const ButtonWithWrapper = {
	args: {
		primary: false,
		label: 'Button with Wrapper',
	},
	decorators: [
		(Story, ...props) => {
			console.log({ props });
			return (
				<div style={{ margin: '2rem' }}>
					<Story />
				</div>
			);
		},
	],
};
