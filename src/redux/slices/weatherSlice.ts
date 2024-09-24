import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LocalWeather, Weather } from '../../types/weather.ts'
import { API_KEY, BASE_URL, DEFAULT_WEATHER_PARAMS } from '../../api/weatherApi.ts'
import { getTransformWeather } from '../../utils/getTransformWeather.ts'
import { RootState } from '../store.ts'
import { Status } from '../../types/status.ts'

interface WeatherSlice {
	list: LocalWeather
	status: Status
}

const initialState: WeatherSlice = {
	list: {
		currentTimeEpoch: 0,
		name: '',
		country: '',
		conditionText: '',
		timeEpoch: 0,
		tempC: 0,
		tempF: 0,
		conditionCode: 0,
		wind: 0,
		humidity: 0,
		feelsLikeC: 0,
		feelsLikeF: 0,
		vision: 0,
		uv: 0,
		forecast: [],
	},
	status: 'idle',
}

export const fetchWeather = createAsyncThunk<LocalWeather, string>(
	'weather/fetchWeather',
	async (city) => {
		const res = await fetch(
			`${ BASE_URL }/forecast.json?${ DEFAULT_WEATHER_PARAMS.join('&') }&q=${ city }&key=${ API_KEY }`
		)
		const weather = await res.json() as Weather
		
		return getTransformWeather(weather)
	}
)

const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		setEpoch: (state, action: PayloadAction<number>) => {
			state.list.currentTimeEpoch = action.payload
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchWeather.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchWeather.fulfilled, (state, action) => {
				state.list = action.payload
				state.status = 'received'
			})
	}
})

export const weatherReducer = weatherSlice.reducer
export const weatherActions = weatherSlice.actions

export const selectWeather = (state: RootState) => state.weather.list
export const selectWeatherStatus = (state: RootState) => state.weather.status
