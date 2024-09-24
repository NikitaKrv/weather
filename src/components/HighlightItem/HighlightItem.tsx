import { useLazySvgImport } from '../../hooks/useLazySvgImport.ts'
import { TodayHighlightItem } from '../../types/todayHighlightItem.ts'
import styles from './HighlightItem.module.scss'

export interface HighlightItemProps {
	title: string,
	svgName: string
	value: TodayHighlightItem[keyof TodayHighlightItem],
	measurement: string
}

const HighlightItem = ({title, value, svgName, measurement}: HighlightItemProps) => {
	const path = useLazySvgImport(svgName)
	return (
		<div className={ styles.item }>
			<img src={ path } alt={ title + 'Icon' } className={ styles.img } />
			<div>
				<div className={ styles.title }>{ title }</div>
				<div className={ styles.value }>{ value }
					<span className={ styles.measurement }>{ measurement }</span>
				</div>
			</div>
		</div>
	)
}

export default HighlightItem