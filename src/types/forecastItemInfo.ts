import { Measurement } from './measurement.ts'

export interface ForecastItemInfo {
	weekday: string,
	tempMax: number,
	tempMin: number,
	iconCode: number,
	epoch: number,
	measurement: Measurement
}