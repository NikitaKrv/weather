import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store.ts'
import { Measurement } from '../../types/measurement.ts'

const measurementSlice = createSlice({
	name: 'measurement',
	initialState: 'celsius' as Measurement,
	reducers: {
		setMeasurement: (_, action: PayloadAction<Measurement>) => action.payload
	}
})

export const measurementReducer = measurementSlice.reducer
export const measurementActions = measurementSlice.actions

export const selectMeasurement = (state: RootState) => state.measurement