export const getDateInfo = (epoch: number) => {
	const date = new Date(epoch * 1000)
	
	const formatterDate = new Intl.DateTimeFormat('ru', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	})
	
	const formatterWeekday = new Intl.DateTimeFormat('ru', {
		weekday: 'long',
	})
	
	return {
		weekday: formatterWeekday.format(date),
		date: formatterDate.format(date)
	}
}