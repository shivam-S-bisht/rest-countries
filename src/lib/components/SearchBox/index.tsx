import { ChangeEvent, Fragment, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { getCountriesByName } from '@/lib/utils/apis';

function SearchBox() {
	const [data, setData] = useState<ICountriesData[]>();
	const resultsWrapperRef = useRef<HTMLDivElement>(null);
	const resultsCardRef = useRef<HTMLDivElement>(null);

	async function handleChange(
		event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) {
		const input = event.target.value ?? '';
		const countries = await getCountriesByName(input);
		setData(countries);
	}

	useEffect(() => {
		let itemCount = 10; // Initial number of items
		if (data && data?.length < 10) itemCount = data.length;
		if (!resultsCardRef.current || !resultsWrapperRef.current) return;

		const resultCardOffsetHeight = resultsCardRef.current.offsetHeight;
		resultsWrapperRef.current.style.height = `${
			resultCardOffsetHeight * itemCount
		}px`; // Set height based on 10 items
	}, [data, resultsCardRef.current, resultsWrapperRef.current]);

	return (
		<div
			className={`${styles.searchboxWrapper} border w-50 d-flex flex-column justify-content-center`}
		>
			<div className="d-flex align-items-center gap-2">
				<i className="bi bi-search text-secondary" />
				<input
					onChange={handleChange}
					type="text"
					placeholder="Search"
					className="form-control-plaintext"
				/>
			</div>
			<div
				ref={resultsWrapperRef}
				className={`${styles.searchResultsWrapper} d-flex flex-column`}
			>
				{data &&
					data.length > 0 &&
					data.map((item, index) => {
						return (
							<div ref={resultsCardRef} key={index}>
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
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default SearchBox;
