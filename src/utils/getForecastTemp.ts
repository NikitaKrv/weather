import { LocalWeather } from '../types/weather.ts'
import { Measurement } from '../types/measurement.ts'

export const getForecastTemp = (
	weather: LocalWeather, measurement: Measurement
): number[] => {
	const epoch = new Date(weather.currentTimeEpoch * 1000)
		.setHours(0, 0, 0, 0) / 1000
	
	for (let day of weather.forecast) {
		if (day.hour[0].timeEpoch === epoch) {
			if (measurement === 'celsius') {
				return day.hour.map(x => Math.round(x.tempC))
			} else {
				return day.hour.map(x => Math.round(x.tempF))
			}
		}
	}
	return []
}