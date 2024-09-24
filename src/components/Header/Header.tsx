import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.tsx'
import Search from '../Search/Search.tsx'
import logo from '../../assets/logo.png'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<div className={ styles.header }>
			<img src={ logo } alt="logo" />
			<Search />
			<ThemeSwitcher />
		</div>
	)
}

export default Header