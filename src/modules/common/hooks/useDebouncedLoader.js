import { useEffect, useState } from "react"

const delay = 500
let setTimeoutInstance

const useDebouncedLoader = (loading) => {
	const [isExpired, setIsExpired] = useState(true)

	useEffect(() => {
		if (loading) {
			setIsExpired(false)

			if (setTimeoutInstance) {
				clearTimeout(setTimeoutInstance)
			}
			setTimeoutInstance = setTimeout(() => {
				setIsExpired(true)
			}, delay)
		}
	}, [loading])

	return !!(!isExpired || loading)
}

export default useDebouncedLoader
