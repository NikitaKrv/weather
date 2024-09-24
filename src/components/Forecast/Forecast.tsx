import { useSelector } from 'react-redux'
import { getForecast } from '../../utils/getForecast.ts'
import { selectWeather, selectWeatherStatus } from '../../redux/slices/weatherSlice.ts'
import { selectMeasurement } from '../../redux/slices/measurementSlice.ts'
import { useActions } from '../../hooks/useActions.ts'
import Board from '../Wrappers/Board/Board.tsx'
import ForecastItem from '../ForecastItem/ForecastItem.tsx'
import Loader from '../UI/Loader/Loader.tsx'
import styles from './Forecast.module.scss'

const Forecast = () => {
	const weather = useSelector(selectWeather)
	const measurement = useSelector(selectMeasurement)
	const status = useSelector(selectWeatherStatus)
	const {setEpoch} = useActions()
	const forecastItems = getForecast(weather, measurement)
	
	if (status !== 'received') return <Loader />
	
	return (
		<Board header="Прогноз на 3 дня" className={ styles.forecastBg }>
			<div className={ styles.forecast }>
				{
					forecastItems.map(forecast => <ForecastItem
						key={ forecast.epoch }
						onClick={ setEpoch }
						{ ...forecast }
					/>)
				}
			</div>
		</Board>
	)
}

export default Forecast