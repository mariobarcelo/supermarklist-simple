import TodoItem from '../TodoItem';
import styles from './TodoList.module.css';

function TodoList({ itemsList }) {
	console.log('itemsList: ', itemsList);
	if (!itemsList) return;

	return (
		<div className={styles.list}>
			{itemsList.map(({ name, key }) => (
				<TodoItem key={key}>{name}</TodoItem>
			))}
		</div>
	);
}

export default TodoList;
