import { ChangeEvent, Fragment, useState } from 'react';
import styles from './styles.module.scss';
import { getCountriesByName } from '@/lib/utils/apis';

interface ISearchBox {
	view: boolean;
}
interface ISubtitleViewProps {
	title: string;
	subTitle: string;
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

	function SubtitleView(props: ISubtitleViewProps) {
		const { title, subTitle } = props;
		return (
			<p className="m-0">
				{title}: <span className="fw-bold">{subTitle}</span>
			</p>
		);
	}

	function ListView() {
		if (!data || data.length === 0) return null;

		return (
			<div
				className={`${styles.searchResultsWrapper} d-flex flex-column`}
			>
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

	function DetailedView() {
		if (!data || data.length === 0) return;
		return (
			<div
				className={`${styles.searchResultsWrapper} d-flex gap-3 flex-wrap justify-content-center overflow-scroll`}
			>
				{data.map((item, index) => {
					return (
						<div className={`${styles.card} card`} key={index}>
							<img
								src={item.flags.png}
								className="card-img-top w-100"
								alt={item.name.common}
							/>
							<div className="card-body">
								<p className="m-0 fs-4 fw-bold">
									{item.name.official}
								</p>
								<p className="m-0 mt-3 fw-bold">
									More details:
								</p>
								<SubtitleView
									title="Common Name"
									subTitle={item.name.common}
								/>
								<SubtitleView
									title="Capital"
									subTitle={item.capital}
								/>
								<SubtitleView
									title="Region"
									subTitle={item.region}
								/>
								<SubtitleView
									title="Population"
									subTitle={item.population + ''}
								/>
								<a href={item.maps.googleMaps} target="_blank">
									View on map
								</a>
							</div>
						</div>
					);
				})}
			</div>
		);
	}

	return (
		<>
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
				{!view && <ListView />}
			</div>
			{view && <DetailedView />}
		</>
	);
}

export default SearchBox;
