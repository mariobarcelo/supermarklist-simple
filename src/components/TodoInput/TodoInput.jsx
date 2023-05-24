import React from 'react';
import VisuallyHidden from '../VisuallyHidden';
import { v4 as uuidv4 } from 'uuid';
import styles from './TodoInput.module.css';

function TodoInput({ itemsList, setItemsList }) {
	const [inputValue, setInputValue] = React.useState('');

	return (
		<form
			className={styles.form}
			onSubmit={(event) => {
				event.preventDefault();

				// console.log(inputValue);

				const nextItem = { name: inputValue, id: uuidv4() };

				const nextItemsList = [...itemsList, nextItem];

				setItemsList(nextItemsList);

				setInputValue('');
			}}>
			<VisuallyHidden>
				<label>Add an item:</label>
			</VisuallyHidden>
			<input
				required
				className={styles.input}
				type='text'
				value={inputValue}
				onChange={(event) => {
					setInputValue(event.target.value);
				}}
			/>
			<button className={styles.button}>Add item</button>
		</form>
	);
}

export default TodoInput;
