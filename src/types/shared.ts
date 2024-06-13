import { TableProps } from "antd"

export interface APISearchParams {
	query?: string
	page: number
	sorting?: string | null
}

export interface PaginatedData<T> {
	data: T[]
	metadata: {
		nextPage: null
		currentPage: number
		totalPages: number
	}
}

export type ColumnsType<T> = TableProps<T>["columns"]
