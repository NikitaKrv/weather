import ContentLoader from 'react-content-loader'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../../redux/slices/themeSlice.ts'

const Loader = () => {
	const theme = useSelector(selectTheme)
	const backgroundColor = theme === 'dark' ? '#171b2d' : '#eeeded'
	const foregroundColor = theme === 'dark' ? '#0e1421' : '#f8f8f8'
	
	return <ContentLoader
		speed={ 2 }
		width={ 680 }
		height={ 378 }
		viewBox="0 0 680 378"
		backgroundColor={ backgroundColor }
		foregroundColor={ foregroundColor }
	>
		<rect x="0" y="0" rx="24" ry="24" width="680" height="378" />
	</ContentLoader>
}

export default Loader
