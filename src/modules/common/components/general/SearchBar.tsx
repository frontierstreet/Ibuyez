/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import { Input } from "antd"
import { useDebounce } from "modules/common/hooks"

const { Search } = Input

interface SearchProps {
	placeholder?: string
	onChange: (value: string) => void
	loading: boolean
}

const SearchBar = ({ placeholder, onChange, loading }: SearchProps) => {
	const [value, setValue] = useState("")
	const debouncedValue = useDebounce(value)

	useEffect(() => {
		const trimmedQuery = debouncedValue?.trim()
		if (onChange) {
			onChange(trimmedQuery)
		}
	}, [debouncedValue])

	return (
		<Search
			placeholder={placeholder || "Search..."}
			loading={loading}
			value={value}
			onChange={(event) => setValue(event.target.value)}
			enterButton
			allowClear
		/>
	)
}

export default SearchBar
