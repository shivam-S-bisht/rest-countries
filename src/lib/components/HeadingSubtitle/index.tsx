interface ISubtitleViewProps {
	title: string;
	subTitle: string;
}

function SubtitleView(props: ISubtitleViewProps) {
	const { title, subTitle } = props;
	return (
		<p className="m-0">
			{title}: <span className="fw-bold">{subTitle}</span>
		</p>
	);
}

export default SubtitleView;
