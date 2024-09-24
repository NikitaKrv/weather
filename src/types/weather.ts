export interface LocalWeather extends LocalCurrentWeather {
	currentTimeEpoch: number,
	name: string,
	country: string,
	forecast: LocalForecastDay[]
}

export interface LocalCurrentWeather {
	tempC: number,
	tempF: number,
	feelsLikeC: number,
	feelsLikeF: number,
	vision: number,
	wind: number,
	conditionCode: number,
	conditionText: string,
	humidity: number,
	uv: number,
	timeEpoch: number
}

export interface LocalForecastDay {
	date: string,
	dateEpoch: number,
	maxTempC: number,
	maxTempF: number,
	minTempC: number,
	minTempF: number,
	conditionCode: number,
	astro: Astro,
	hour: LocalCurrentWeather[]
}

export interface WeatherWithMinMax extends LocalCurrentWeather {
	maxTempC: number,
	maxTempF: number,
	minTempC: number,
	minTempF: number
}

export interface WeatherInfo
	extends Pick<
		LocalCurrentWeather,
		'wind' | 'conditionCode' | 'humidity' |
		'uv' | 'timeEpoch' | 'conditionText'
	> {
	temp: number,
	feelsLike: number,
	maxTemp: number,
	minTemp: number
}

export interface Weather {
	location: {
		name: string,
		localtime_epoch: number,
		country: string
	}
	current: CurrentWeather,
	forecast: Forecast
}

export interface CurrentWeather {
	temp_c: number,
	temp_f: number,
	condition: {
		text: string,
		code: number
	},
	wind_kph: number,
	humidity: number,
	feelslike_c: number,
	feelslike_f: number,
	vis_km: number,
	uv: number
}

export interface Forecast {
	forecastday: ForecastDay[]
}

export interface ForecastDay {
	date: string,
	date_epoch: number,
	day: {
		maxtemp_c: number,
		maxtemp_f: number,
		mintemp_c: number,
		mintemp_f: number,
		condition: {
			text: string,
			code: number
		}
	},
	astro: Astro,
	hour: Hour[]
}

export interface Astro {
	sunrise: string,
	sunset: string,
}

export interface Hour extends CurrentWeather {
	time_epoch: number
}