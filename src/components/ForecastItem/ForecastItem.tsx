import { useLazySvgImport } from '../../hooks/useLazySvgImport.ts'
import { getConditionInfo } from '../../utils/getConditionInfo.ts'
import { ForecastItemInfo } from '../../types/forecastItemInfo.ts'
import CelsiusIcon from '../UI/CelsiusIcon/CelsiusIcon.tsx'
import FahrenheitIcon from '../UI/FahrenheitIcon/FahrenheitIcon.tsx'
import styles from './ForecastItem.module.scss'

export interface ForecastItemProps extends ForecastItemInfo {
	onClick: (epoch: number) => void
}

const ForecastItem = (
	{iconCode, tempMax, tempMin, weekday, epoch, measurement, onClick}: ForecastItemProps
) => {
	const measurementIcon = measurement === 'celsius' ? <CelsiusIcon /> : <FahrenheitIcon />
	const {iconName} = getConditionInfo(iconCode || 1000)
	const path = useLazySvgImport(iconName)
	
	return (
		<button className={ styles.item } onClick={ () => onClick(epoch) }>
			<div className={ styles.weekday }>{ weekday }</div>
			<img className={ styles.img } src={ path } alt="weather icon" />
			<div className={ styles.temp }>
				<span>Днем: { tempMax }</span> { measurementIcon }
			</div>
			<div className={ styles.temp }>
				<span>Ночью: { tempMin }</span> { measurementIcon }
			</div>
		</button>
	)
}

export default ForecastItem