import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ title }) => {
	return <div>{title}</div>;
};

TodoItem.propTypes = {
	/**
	 * The title of the todo item
	 */
	title: PropTypes.string,
};

export default TodoItem;
