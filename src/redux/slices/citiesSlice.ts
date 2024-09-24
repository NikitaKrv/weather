import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { City } from '../../types/cities.ts'
import { API_KEY, BASE_URL } from '../../api/weatherApi.ts'
import { RootState } from '../store.ts'

const initialState: City[] = []

export const fetchCities = createAsyncThunk<City[], string>(
	'cities/fetchCities',
	async (city: string) => {
		const response = await fetch(`${ BASE_URL }/search.json?q=${ city }&key=${ API_KEY }`)
		const cities = await response.json() as City[]
		
		return cities.map(city => ({
			id: city.id,
			name: city.name,
			country: city.country
		}))
	}
)

const citiesSlice = createSlice({
	name: 'idCity',
	initialState,
	reducers: {},
	extraReducers: builder => (
		builder
			.addCase(fetchCities.fulfilled, (_, action) => action.payload)
	)
})

export const citiesReducer = citiesSlice.reducer

export const selectCities = (state: RootState) => state.cities