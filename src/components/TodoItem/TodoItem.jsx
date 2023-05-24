import React from 'react';
import styles from './TodoItem.module.css';
import { X } from 'react-feather';

function TodoItem({ children }) {
	return (
		<div className={styles.item}>
			{children}
			<button>
				<X />
			</button>
		</div>
	);
}

export default TodoItem;
