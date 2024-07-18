import CustomTable from "modules/common/components/general/CustomTable"
import SearchBar from "modules/common/components/general/SearchBar"
import usePaginatedQuery from "modules/common/hooks/usePaginatedQuery"
import moment from "moment"
import React from "react"
import { useGetScheduleSubmissionsQuery } from "store/api/dashboard-service"
import { ScheduleSubmissionType} from "types/admin"
import { ColumnsType } from "types/shared"

const columns: ColumnsType<ScheduleSubmissionType> = [
	{
		width: "250px",
		fixed: "left",
		title: "Contact",
		key: "contact",
		render(value, record, index) {
			return (
				<div className="flex flex-col space-y-2">
					<span>{record.name}</span>
					{record.email && (
						<a className="underline" href={`mailto:${record.email}`}>
							{record.email}
						</a>
					)}
					{record.phoneNumber && (
						<a href={`tel:${record.phoneNumber}`} className="text-[12px] underline">
							{record.phoneNumber}
						</a>
					)}
				</div>
			)
		}
	},

	{
		title: "Street Address",
		key:"streetAddress",
		dataIndex:"streetAddress",
	},
	

	{
		title: "City",
		key:"city",
		dataIndex:"city"
	},
	{
		title: "State",
		key:"state",
		dataIndex:"state"
	},
	{
		title: "Zip",
		key:"zipCode",
		dataIndex:"zipCode"
	},
	
	{
		title: "Considered Selling Duration",
		key: "consideredSellingDuration",
		dataIndex: "consideredSellingDuration"
	},
	{
		title: "ReasonsToSell",
		key: "reasonsToSell",
		dataIndex: "reasonsToSell"
	},
	{
		title: "SellingTimeframe",
		key: "sellingTimeframe",
		dataIndex: "sellingTimeframe"
	},
	{
		title: "AskingPrice",
		key: "askingPrice",
		dataIndex: "askingPrice"
	},
	{
		title: "Submitted On",
		key: "createdAt",
		dataIndex: "createdAt",
		render(value, record, index) {
			return (
				<span className="text-[12px]">
					{moment(record.createdAt).format("DD MMM YYYY | hh:mm A")}
				</span>
			)
		}
	}
]

const Schedule = () => {
	const { query, currentPage, setCurrentPage, onQueryChange } = usePaginatedQuery()
	const { data, isLoading, isFetching } = useGetScheduleSubmissionsQuery({ query, page: currentPage })
	return (
		<div>
			<div className="mb-5 flex justify-between">
				<div className="max-w-[400px] min-w-[200px]">
					<SearchBar loading={isFetching && !!query} onChange={onQueryChange} />
					<div />
				</div>
			</div>
			<CustomTable
				rowKey="_id"
				columns={columns}
				data={data?.data || []}
				total={data?.metadata?.totalPages || 0}
				loading={isLoading || isFetching}
				onPageChange={setCurrentPage}
				currentPage={currentPage}
			/>
		</div>
	)
}

export default Schedule
