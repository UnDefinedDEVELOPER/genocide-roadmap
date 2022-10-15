import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const fetchCities = async () => {
		const res = await fetch('/api/cities');
		const data = await res.json();
		return data;
	};

	return {
		cities: fetchCities()
	};
};
