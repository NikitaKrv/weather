import { bindActionCreators } from '@reduxjs/toolkit'
import { useAppDispatch } from './useAppDispatch.ts'
import { measurementActions } from '../redux/slices/measurementSlice.ts'
import { fetchCities } from '../redux/slices/citiesSlice.ts'
import { fetchWeather, weatherActions } from '../redux/slices/weatherSlice.ts'
import { themeActions } from '../redux/slices/themeSlice.ts'

const actions = {
	...measurementActions,
	...themeActions,
	...weatherActions,
	fetchCities,
	fetchWeather
}

export const useActions = () => {
	const dispatch = useAppDispatch()
	
	return bindActionCreators(actions, dispatch)
}