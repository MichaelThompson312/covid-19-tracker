import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { getCountries } from '../../Api/apiIndex';

const CountryPicker = ({ handleCountryChange }) => {
	const [ fetchedCountries, setfetchedCountries ] = useState([]);

	useEffect(
		() => {
			const fetchCountries = async () => {
				setfetchedCountries(await getCountries());
			};

			fetchCountries();
		},
		[ setfetchedCountries ]
	);

	return (
		<FormControl className={styles.FormControl}>
			<NativeSelect
				defaultValue=""
				onChange={(e) => {
					handleCountryChange(e.target.value);
				}}
			>
				<option value="Global">Global</option>
				{fetchedCountries.map((country) => (
					<option key={country} value={country}>
						{country}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
};
export default CountryPicker;
