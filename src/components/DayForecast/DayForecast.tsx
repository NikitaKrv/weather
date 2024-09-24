import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { drawCanvasChart } from '../../utils/drawCanvasChart.ts'
import { getForecastTemp } from '../../utils/getForecastTemp.ts'
import { selectWeather, selectWeatherStatus } from '../../redux/slices/weatherSlice.ts'
import { selectMeasurement } from '../../redux/slices/measurementSlice.ts'
import { selectTheme } from '../../redux/slices/themeSlice.ts'
import { time } from '../../data/time.ts'
import Board from '../Wrappers/Board/Board.tsx'
import Loader from '../UI/Loader/Loader.tsx'
import styles from './DayForecast.module.scss'

const DayForecast = () => {
	const canvas = useRef<HTMLCanvasElement>(null)
	const theme = useSelector(selectTheme)
	const weather = useSelector(selectWeather)
	const measurement = useSelector(selectMeasurement)
	const status = useSelector(selectWeatherStatus)
	const forecastTemp = getForecastTemp(weather, measurement)
	const width = 632
	const height = 262
	
	useEffect(() => {
		if (!canvas.current) return
		const context = canvas.current.getContext('2d')
		if (!context) return
		
		drawCanvasChart(forecastTemp, context, width, height, theme)
	}, [forecastTemp, measurement, theme])
	
	if (status !== 'received') return <Loader />
	
	return (
		<Board header="Сегодня">
			<div className={ styles.dayForecast }>
				<canvas ref={ canvas } width={ width } height={ height } />
			</div>
			<div className={ styles.time }>
				{
					time.map(x => <span key={ x }>{ x }</span>)
				}
			</div>
		</Board>
	)
}

export default DayForecast