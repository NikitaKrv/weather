import { useSelector } from 'react-redux'
import { getTodayItems } from '../../utils/getTodayItems.ts'
import { selectWeather, selectWeatherStatus } from '../../redux/slices/weatherSlice.ts'
import { getHighlight } from '../../utils/getHighlight.ts'
import Board from '../Wrappers/Board/Board.tsx'
import HighlightItem from '../HighlightItem/HighlightItem.tsx'
import Loader from '../UI/Loader/Loader.tsx'
import styles from './TodayHighlight.module.scss'

const TodayHighlight = () => {
	const weather = useSelector(selectWeather)
	const status = useSelector(selectWeatherStatus)
	const highlights = getHighlight(weather)
	const highlightItems = getTodayItems(highlights)
	
	if (status !== 'received') return <Loader />
	
	return (
		<Board header="сегодняшние события" className={ styles.todayHighlightBg }>
			<div className={ styles.todayHighlight }>
				{
					highlightItems.map(item => <HighlightItem key={ item.title } { ...item } />)
				}
			</div>
		</Board>
	)
}

export default TodayHighlight