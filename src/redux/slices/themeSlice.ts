import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Theme } from '../../types/theme.ts'
import { RootState } from '../store.ts'

const themeSlice = createSlice({
	name: 'theme',
	initialState: 'dark' as Theme,
	reducers: {
		setTheme: (_, action: PayloadAction<Theme>) => action.payload
	}
})

export const themeReducer = themeSlice.reducer
export const themeActions = themeSlice.actions

export const selectTheme = (state: RootState) => state.theme