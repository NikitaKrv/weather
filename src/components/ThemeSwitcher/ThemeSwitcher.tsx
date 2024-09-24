import { LuSunMedium } from 'react-icons/lu'
import { FaMoon } from 'react-icons/fa'
import { useTheme } from '../../hooks/useTheme.ts'
import styles from './ThemeSwitcher.module.scss'

const ThemeSwitcher = () => {
	const [theme, toggleTheme] = useTheme()
	
	return (
		<button className={ styles.themeSwitcher } onClick={ toggleTheme }>
			<div
				className={ styles.light }>
				<LuSunMedium size={ 30 } className={ styles.sun } />
			</div>
			<div className={ styles.dark }>
				<FaMoon size={ 24 } className={ styles.moon } />
			</div>
			<div
				style={ {left: theme === 'light' ? '0px' : '50px'} }
				className={ styles.highlight }
			/>
		</button>
	)
}

export default ThemeSwitcher