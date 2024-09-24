import { LocalWeather } from '../types/weather.ts'
import { TodayHighlightItem, } from '../types/todayHighlightItem.ts'

export const getHighlight = (weather: LocalWeather): TodayHighlightItem => {
	if (weather.currentTimeEpoch === 0) return {} as TodayHighlightItem
	if (weather.currentTimeEpoch === weather.timeEpoch) {
		return {
			wind: Math.round(weather.wind),
			humidity: weather.humidity,
			vision: weather.vision,
			uv: weather.uv,
			sunrise: weather.forecast[0].astro.sunrise,
			sunset: weather.forecast[0].astro.sunset,
		}
	} else {
		return weather.forecast.reduce<TodayHighlightItem>((prev, item) => {
			const obj = item.hour.find(x => x.timeEpoch === weather.currentTimeEpoch)
			if (obj) {
				return {
					wind: Math.round(obj.wind),
					humidity: obj.humidity,
					vision: obj.vision,
					uv: obj.uv,
					sunrise: item.astro.sunrise,
					sunset: item.astro.sunset,
				}
			}
			return prev
		}, {} as TodayHighlightItem)
	}
}