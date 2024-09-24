import { configureStore } from '@reduxjs/toolkit'
import { measurementReducer } from './slices/measurementSlice.ts'
import { citiesReducer } from './slices/citiesSlice.ts'
import { weatherReducer } from './slices/weatherSlice.ts'
import { themeReducer } from './slices/themeSlice.ts'

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		measurement: measurementReducer,
		weather: weatherReducer,
		cities: citiesReducer,
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch