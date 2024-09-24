import { ReactNode } from 'react'

export type Measurement = 'celsius' | 'fahrenheit'

export interface Option {
	value: Measurement,
	label: ReactNode
}