import CustomTable from "modules/common/components/general/CustomTable"
import SearchBar from "modules/common/components/general/SearchBar"
import usePaginatedQuery from "modules/common/hooks/usePaginatedQuery"
import moment from "moment"
import React from "react"
import { useGetContactFormsQuery } from "store/api/dashboard-service"
import { ContactFormType } from "types/admin"
import { ColumnsType } from "types/shared"

const columns: ColumnsType<ContactFormType> = [
	{
		title: "Email",
		key: "email",
		dataIndex: "email",
		width: "240px"
	},
	{
		title: "First Name",
		key: "firstName",
		dataIndex: "firstName"
	},
	{
		title: "Last Name",
		key: "lastName",
		dataIndex: "lastName"
	},
	{
		title: "Reason",
		key: "supportRequest",
		dataIndex: "supportRequest"
	},
	{
		title: "Message",
		key: "message",
		dataIndex: "message"
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

const ContactForms = () => {
	const { query, currentPage, setCurrentPage, onQueryChange } = usePaginatedQuery()
	const { data, isLoading, isFetching } = useGetContactFormsQuery({ query, page: currentPage })
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

export default ContactForms
