import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from '../redux/slices/themeSlice.ts'
import { useActions } from './useActions.ts'
import { Theme } from '../types/theme.ts'

export const useTheme = (): [Theme, () => void] => {
	const theme = useSelector(selectTheme)
	const {setTheme} = useActions()
	
	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}
	
	useEffect(() => {
		document.body.dataset.theme = theme
	}, [theme])
	
	return [theme, toggleTheme]
}