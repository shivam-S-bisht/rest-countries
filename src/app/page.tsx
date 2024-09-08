'use client';
import SearchBox from '@/lib/components/SearchBox';
import { useEffect } from 'react';

export default function Home() {
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
		<div className="d-flex justify-content-center mt-5">
			<SearchBox />
		</div>
	);
}
