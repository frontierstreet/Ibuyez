import React, { useEffect } from "react"
import type { FormProps } from "antd"
import { Button, Form, Input } from "antd"
import { useLoginMutation } from "store/api/dashboard-service"
import { useAppDispatch, useAppSelector } from "modules/common/hooks/redux"
import { authenticate } from "store/slices/auth"
import { useNavigate } from "react-router-dom"

type FieldType = {
	email: string
	password: string
}

const DashboardLogin = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { user } = useAppSelector((state) => state.auth)
	const [logUserIn, { isLoading }] = useLoginMutation()
	const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
		try {
			const response = await logUserIn({
				email: values.email,
				password: values.password
			}).unwrap()
			const { token, ...user } = response
			dispatch(authenticate({ user, token }))
		} catch (e) {
			console.log(e)
		}
	}

	const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
		console.log("Failed:", errorInfo)
	}

	useEffect(() => {
		if (user) {
			navigate("/dashboard/pages/submissions")
		}
	}, [user])

	if (user) {
		return <div />
	}

	return (
		<div className="min-h-screen px-4 bg-white flex items-center justify-center">
			<Form
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				className="max-w-[600px] md:min-w-[400px]"
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off">
				<Form.Item<FieldType>
					label="Email"
					name="email"
					rules={[{ required: true, message: "Please input your email!" }]}>
					<Input type="email" />
				</Form.Item>

				<Form.Item<FieldType>
					label="Password"
					name="password"
					rules={[{ required: true, message: "Please input your password!" }]}>
					<Input.Password />
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit" loading={isLoading}>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default DashboardLogin
