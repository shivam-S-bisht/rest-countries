import { ChangeEvent, Fragment, useState } from 'react';
import styles from './styles.module.scss';
import { getCountriesByName } from '@/lib/utils/apis';

function SearchBox() {
	const [data, setData] = useState<ICountriesData[]>();

	async function handleChange(
		event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) {
		const input = event.target.value ?? '';
		const countries = await getCountriesByName(input);
		setData(countries);
	}

	return (
		<div
			className={`${styles.searchboxWrapper} border w-50 d-flex flex-column justify-content-center`}
		>
			<div className="d-flex align-items-center gap-2">
				<i className="bi bi-search text-secondary" />
				<input
					onChange={handleChange}
					type="text"
					placeholder="Search Countries"
					className="form-control-plaintext"
				/>
			</div>
			<div
				className={`${styles.searchResultsWrapper} d-flex flex-column`}
			>
				{data &&
					data.length > 0 &&
					data.map((item, index) => {
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
		</div>
	);
}

export default SearchBox;
