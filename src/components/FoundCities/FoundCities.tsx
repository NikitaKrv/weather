import { City } from '../../types/cities.ts'
import styles from './FoundCities.module.scss'

interface FoundCitiesProps {
	cities: City[],
	onClick: (city: string) => void
}

const FoundCities = ({cities, onClick}: FoundCitiesProps) => {
	return (
		<div className={ styles.scroll }>
			<ul className={ styles.foundCities }>
				{
					cities.map(item =>
						<li
							key={ item.id }
							onClick={ () => onClick(`${ item.name },${ item.country }`) }
						>
							{ item.name }, { item.country }
						</li>)
				}
			</ul>
		</div>
	)
}

export default FoundCities