'use client';
import SearchBox from '@/lib/components/SearchBox';
import SwitchView from '@/lib/components/SwitchView';
import { useEffect, useState } from 'react';

export default function Home() {
	// false - normal view, true - detailed view
	const [view, setView] = useState(false);

	useEffect(() => {
		if ('serviceWorker' in navigator) {
			global.navigator.serviceWorker
				.register('/sw.js')
				.then(registration =>
					console.log('scope is: ', registration.scope),
				);
		}
	}, []);

	return (
		<div className="m-4 overflow-hidden">
			<SwitchView setView={setView} />
			<div className="d-flex align-items-center flex-column">
				<SearchBox view={view} />
			</div>
		</div>
	);
}
