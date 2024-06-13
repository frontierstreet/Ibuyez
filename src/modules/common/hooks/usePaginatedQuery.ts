import { useState } from "react"

const usePaginatedQuery = () => {
	const [query, setQuery] = useState("")
	const [currentPage, setCurrentPage] = useState(1)

	const onQueryChange = (newQuery: string) => {
		if (newQuery !== query) {
			setCurrentPage(1)
		}
		setQuery(newQuery)
	}

	return {
		currentPage,
		query,
		setCurrentPage,
		onQueryChange
	}
}

export default usePaginatedQuery
