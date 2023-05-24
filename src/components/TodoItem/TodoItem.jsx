import styles from './TodoItem.module.css';
import { X } from 'react-feather';
import VisuallyHidden from '../VisuallyHidden';

function TodoItem({ id, children, itemsList, setItemsList }) {
	return (
		<div className={styles.item}>
			<p>{children}</p>
			<button
				className={styles.button}
				onClick={() => {
					// console.log('itemsList: ', itemsList);
					const currentItems = [...itemsList];
					// console.log('currentItems: ', currentItems);
					const nextItemsList = currentItems.filter(
						(item) => item.id !== id
					);
					// console.log('nextItemsList:', nextItemsList);
					setItemsList(nextItemsList);
				}}>
				<X color={'#fffffe'} />
				<VisuallyHidden>Delete item</VisuallyHidden>
			</button>
		</div>
	);
}

export default TodoItem;
