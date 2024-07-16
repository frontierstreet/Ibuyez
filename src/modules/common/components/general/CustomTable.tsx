import { useMemo } from "react"
import { Table } from "antd"
import type { GetProp, TableProps } from "antd"
import React from 'react';

type ColumnsType<T> = TableProps<T>["columns"]
type TablePaginationConfig = Exclude<GetProp<TableProps, "pagination">, boolean>

interface TableParams {
	pagination?: TablePaginationConfig
	sortField?: string
	sortOrder?: string
	filters?: Parameters<GetProp<TableProps, "onChange">>[1]
}

interface CustomTableProps<T> {
	data: T[]
	loading: boolean
	currentPage: number
	onPageChange: (value: number) => void
	total: number
	rowKey: string
	columns: ColumnsType<T>
	scroll?: { x: number }
}

export default function CustomTable<T>({
	data,
	loading,
	currentPage,
	onPageChange,
	total,
	rowKey,
	columns,
	scroll
}: CustomTableProps<T>) {
	const tableParams: TableParams = useMemo(
		() => ({
			pagination: {
				current: currentPage,
				pageSize: 20,
				showSizeChanger: false,
				total
			}
		}),
		[currentPage, total]
	)

	const handleTableChange: TableProps["onChange"] = (pagination, filters, sorter) => {
		if (pagination.current !== currentPage && pagination.current) {
			onPageChange(pagination.current)
		}
	}

	return (
		<Table
			columns={columns as any}
			rowKey={(record) => record[rowKey]}
			dataSource={data as any}
			pagination={tableParams.pagination}
			loading={loading}
			onChange={handleTableChange}
			sticky={{ offsetHeader: 64 }}
			scroll={scroll}
		/>
	)
}
