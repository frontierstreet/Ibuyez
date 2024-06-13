import CustomTable from "modules/common/components/general/CustomTable"
import SearchBar from "modules/common/components/general/SearchBar"
import usePaginatedQuery from "modules/common/hooks/usePaginatedQuery"
import React, { useState } from "react"
import { useGetSubmissionsQuery } from "store/api/dashboard-service"
import { IbuyezSubmissionType } from "types/admin"
import { ColumnsType } from "types/shared"
import moment from "moment"

const formatAddress = (address: IbuyezSubmissionType["address"]) => {
	const addressParts = [
		address?.unitNumber,
		address?.streetAddress,
		address?.city,
		address?.state
	]
	return addressParts.filter((item) => !!item).join(", ")
}

const Submissions = () => {
	const { query, currentPage, setCurrentPage, onQueryChange } = usePaginatedQuery()
	const { data, isLoading, isFetching } = useGetSubmissionsQuery({ query, page: currentPage })

	const columns: ColumnsType<IbuyezSubmissionType> = [
		{
			width: "250px",
			fixed: "left",
			title: "Address",
			render(value, record, index) {
				return (
					<div className="flex flex-col space-y-2">
						<span>{formatAddress(record.address)}</span>
						<span className="text-[12px]">Zip : {record.address.zipCode}</span>
					</div>
				)
			}
		},
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
						{record.phone && (
							<a href={`tel:${record.phone}`} className="text-[12px] underline">
								{record.phone}
							</a>
						)}
					</div>
				)
			}
		},
		{
			title: "Bedrooms",
			key: "bedroomCount",
			dataIndex: "bedroomCount"
		},
		{
			title: "Bathrooms",
			key: "bathroomCount",
			dataIndex: "bathroomCount"
		},
		{
			title: "Half Bathrooms",
			key: "partialBathroomCount",
			dataIndex: "partialBathroomCount"
		},
		{
			title: "Percentage of Basement Completion",
			key: "percentageOfCompletedBasement",
			dataIndex: "percentageOfCompletedBasement"
		},
		{
			title: "Year Built",
			key: "yearBuilt",
			dataIndex: "yearBuilt"
		},
		{
			title: "Home Description",
			key: "homeDescription",
			dataIndex: "homeDescription"
		},
		{
			title: "Floors above ground",
			key: "floorsAboveGround",
			dataIndex: "floorsAboveGround"
		},
		{
			title: "Lot Size",
			key: "lotSize",
			dataIndex: "lotSize"
		},
		{
			title: "Square Footage Above Ground",
			key: "squareFootageAboveGround",
			dataIndex: "squareFootageAboveGround"
		},
		{
			title: "Square Footage Below Ground",
			key: "squareFootageBelowGround",
			dataIndex: "squareFootageBelowGround"
		},
		{
			title: "Home Needs Repairs ?",
			key: "doesHomeNeedRepairing",
			dataIndex: "doesHomeNeedRepairing"
		},
		{
			title: "What needs repairing ?",
			key: "whatNeedsRepairing",
			dataIndex: "whatNeedsRepairing"
		},
		{
			title: "Home Owners Association",
			key: "isHomeHomeOwnersAssociation",
			dataIndex: "isHomeHomeOwnersAssociation"
		},
		{
			title: "Neigbourhood allows rentals ?",
			key: "neighborhoodAllowsRentals",
			dataIndex: "neighborhoodAllowsRentals"
		},
		{
			title: "Other Home Features",
			width: "250px",
			key: "miscellaneousHomeFeatures",
			dataIndex: "miscellaneousHomeFeatures",
			render(value, record, index) {
				return (
					<div className="flex flex-col space-y-2">
						{(record.miscellaneousHomeFeatures || []).map((item, index) => (
							<span key={`${record._id}${index}`}>{item}</span>
						))}
					</div>
				)
			}
		},
		{
			title: "Sell Time",
			key: "sellTime",
			dataIndex: "sellTime"
		},
		{
			title: "Other Details",
			key: "otherDetails",
			dataIndex: "otherDetails"
		},
		{
			title: "Date of Form Creation",
			key: "createdAt",
			dataIndex: "createdAt",
			render(value, record, index) {
				return (
					<div className="flex flex-col space-y-2">
						<span>{moment(record.createdAt).format("DD MMM YYYY")}</span>
						<span className="text-[12px]">
							{moment(record.createdAt).format("hh:mm A")}
						</span>
					</div>
				)
			}
		}
	]

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
				scroll={{ x: 3000 }}
			/>
		</div>
	)
}

export default Submissions
