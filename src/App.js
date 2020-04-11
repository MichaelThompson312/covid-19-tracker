import React from 'react';

import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import styles from './App.module.css';

import { getData } from './Api/apiIndex';
class App extends React.Component {
	state = {
		data: {},
		country: ''
	};

	async componentDidMount() {
		const data = await getData();
		this.setState({ data: data });
	}

	handleCountryChange = async (country) => {
		const fetchedData = await getData(country);

		this.setState({ data: fetchedData, country: country });
	};
	render() {
		const { data, country } = this.state;

		return (
			<div className={styles.container}>
				<h1>COVID-19 Daily Tracker</h1>
				<Cards data={this.state.data} />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart data={data} country={country} />
			</div>
		);
	}
}
export default App;
