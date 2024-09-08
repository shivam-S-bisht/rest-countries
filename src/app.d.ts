// declaring file is a module, because gloabl declare only works in a module
export {};

declare global {
	interface ICountriesData {
		name: {
			common: string;
			official: string;
			nativeName: {
				est: {
					official: string;
					common: string;
				};
			};
		};

		capital: string[];
		region: string;
		subregion: string;
		languages: {
			est: string;
		};

		maps: {
			googleMaps: string;
			openStreetMaps: string;
		};
		population: number;
		timezones: string[];
		continents: string[];
		flags: {
			png: string;
			svg: string;
			alt: string;
		};
		coatOfArms: {
			png: string;
			svg: string;
		};
	}
}
