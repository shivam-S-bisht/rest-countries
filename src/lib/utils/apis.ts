export async function getCountriesByName(
	term?: string,
): Promise<ICountriesData[]> {
	if (!term) return [];

	try {
		const resp = await fetch(`https://restcountries.com/v3.1/name/${term}`);
		const countries = await resp.json();
		return countries;
	} catch (e) {
		return [];
	}
}
