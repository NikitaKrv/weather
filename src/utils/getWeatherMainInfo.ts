import { LocalWeather, WeatherInfo, WeatherWithMinMax } from '../types/weather.ts'
import { Measurement } from '../types/measurement.ts'

export const getWeatherMainInfo = (
	weather: LocalWeather, measurement: Measurement
): WeatherInfo => {
	if (weather.currentTimeEpoch === 0) return {} as WeatherInfo
	if (weather.timeEpoch === weather.currentTimeEpoch) {
		return getWeatherByMeasurement({
			minTempF: weather.forecast[0].minTempF,
			minTempC: weather.forecast[0].minTempC,
			maxTempF: weather.forecast[0].maxTempF,
			maxTempC: weather.forecast[0].maxTempC,
			...weather
		}, measurement)
	} else {
		const selectedWeather = weather.forecast.reduce<WeatherWithMinMax>((prev, item) => {
			const obj = item.hour.find(x => x.timeEpoch === weather.currentTimeEpoch)
			if (obj) {
				return {
					maxTempC: item.maxTempC,
					maxTempF: item.maxTempF,
					minTempC: item.minTempC,
					minTempF: item.minTempF,
					...obj
				}
			}
			return prev
		}, {} as WeatherWithMinMax)
		return getWeatherByMeasurement(selectedWeather, measurement)
	}
}

const getWeatherByMeasurement = (
	obj: WeatherWithMinMax, measurement: Measurement
): WeatherInfo => {
	const weather = {
		uv: obj.uv,
		vision: obj.vision,
		wind: obj.wind,
		humidity: obj.humidity,
		conditionCode: obj.conditionCode,
		timeEpoch: obj.timeEpoch,
		conditionText: obj.conditionText
	}
	if (measurement === 'celsius') {
		return {
			feelsLike: Math.round(obj.feelsLikeC),
			temp: Math.round(obj.tempC),
			maxTemp: Math.round(obj.maxTempC),
			minTemp: Math.round(obj.minTempC),
			...weather
		}
	} else {
		return {
			feelsLike: Math.round(obj.feelsLikeF),
			temp: Math.round(obj.tempF),
			maxTemp: Math.round(obj.maxTempF),
			minTemp: Math.round(obj.minTempF),
			...weather
		}
	}
}