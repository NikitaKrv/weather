import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IoSearch } from 'react-icons/io5'
import { selectCities } from '../../redux/slices/citiesSlice.ts'
import { useActions } from '../../hooks/useActions.ts'
import FoundCities from '../FoundCities/FoundCities.tsx'
import styles from './Search.module.scss'

const Search = () => {
	const [value, setValue] = useState('')
	const [isOpen, setIsOpen] = useState(false)
	const cities = useSelector(selectCities)
	const {fetchCities, fetchWeather} = useActions()
	const cls: string[] = [styles.searchField]
	
	if (isOpen) cls.push(styles.open)
	
	useEffect(() => {
		fetchWeather('Москва Россия')
	}, [])
	
	useEffect(() => {
		if (cities.length > 0) {
			setIsOpen(true)
		} else {
			setIsOpen(false)
		}
	}, [cities])
	
	useEffect(() => {
		if (value.length < 2) {
			setIsOpen(false)
		} else {
			fetchCities(value)
		}
	}, [value])
	
	const handleSelectCity = (city: string) => {
		fetchWeather(city)
		setValue('')
		setIsOpen(false)
	}
	
	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}
	
	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (!cities) return
		
		if (e.code === 'Enter' && cities.length > 0) {
			handleSelectCity(`${ cities[0].name },${ cities[0].country }`)
		}
	}
	
	return (
		<div className={ styles.search }>
			<div className={ cls.join(' ') }>
				<input
					type="text"
					value={ value }
					onChange={ handleOnChange }
					onKeyDown={ handleKeyDown }
					placeholder="Введите название города..."
				/>
				<IoSearch size={ 25 } />
			</div>
			{ isOpen && <FoundCities onClick={ handleSelectCity } cities={ cities } /> }
		</div>
	)
}

export default Search