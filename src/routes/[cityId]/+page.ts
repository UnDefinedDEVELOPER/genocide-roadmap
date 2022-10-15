import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const fetchCity = async (id: string) => {
		const res = await fetch(`/api/cities/${id}`);
		const data = await res.json();
		return data;
	};

	return {
		city: fetchCity(params.cityId)
	};
};
