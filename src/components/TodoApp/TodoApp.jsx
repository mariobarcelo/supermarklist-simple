import React from 'react';
import TodoInput from '../TodoInput';
import TodoList from '../TodoList';

function TodoApp() {
	const [itemsList, setItemsList] = React.useState([]);

	return (
		<>
			<TodoInput itemsList={itemsList} setItemsList={setItemsList} />
			<TodoList itemsList={itemsList} setItemsList={setItemsList} />
		</>
	);
}

export default TodoApp;
