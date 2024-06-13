import { Button } from "antd"
import CustomTable from "modules/common/components/general/CustomTable"
import SearchBar from "modules/common/components/general/SearchBar"
import usePaginatedQuery from "modules/common/hooks/usePaginatedQuery"
import React from "react"
import { useGetContactsQuery } from "store/api/dashboard-service"
import { PlusCircleFilled } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"

const columns: any[] = []

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
