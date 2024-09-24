import { useEffect, useState } from 'react'

export const useLazySvgImport = (name: string) => {
	const [path, setPath] = useState('')
	
	useEffect(() => {
		const importIcon = async () => {
			try {
				const {default: _path} = await import((`../assets/weatherIcons/${ name }.svg`))
				setPath(_path)
			} catch (e) {
				console.log(e)
			}
		}
		importIcon()
	}, [name])
	
	return path
}