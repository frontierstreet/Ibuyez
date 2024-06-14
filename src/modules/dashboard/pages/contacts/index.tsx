import { Button } from "antd"
import CustomTable from "modules/common/components/general/CustomTable"
import SearchBar from "modules/common/components/general/SearchBar"
import usePaginatedQuery from "modules/common/hooks/usePaginatedQuery"
import React from "react"
import { useGetContactsQuery } from "store/api/dashboard-service"
import { PlusCircleFilled } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { ColumnsType } from "types/shared"
import { ContactType } from "types/admin"

const columns: ColumnsType<ContactType> = [
	{
		title: "First name",
		key: "firstName",
		dataIndex: "firstName"
	},
	{
		title: "Last name",
		key: "lastName",
		dataIndex: "lastName"
	},
	{
		title: "Address",
		key: "address",
		dataIndex: "address"
	},
	{
		title: "City",
		dataIndex: "city",
		key: "city"
	},
	{
		title: "State",
		dataIndex: "state",
		key: "state"
	},
	{
		title: "Zip Code",
		dataIndex: "zipCode",
		key: "zipCode"
	},
	{
		title: "Phone Numbers",
		dataIndex: "phoneNumbers",
		key: "phoneNumbers",
		render(value, record, index) {
			return (
				<div className="flex flex-col space-y-2">
					{record.phoneNumbers?.map((number) => <span key={number}>{number}</span>)}
				</div>
			)
		}
	},
	{
		title: "Emails",
		dataIndex: "emails",
		key: "emails",
		render(value, record, index) {
			return (
				<div className="flex flex-col space-y-2">
					{record.emails?.map((email) => <span key={email}>{email}</span>)}
				</div>
			)
		}
	}
]

const ContactList = () => {
	const navigate = useNavigate()
	const { query, currentPage, setCurrentPage, onQueryChange } = usePaginatedQuery()
	const { data, isLoading, isFetching } = useGetContactsQuery({ query, page: currentPage })
	return (
		<div>
			<div className="mb-5 flex flex-col space-y-3 md:space-y-0 md:flex-row md:justify-between">
				<div className="max-w-[400px] min-w-[200px]">
					<SearchBar loading={isFetching && !!query} onChange={onQueryChange} />
					<div />
				</div>
				<Button
					onClick={() => navigate("/dashboard/pages/contacts/add")}
					type="primary"
					icon={<PlusCircleFilled />}>
					Add New Contact
				</Button>
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

export default ContactList
