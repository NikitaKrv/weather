import Select, { SingleValue } from 'react-select'
import { useActions } from '../../hooks/useActions.ts'
import { Measurement, Option } from '../../types/measurement.ts'
import marker from '../../assets/weatherIcons/map-marker.svg'
import CelsiusIcon from '../UI/CelsiusIcon/CelsiusIcon.tsx'
import FahrenheitIcon from '../UI/FahrenheitIcon/FahrenheitIcon.tsx'
import styles from './TodayMainHeader.module.scss'

interface TodayMainHeaderProps {
	measurement: Measurement,
	city: string,
	country: string,
}

const TodayMainHeader = ({city, country, measurement}: TodayMainHeaderProps) => {
	const {setMeasurement} = useActions()
	
	const options: Option[] = [
		{
			value: 'celsius',
			label: <div className={ styles.icon }><CelsiusIcon /></div>
		},
		{
			value: 'fahrenheit',
			label: <div className={ styles.icon }><FahrenheitIcon /></div>
		},
	]
	
	const onChange = (selectedOption: SingleValue<Option>) => {
		if (selectedOption) {
			setMeasurement(selectedOption.value)
		}
	}
	
	return (
		<div className={ styles.mainHeader }>
			<div className={ styles.location }>
				<img src={ marker } alt="marker icon" />
				{ city }, { country }
			</div>
			<Select
				className={ styles.select }
				defaultValue={ options[0] }
				value={ options.find(x => x.value === measurement) }
				onChange={ onChange }
				options={ options }
				isSearchable={ false }
				hideSelectedOptions
				blurInputOnSelect
			/>
		</div>
	)
}

export default TodayMainHeader