import { useSelector } from 'react-redux'
import { useLazySvgImport } from '../../hooks/useLazySvgImport.ts'
import { getConditionInfo } from '../../utils/getConditionInfo.ts'
import { selectMeasurement } from '../../redux/slices/measurementSlice.ts'
import { selectWeather, selectWeatherStatus } from '../../redux/slices/weatherSlice.ts'
import { getWeatherMainInfo } from '../../utils/getWeatherMainInfo.ts'
import { getDateInfo } from '../../utils/getDateInfo.ts'
import Board from '../Wrappers/Board/Board.tsx'
import TodayMainHeader from '../TodayMainHeader/TodayMainHeader.tsx'
import CelsiusIcon from '../UI/CelsiusIcon/CelsiusIcon.tsx'
import FahrenheitIcon from '../UI/FahrenheitIcon/FahrenheitIcon.tsx'
import Loader from '../UI/Loader/Loader.tsx'
import styles from './TodayMain.module.scss'

const TodayMain = () => {
	const measurement = useSelector(selectMeasurement)
	const weather = useSelector(selectWeather)
	const weatherInfo = getWeatherMainInfo(weather, measurement)
	const {iconName, description} = getConditionInfo(weatherInfo.conditionCode)
	const path = useLazySvgImport(iconName)
	const {weekday, date} = getDateInfo(weather.currentTimeEpoch)
	const status = useSelector(selectWeatherStatus)
	
	if (status !== 'received') return <Loader />
	
	return (
		<Board
			header={ <TodayMainHeader
				city={ weather.name }
				country={ weather.country }
				measurement={ measurement }
			/> }
		>
			<div className={ styles.todayMain }>
				<div className={ styles.left }>
					<div className={ styles.day }>{ weekday }</div>
					<div className={ styles.date }>{ date }</div>
					<div className={ styles.temp }><span>{ weatherInfo.temp }</span>
						{ measurement === 'celsius' ? <CelsiusIcon /> : <FahrenheitIcon /> }
					</div>
					<div className={ styles.tempMax }>Днем: { weatherInfo.maxTemp }&deg;</div>
					<div className={ styles.tempMix }>Ночью: { weatherInfo.minTemp }&deg;</div>
				</div>
				<div className={ styles.right }>
					<img className={ styles.img } src={ path } alt="current weather" />
					<div className={ styles.description }>{ description }</div>
					<div className={ styles.feels }>Ощущается как { weatherInfo.feelsLike }&deg;</div>
				</div>
			</div>
		</Board>
	)
}

export default TodayMain