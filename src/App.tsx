import Header from './components/Header/Header.tsx'
import TodayHighlight from './components/TodayHighlight/TodayHighlight.tsx'
import TodayMain from './components/TodayMain/TodayMain.tsx'
import Container from './components/Wrappers/Container/Container.tsx'
import Main from './components/Wrappers/Main/Main.tsx'
import Forecast from './components/Forecast/Forecast.tsx'
import DayForecast from './components/DayForecast/DayForecast.tsx'

const App = () => {
	return (
		<Container>
			<Header />
			<Main>
				<TodayMain />
				<TodayHighlight />
				<Forecast />
				<DayForecast />
			</Main>
		</Container>
	)
}

export default App
