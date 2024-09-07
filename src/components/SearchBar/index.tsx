import styles from './styles.module.scss';

function SearchBar() {
	return (
		<div className={`${styles.searchboxWrapper} border rounded-pill w-50`}>
			<i className="bi bi-search"></i>
			<input
				type="text"
				placeholder="Search"
				className="form-control-plaintext text-secondary"
			/>
			<div></div>
		</div>
	);
}

export default SearchBar;
