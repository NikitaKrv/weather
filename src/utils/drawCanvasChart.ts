import { Theme } from '../types/theme.ts'

export const drawCanvasChart = (
	forecast: number[], ctx: CanvasRenderingContext2D,
	width: number, height: number, theme: Theme
) => {
	if (forecast.length === 0) return
	const dayPx = width / (forecast.length - 1)
	let current = forecast[0]
	let next = forecast[0]
	let diffTest = 0
	
	ctx.clearRect(0, 0, width, height)
	ctx.font = '14px Inter'
	ctx.textAlign = 'left'
	ctx.lineWidth = 4
	ctx.strokeStyle = '#FFCC00'
	
	if (theme === 'dark') {
		ctx.fillStyle = '#fff'
	} else {
		ctx.fillStyle = '#000'
	}
	
	ctx.beginPath()
	ctx.moveTo(0, height)
	ctx.fillText(current.toString(), 0, height - 100 - 7)
	ctx.lineTo(0, height - 100)
	
	for (let i = 1; i < forecast.length; i++) {
		[current, next] = [forecast[i - 1], forecast[i]]
		ctx.textAlign = 'center'
		diffTest += (next - current) * 5
		if (i % 2 === 0) {
			ctx.fillText(next.toString(), i * dayPx, height - 100 - diffTest - 8)
		}
		
		ctx.lineTo(i * dayPx, height - 100 - diffTest)
	}
	ctx.fillStyle = '#FFF5CC'
	ctx.lineTo(width, height)
	ctx.closePath()
	ctx.stroke()
	ctx.fill()
}