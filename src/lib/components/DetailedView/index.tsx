import SubtitleView from '../HeadingSubtitle';
import styles from './styles.module.scss';

interface IDetailedViewProps {
	data?: ICountriesData[];
}

function DetailedView(props: IDetailedViewProps) {
	const { data } = props;
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
							<p className="m-0 mt-3 fw-bold">More details:</p>
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

export default DetailedView;
