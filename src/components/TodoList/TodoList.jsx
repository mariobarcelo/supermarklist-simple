import TodoItem from '../TodoItem';
import styles from './TodoList.module.css';

function TodoList({ itemsList, setItemsList }) {
	// console.log('itemsList: ', itemsList);
	if (!itemsList) return;

	return (
		<div className={styles.list}>
			{itemsList.map(({ name, id }) => (
				<TodoItem
					key={id}
					id={id}
					itemsList={itemsList}
					setItemsList={setItemsList}>
					{name}
				</TodoItem>
			))}
		</div>
	);
}

export default TodoList;
