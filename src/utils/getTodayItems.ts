import { HighlightItemProps } from '../components/HighlightItem/HighlightItem.tsx'
import { TodayHighlightItem } from '../types/todayHighlightItem.ts'

export const getTodayItems = (
	{sunset, sunrise, humidity, uv, vision, wind}: TodayHighlightItem
): HighlightItemProps[] => {
	return [
		{
			title: 'Ветер',
			value: wind,
			svgName: 'wind',
			measurement: 'км/ч'
		},
		{
			title: 'Влажность',
			value: humidity,
			svgName: 'humidity',
			measurement: '%'
		},
		{
			title: 'Восход',
			value: sunrise,
			svgName: 'sunrise',
			measurement: 'АМ'
		},
		{
			title: 'УФ индекс',
			value: uv,
			svgName: 'uv-index',
			measurement: 'УФ'
		},
		{
			title: 'Видимость',
			value: vision,
			svgName: 'vision',
			measurement: 'км'
		},
		{
			title: 'Закат',
			value: sunset,
			svgName: 'sunset',
			measurement: 'РМ'
		},
	]
}