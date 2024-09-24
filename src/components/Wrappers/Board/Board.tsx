import { ReactNode } from 'react'
import styles from './Board.module.scss'

interface BoardProps {
	header: string | ReactNode,
	children: ReactNode,
	className?: string
}

const Board = ({children, header, className}: BoardProps) => {
	return (
		<div className={ `${ styles.board }  ${ className }` }>
			<div className={ styles.title }>{ header }</div>
			{ children }
		</div>
	)
}

export default Board