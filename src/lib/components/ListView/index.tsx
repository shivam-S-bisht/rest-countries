import { Fragment, useRef, useState } from 'react';
import styles from './styles.module.scss';
import ModalView from '../ModalView';

interface IListViewProps {
	data?: ICountriesData[];
}

function ListView(props: IListViewProps) {
	const { data } = props;
	const modalRef = useRef(null);

	const [modalData, setModalData] = useState<ICountriesData>();

	function handleClick(item: ICountriesData) {
		modalRef.current = new bootstrap.Modal('#detailModal');
		// @ts-ignore always defined show()
		modalRef.current.show();
		setModalData(item);
	}

	// TODO could be a better way to do this ?
	function hideModal() {
		// @ts-ignore always defined hide()
		modalRef.current.hide();
	}

	if (!data || data.length === 0) return null;

	return (
		<>
			<ModalView data={modalData} hideModal={hideModal} />
			<div
				className={`${styles.searchResultsWrapper} d-flex flex-column`}
			>
				{data.map((item, index) => {
					return (
						<button
							onClick={() => handleClick(item)}
							key={index}
							className="btn p-0 border-0"
						>
							<div className={styles.hr} />
							<div
								className={`${styles.resultCard} d-flex align-items-center gap-2 p-2`}
							>
								<div
									className={styles.flagImage}
									style={{
										backgroundImage: `url(${item.flags.png})`,
									}}
								></div>
								<p className="m-0">{item.name.official}</p>
							</div>
						</button>
					);
				})}
			</div>
		</>
	);
}

export default ListView;
