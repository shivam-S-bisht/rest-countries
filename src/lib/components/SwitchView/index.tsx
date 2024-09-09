import { Dispatch, SetStateAction } from 'react';

interface ISwitchViewProps {
	setView: Dispatch<SetStateAction<boolean>>;
}

function SwitchView(props: ISwitchViewProps) {
	const { setView } = props;
	function handleChange() {
		setView(prev => !prev);
	}
	return (
		<div className="form-check form-switch">
			<input
				onChange={handleChange}
				className="form-check-input"
				type="checkbox"
				role="switch"
				id="flexSwitchCheckDefault"
			/>
			<label
				className="form-check-label"
				htmlFor="flexSwitchCheckDefault"
			>
				Toggle View
			</label>
		</div>
	);
}

export default SwitchView;
