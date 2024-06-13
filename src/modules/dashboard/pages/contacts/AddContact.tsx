import React from "react"
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Form, Input } from "antd"

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 4 }
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 20 }
	}
}

const formItemLayoutWithOutLabel = {
	wrapperCol: {
		xs: { span: 24, offset: 0 },
		sm: { span: 20, offset: 4 }
	}
}

const AddContact = () => {
	const onFinish = (values: any) => {
		console.log("Received values of form:", values)
	}
	return (
		<div className="flex flex-col space-y-5 justify-center items-center">
			<h1 className="font-bold text-[30px] text-center">Add New Contact</h1>
			<Form
				name="dynamic_form_item"
				className="min-w-[500px] max-w-[600px]"
				{...formItemLayoutWithOutLabel}
				onFinish={onFinish}
				style={{ maxWidth: 600 }}>
				<Form.List
					name="names"
					rules={[
						{
							validator: async (_, names) => {
								if (!names || names.length < 2) {
									return Promise.reject(new Error("At least 2 passengers"))
								}
							}
						}
					]}>
					{(fields, { add, remove }, { errors }) => (
						<>
							{fields.map((field, index) => (
								<Form.Item
									{...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
									label={index === 0 ? "Phone Numbers" : ""}
									required={false}
									key={field.key}>
									<Form.Item
										{...field}
										validateTrigger={["onChange", "onBlur"]}
										noStyle>
										<Input
											placeholder="Phone Number"
											style={{ width: "60%" }}
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
							<Form.Item>
								<Button
									type="dashed"
									onClick={() => add()}
									style={{ width: "60%" }}
									icon={<PlusOutlined />}>
									Add field
								</Button>
								<Form.ErrorList errors={errors} />
							</Form.Item>
						</>
					)}
				</Form.List>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default AddContact
