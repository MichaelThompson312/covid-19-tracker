import axios from 'axios';
import CountryPicker from '../components/CountryPicker/CountryPicker';

const url = 'https://covid19.mathdro.id/api';

export const getData = async (country) => {
	let changeableURL = url;

	if (country) {
		changeableURL = `${url}/countries/${country}`;
	}

	try {
		const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableURL);

		return {
			confirmed,
			recovered,
			deaths,
			lastUpdate
		};
	} catch (error) {}
};

export const getDailyData = async () => {
	try {
		const { data } = await axios.get(`${url}/daily`);

		return data.map(({ confirmed, deaths, reportDate: date }) => ({
			confirmed: confirmed.total,
			deaths: deaths.total,
			date
		}));
	} catch (error) {}
};

export const getCountries = async () => {
	try {
		const { data: { countries } } = await axios.get(`${url}/countries`);
		return countries.map((country) => country.name);
	} catch (error) {}
};
