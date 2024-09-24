import { CurrentWeather, LocalCurrentWeather, LocalWeather, Weather } from '../types/weather.ts'

export const getTransformWeather = (
	{location, current, forecast}: Weather
): LocalWeather => {
	return {
		currentTimeEpoch: location.localtime_epoch,
		name: location.name,
		timeEpoch: location.localtime_epoch,
		country: location.country,
		forecast: forecast.forecastday.map(item => ({
			date: item.date,
			dateEpoch: item.date_epoch,
			conditionCode: item.day.condition.code,
			astro: {
				sunset: item.astro.sunset.split(' ')[0],
				sunrise: item.astro.sunrise.split(' ')[0],
			},
			maxTempC: item.day.maxtemp_c,
			maxTempF: item.day.maxtemp_f,
			minTempC: item.day.mintemp_c,
			minTempF: item.day.mintemp_f,
			hour: item.hour.map(h => ({
				timeEpoch: h.time_epoch,
				...getTransformWeatherInfo(h)
			}))
		})),
		...getTransformWeatherInfo(current),
	}
}

const getTransformWeatherInfo = (obj: CurrentWeather): Omit<LocalCurrentWeather, 'timeEpoch'> => ({
	tempC: obj.temp_c,
	tempF: obj.temp_f,
	conditionCode: obj.condition.code,
	conditionText: obj.condition.text,
	vision: obj.vis_km,
	uv: obj.uv,
	feelsLikeF: obj.feelslike_f,
	feelsLikeC: obj.feelslike_c,
	wind: obj.wind_kph,
	humidity: obj.humidity
})