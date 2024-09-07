'use client';
import SearchBar from '@/components/SearchBar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Home() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<div className="d-flex justify-content-center mt-5">
				<SearchBar />
			</div>
		</QueryClientProvider>
	);
}
