import { LocalWeather } from '../types/weather.ts'
import { Measurement } from '../types/measurement.ts'
import { getDateInfo } from './getDateInfo.ts'
import { ForecastItemInfo } from '../types/forecastItemInfo.ts'

export const getForecast = (
	weather: LocalWeather, measurement: Measurement
): ForecastItemInfo[] => {
	return weather.forecast.map((day, idx) => {
		if (idx === 0) {
			const obj: Omit<ForecastItemInfo, 'tempMax' | 'tempMin'> = {
				weekday: 'сегодня',
				epoch: weather.timeEpoch,
				iconCode: weather.conditionCode,
				measurement
			}
			
			if (measurement === 'celsius') {
				return {
					tempMax: Math.round(day.maxTempC),
					tempMin: Math.round(day.minTempC),
					...obj
				}
			} else {
				return {
					tempMax: Math.round(day.maxTempF),
					tempMin: Math.round(day.minTempF),
					...obj
				}
			}
		} else {
			const epoch = getForecastEpoch(idx)
			const {weekday} = getDateInfo(epoch)
			const obj: Omit<ForecastItemInfo, 'tempMax' | 'tempMin'> = {
				iconCode: weather.forecast[idx].conditionCode,
				epoch,
				weekday,
				measurement
			}
			
			if (measurement === 'celsius') {
				return {
					tempMax: Math.round(day.maxTempC),
					tempMin: Math.round(day.minTempC),
					...obj
				}
			} else {
				return {
					tempMax: Math.round(day.maxTempF),
					tempMin: Math.round(day.minTempF),
					...obj
				}
			}
		}
	})
}

const getForecastEpoch = (day: number) => {
	const date = new Date()
	date.setDate(date.getDate() + day)
	date.setHours(15, 0, 0, 0)
	return date.getTime() / 1000
}