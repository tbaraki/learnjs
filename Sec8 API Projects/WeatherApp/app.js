// init local storage
const storage = new Storage();

// get stored location data
const weatherLocation = storage.getLocationData();

// init Weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// init UI
const ui = new UI();

// create onload event listener, get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

// modal change btn event listenner, change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
	const city = document.getElementById('city').value;
	const state = document.getElementById('state').value;

	weather.changeLocation(city, state);

	// set location in local storage
	storage.setLocationData(city, state);

	// get weather for new location
	getWeather();

	// close the modal (jquery)
	$('#locModal').modal('hide');
});

function getWeather() {
	weather
		.getWeather()
		.then((results) => {
			ui.paint(results);
		})
		.catch((err) => console.log(err));
}
