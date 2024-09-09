import { ChangeEvent, useState } from 'react';
import styles from './styles.module.scss';
import { getCountriesByName } from '@/lib/utils/apis';
import ListView from '../ListView';
import DetailedView from '../DetailedView';

interface ISearchBox {
	view: boolean;
}

function SearchBox(props: ISearchBox) {
	const { view } = props;
	const [data, setData] = useState<ICountriesData[]>();

	async function handleChange(
		event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) {
		const input = event.target.value ?? '';
		const countries = await getCountriesByName(input);
		setData(countries);
	}

	return (
		<>
			{/* Can we add speech to search here ? */}
			<div
				data-view={view}
				className={`${styles.searchboxWrapper} border w-50 d-flex flex-column justify-content-center mb-3`}
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
				{!view && <ListView data={data} />}
			</div>
			{view && <DetailedView data={data} />}
		</>
	);
}

export default SearchBox;
