import { WeatherIcon } from '../types/weatherIcon.ts'
import { weatherIcons } from '../data/weatherIcons.ts'

export const getConditionInfo = (
	iconCode: WeatherIcon['code'],
): { iconName: string, description: string } => {
	const currentIcon = weatherIcons.find(icon => icon.code === iconCode)
	if (!currentIcon) return {iconName: 'clear-day', description: ''}
	return {
		iconName: currentIcon.icon,
		description: currentIcon.day_text
	}
}