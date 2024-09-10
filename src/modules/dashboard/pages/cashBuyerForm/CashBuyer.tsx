import CustomTable from "modules/common/components/general/CustomTable"
import SearchBar from "modules/common/components/general/SearchBar"
import usePaginatedQuery from "modules/common/hooks/usePaginatedQuery"
import moment from "moment"
import React from "react"
import { useGetCashBuyerSubmissionsQuery } from "store/api/dashboard-service"
import { CashBuyerSubmissionType } from "types/admin"
import { ColumnsType } from "types/shared"

const columns: ColumnsType<CashBuyerSubmissionType> = [
	{
		width: "250px",
		fixed: "left",
		title: "Contact",
		key: "contact",
		render(value, record, index) {
			return (
				<div className="flex flex-col space-y-2">
					<span>
						{record.firstName} {record.lastName}
					</span>
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
		title: "What You Like to Buy",
		key: "whatDoYouLikeToBuy",
		dataIndex: "whatDoYouLikeToBuy"
	},
	{
		title: "Rehab Preference",
		key: "doYouLikeLightMediumOrHeavyRehab",
		dataIndex: "doYouLikeLightMediumOrHeavyRehab"
	},
	{
		title: "Specific Dollar Amount",
		key: "specificDollarAmount",
		dataIndex: "specificDollarAmount",
		render(value, record, index) {
			return record.specificDollarAmount ? `$${record.specificDollarAmount}` : "Not specified"
		}
	},
	{
		title: "Areas of Interest",
		key: "whatAreasDoYoLikeToBuyIn",
		dataIndex: "whatAreasDoYoLikeToBuyIn"
	},
	{
		title: "Additional Information",
		key: "anythingElseToShare",
		dataIndex: "anythingElseToShare",
		render(value, record, index) {
			return record.anythingElseToShare || "None"
		}
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

const CashBuyer = () => {
	const { query, currentPage, setCurrentPage, onQueryChange } = usePaginatedQuery()
	const { data, isLoading, isFetching } = useGetCashBuyerSubmissionsQuery({
		query,
		page: currentPage
	})
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

export default CashBuyer
