import styles from './App.module.css';
import TodoApp from '../TodoApp';

function App() {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.h1}>SupermarkList</h1>
			<TodoApp />
		</div>
	);
}

export default App;
