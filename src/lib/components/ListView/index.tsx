import { Fragment } from 'react';
import styles from './styles.module.scss';

interface IListViewProps {
	data?: ICountriesData[];
}

function ListView(props: IListViewProps) {
	const { data } = props;
	if (!data || data.length === 0) return null;

	return (
		<div className={`${styles.searchResultsWrapper} d-flex flex-column`}>
			{data.map((item, index) => {
				return (
					<Fragment key={index}>
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
					</Fragment>
				);
			})}
		</div>
	);
}

export default ListView;
