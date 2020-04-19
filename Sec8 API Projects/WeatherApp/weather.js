class Weather {
	constructor(city, state) {
		this.apiKey = '96ed358732f6dd158639a7f6df00c526';
		this.city = city;
		this.state = state;
	}

	// Fetch weather from API
	async getWeather() {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state},USA&units=metric&appid=${this.apiKey}`
		);

		const responseData = await response.json();

		return responseData;
	}

	// change location
	changeLocation(city, state) {
		this.city = city;
		this.state = state;
	}
}
