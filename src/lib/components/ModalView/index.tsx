import SubtitleView from '../HeadingSubtitle';

interface IModalViewProps {
	data?: ICountriesData;
	hideModal: () => void;
}

function ModalView(props: IModalViewProps) {
	const { data, hideModal } = props;

	return (
		<div
			className="modal fade"
			id="detailModal"
			tabIndex={-1}
			role="dialog"
			aria-labelledby="detailModal"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					{data && (
						<div className="modal-body">
							<img
								src={data.flags.png}
								className="card-img-top w-100"
								alt={data.name.common}
							/>
							<div className="card-body">
								<p className="m-0 fs-4 fw-bold">
									{data.name.official}
								</p>
								<p className="m-0 mt-3 fw-bold">
									More details:
								</p>
								<SubtitleView
									title="Common Name"
									subTitle={data.name.common}
								/>
								<SubtitleView
									title="Capital"
									subTitle={data.capital}
								/>
								<SubtitleView
									title="Region"
									subTitle={data.region}
								/>
								<SubtitleView
									title="Population"
									subTitle={data.population + ''}
								/>
								<a href={data.maps.googleMaps} target="_blank">
									View on map
								</a>
							</div>
						</div>
					)}
					<div className="modal-footer">
						<button
							onClick={hideModal}
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModalView;
