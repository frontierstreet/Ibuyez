import React, { useEffect, useRef } from "react"
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Form, FormProps, Input } from "antd"
import { useAddContactMutation } from "store/api/dashboard-service"

export interface FieldType {
	firstName?: string
	lastName?: string
	companyName?: string
	address?: string
	city?: string
	state?: string
	zipCode?: string
	phoneNumbers?: string[]
	emails?: string[]
}

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
	console.log("Failed:", errorInfo)
}

const AddContact = () => {
	const formRef = useRef<any>()
	const [createContact, { isLoading, isSuccess }] = useAddContactMutation()
	const onFinish = async (values: FieldType) => {
		let payload: any = {}
		Object.keys(values).map((key) => {
			const value = values[key as keyof FieldType]
			if (typeof value === "string" && value?.trim()?.length > 0) {
				payload[key] = value
			}
			if (Array.isArray(value)) {
				payload[key] = value.filter((item) => !!item?.trim())
			}
			return null
		})
		try {
			await createContact(payload)
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		if (isSuccess) {
			formRef.current && formRef.current.resetFields()
		}
	}, [isSuccess])

	return (
		<div className="flex flex-col space-y-5 justify-center items-center">
			<h1 className="font-bold text-[30px] text-center">Add New Contact</h1>
			<Form
				ref={formRef}
				name="dynamic_form_item"
				className="min-w-[400px] max-w-[600px]"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				style={{ maxWidth: 600 }}>
				{/* first name */}
				<Form.Item<FieldType> label="First Name" name="firstName">
					<Input />
				</Form.Item>
				{/* last name */}
				<Form.Item<FieldType> label="Last Name" name="lastName">
					<Input />
				</Form.Item>
				{/* company name */}
				<Form.Item<FieldType> label="Company Name" name="companyName">
					<Input />
				</Form.Item>
				{/* address */}
				<Form.Item<FieldType> label="Address" name="address">
					<Input.TextArea />
				</Form.Item>
				{/* city */}
				<Form.Item<FieldType> label="City" name="city">
					<Input />
				</Form.Item>
				{/* state */}
				<Form.Item<FieldType> label="State" name="state">
					<Input />
				</Form.Item>
				{/* zipCode */}
				<Form.Item<FieldType> label="Zip Code" name="zipCode">
					<Input />
				</Form.Item>
				{/* emails */}
				<Form.List name="emails" initialValue={[""]}>
					{(fields, { add, remove }, { errors }) => (
						<>
							{fields.map((field, index) => (
								<Form.Item
									label={`Email (${index + 1})`}
									required={false}
									key={field.key}>
									<Form.Item
										{...field}
										validateTrigger={["onChange", "onBlur"]}
										noStyle>
										<Input
											type="email"
											placeholder="Email"
											style={{
												width:
													fields.length === 1
														? "100%"
														: "calc(100% - 18px)"
											}}
										/>
									</Form.Item>
									{fields.length > 1 ? (
										<MinusCircleOutlined
											className="dynamic-delete-button ml-1"
											onClick={() => remove(field.name)}
										/>
									) : null}
								</Form.Item>
							))}
							<div className="flex justify-end">
								<Form.Item>
									<Button
										type="dashed"
										onClick={() => add()}
										icon={<PlusOutlined />}>
										Add another
									</Button>
									<Form.ErrorList errors={errors} />
								</Form.Item>
							</div>
						</>
					)}
				</Form.List>
				{/* phoneNumbers */}
				<Form.List name="phoneNumbers" initialValue={[""]}>
					{(fields, { add, remove }, { errors }) => (
						<>
							{fields.map((field, index) => (
								<Form.Item
									label={`Phone Number (${index + 1})`}
									required={false}
									key={field.key}>
									<Form.Item
										{...field}
										validateTrigger={["onChange", "onBlur"]}
										noStyle>
										<Input
											placeholder="Phone Number"
											style={{
												width:
													fields.length === 1
														? "100%"
														: "calc(100% - 18px)"
											}}
										/>
									</Form.Item>
									{fields.length > 1 ? (
										<MinusCircleOutlined
											className="dynamic-delete-button ml-1"
											onClick={() => remove(field.name)}
										/>
									) : null}
								</Form.Item>
							))}
							<div className="flex justify-end">
								<Form.Item>
									<Button
										type="dashed"
										onClick={() => add()}
										icon={<PlusOutlined />}>
										Add another
									</Button>
									<Form.ErrorList errors={errors} />
								</Form.Item>
							</div>
						</>
					)}
				</Form.List>
				<Form.Item>
					<Button type="primary" htmlType="submit" loading={isLoading}>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default AddContact
