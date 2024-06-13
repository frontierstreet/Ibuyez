import React, { useEffect, useState } from "react"
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	HomeOutlined,
	PoweroffOutlined,
	UserSwitchOutlined,
	ExclamationCircleOutlined
} from "@ant-design/icons"
import { Button, Layout, Menu, theme, Modal } from "antd"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { logout } from "store/slices/auth"
import { useAppDispatch, useAppSelector } from "modules/common/hooks/redux"

const { Header, Sider, Content } = Layout

const routes = {
	submissions: "/dashboard/pages/submissions",
	contactForms: "/dashboard/pages/contact-forms",
	contacts: "/dashboard/pages/contacts",
	addContact: "/dashboard/pages/contacts/add"
}

const LogoutModal = () => {
	const [open, setOpen] = useState(false)

	const hideModal = () => {
		setOpen(false)
	}

	return (
		<Modal
			title="Modal"
			open={open}
			onOk={hideModal}
			onCancel={hideModal}
			okText="Logout"
			cancelText="Cancel"></Modal>
	)
}

const DashboardLayout: React.FC = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { token } = useAppSelector((state) => state.auth)
	const { pathname } = useLocation()
	const [modal, contextHolder] = Modal.useModal()
	const [collapsed, setCollapsed] = useState(false)
	const {
		token: { colorBgContainer, borderRadiusLG }
	} = theme.useToken()

	useEffect(() => {
		if (!token) {
			navigate("/dashboard/login")
		}
	}, [token, navigate])

	if (!token) {
		return <div />
	}

	const onLogoutTrial = () => {
		modal.confirm({
			title: "Confirm",
			icon: <ExclamationCircleOutlined />,
			content: "Are you sure you want to logout ?",
			okText: "Logout",
			cancelText: "Cancel",
			onOk: () => dispatch(logout())
		})
	}

	return (
		<div className="min-h-screen">
			<LogoutModal />
			{contextHolder}
			<Layout hasSider>
				<Sider
					trigger={null}
					collapsible
					collapsed={collapsed}
					style={{
						overflow: "auto",
						height: "100vh",
						position: "fixed",
						left: 0,
						top: 0,
						bottom: 0
					}}>
					<div className="demo-logo-vertical" />
					<Menu
						theme="dark"
						mode="inline"
						selectedKeys={[pathname]}
						items={[
							{
								key: routes.submissions,
								icon: <HomeOutlined />,
								label: "Submissions",
								onClick: () => navigate(routes.submissions)
							},
							{
								key: routes.contactForms,
								icon: <UserSwitchOutlined />,
								label: "Contact Forms",
								onClick: () => navigate(routes.contactForms)
							},
							{
								key: routes.contacts,
								icon: <UploadOutlined />,
								label: "Contacts",
								onClick: () => navigate(routes.contacts)
							},
							{
								key: "6",
								icon: <PoweroffOutlined />,
								label: "Log out",
								onClick: onLogoutTrial
							}
						]}
					/>
				</Sider>
				<Layout
					style={{
						marginLeft: collapsed ? 80 : 200,
						transition: "all 0.2s, background 0s"
					}}
					className="min-h-screen">
					<Header
						style={{
							padding: 0,
							background: colorBgContainer,
							position: "sticky",
							top: 0,
							zIndex: 100,
							width: "100%",
							display: "flex",
							alignItems: "center",
							borderBottomColor: "#eee",
							borderBottomWidth: 1
						}}>
						<Button
							type="text"
							icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
							onClick={() => setCollapsed(!collapsed)}
							style={{
								fontSize: "16px",
								width: 64,
								height: 64
							}}
						/>
					</Header>
					<Content
						style={{
							margin: "24px 16px",
							padding: 24,
							minHeight: 280,
							background: colorBgContainer,
							borderRadius: borderRadiusLG
						}}>
						<Outlet />
					</Content>
				</Layout>
			</Layout>
		</div>
	)
}

export default DashboardLayout
