import React from "react";
import "./Weather.css";

export default function Weather() {
	let weatherData = {
		date: "Monday, February 13 • 20:50",
		city: "Toulouse",
		description: "clear sky",
		temperature: "8",
		imageUrl: "https://openweathermap.org/img/wn/01n.png",
		wind: "7",
		humidity: "81",
	};
	return (
		<div className="Weather">
			<h2>Get ready for today:</h2>
			<p className="date">{weatherData.date}</p>
			<div className="weather-today card border p-2">
				<p className="city">{weatherData.city}</p>
				<p className="weather-description">({weatherData.description})</p>
				<p className="temperature">
					{weatherData.temperature}°C&nbsp;
					<img
						src={weatherData.imageUrl}
						alt={weatherData.description}
						className="float-left"
					/>
				</p>
				<p className="other-infos">
					wind: {weatherData.wind} km/h • humidity: {weatherData.humidity}%
				</p>
			</div>
			<p className="units">
				Display current temperature in:
				<a href="/#">Celsius</a> |<a href="/#">Farenheit</a>
			</p>
		</div>
	);
}
