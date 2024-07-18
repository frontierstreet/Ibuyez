import React, { useState } from "react"
import styled from "styled-components"
import scheduleService from "services/schedule-service"
import Logo from "modules/common/assets/icons/logo1.svg"

const FormContainer = styled.div`
	max-width: 600px;
	margin: 0 auto;
	padding: 20px;
	background-color: #f9f9f9;
	border-radius: 5px;
	margin-top: 50px;

	@media (max-width: 768px) {
		max-width: 90%;
	}
`

const FormGroup = styled.div`
	margin-bottom: 15px;
`

const FormLabel = styled.label`
	display: block;
	margin-bottom: 5px;
	font-weight: bold;
`

const FormInput = styled.input`
	width: 100%;
	padding: 8px;
	font-size: 14px;
	border: 1px solid #ddd;
	border-radius: 3px;
`

const FormCheckboxLabel = styled.label`
	display: inline-block;
	margin-right: 10px;
`

const ButtonContainer = styled.div`
	margin-top: 20px;
`

const Button = styled.button`
	padding: 10px 20px;
	margin-right: 10px;
	font-size: 14px;
	cursor: pointer;
	background-color: black;
	color: #fff;
	border: none;
	border-radius: 3px;
	transition: background-color 0.3s;

	&:hover {
		background-color: #333;
	}
`

const Spinner = styled.div`
	border: 4px solid rgba(0, 0, 0, 0.1);
	border-left-color: #000;
	border-radius: 50%;
	width: 24px;
	height: 24px;
	animation: spin 1s linear infinite;

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
`

const StepForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		streetAddress: "",
		city: "",
		state: "",
		zipCode: "",
		phoneNumber: "",
		email: "",
		consideredSellingDuration: "",
		reasonsToSell: [],
		sellingTimeframe: "",
		askingPrice: ""
	})

	const [currentStep, setCurrentStep] = useState(1)
	const [responseMessage, setResponseMessage] = useState("")
	const [formErrors, setFormErrors] = useState({})
	const [isLoading, setIsLoading] = useState(false)

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target
		if (type === "checkbox") {
			const updatedReasonsToSell = checked
				? [...formData.reasonsToSell, value]
				: formData.reasonsToSell.filter((reason) => reason !== value)
			setFormData({
				...formData,
				reasonsToSell: updatedReasonsToSell
			})
		} else {
			setFormData({
				...formData,
				[name]: value
			})
		}
	}

	const validateStep = () => {
		const errors = {}
		if (currentStep === 1) {
			if (!formData.name) errors.name = "Name is required"
			if (!formData.streetAddress) errors.streetAddress = "Street Address is required"
			if (!formData.city) errors.city = "City is required"
			if (!formData.state) errors.state = "State is required"
			if (!formData.zipCode) errors.zipCode = "Zip Code is required"
		} else if (currentStep === 2) {
			if (!formData.phoneNumber) errors.phoneNumber = "Phone Number is required"
			if (!formData.email) errors.email = "Email is required"
		} else if (currentStep === 3) {
			if (!formData.consideredSellingDuration) errors.consideredSellingDuration = "Considered Selling Duration is required"
			if (formData.reasonsToSell.length === 0) errors.reasonsToSell = "At least one Reason to Sell is required"
			if (!formData.sellingTimeframe) errors.sellingTimeframe = "Selling Timeframe is required"
			if (!formData.askingPrice) errors.askingPrice = "Asking Price is required"
		}
		setFormErrors(errors)
		return Object.keys(errors).length === 0
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (validateStep()) {
			setIsLoading(true)
			try {
				await scheduleService.scheduleForm({
					name: formData.name,
					phoneNumber: formData.phoneNumber,
					streetAddress: `${formData.streetAddress}, ${formData.city}, ${formData.state}, ${formData.zipCode}`,
					email: formData.email,
					consideredSellingDuration: formData.consideredSellingDuration,
					reasonsToSell: formData.reasonsToSell,
					sellingTimeframe: formData.sellingTimeframe,
					askingPrice: formData.askingPrice
				});
				setTimeout(() => {
					setIsLoading(false)
					setResponseMessage("Schedule form submitted successfully.")
					setCurrentStep(4) // Go to Thank You step
					setFormData({
						name: "",
						streetAddress: "",
						city: "",
						state: "",
						zipCode: "",
						phoneNumber: "",
						email: "",
						consideredSellingDuration: "",
						reasonsToSell: [],
						sellingTimeframe: "",
						askingPrice: ""
					})
				}, 2000)
			} catch (error) {
				setIsLoading(false)
				setResponseMessage("An error occurred while submitting the form.")
			}
		}
	}

	const nextStep = () => {
		if (validateStep()) {
			setCurrentStep(currentStep + 1)
		}
	}

	const prevStep = () => setCurrentStep(currentStep - 1)

	const renderFormInput = (label, name, type = "text", value) => (
		<FormGroup key={name}>
			<FormLabel>{label}:</FormLabel>
			<FormInput
				type={type}
				name={name}
				value={value}
				onChange={handleChange}
				required
			/>
			{formErrors[name] && <p style={{ color: 'red' }}>{formErrors[name]}</p>}
		</FormGroup>
	)

	const renderCheckboxGroup = (label, name, options, value) => (
		<FormGroup key={name}>
			<FormLabel>{label}:</FormLabel>
			{options.map((option) => (
				<FormCheckboxLabel key={option}>
					<input
						type="checkbox"
						name={name}
						value={option}
						checked={value.includes(option)}
						onChange={handleChange}
					/>{" "}
					{option}
				</FormCheckboxLabel>
			))}
			{formErrors[name] && <p style={{ color: 'red' }}>{formErrors[name]}</p>}
		</FormGroup>
	)

	const formSteps = [
		{
			title: "Step 1: Personal Information",
			fields: [
				{ label: "Name", name: "name" },
				{ label: "Street Address", name: "streetAddress" },
				{ label: "City", name: "city" },
				{ label: "State", name: "state" },
				{ label: "Zip Code", name: "zipCode" }
			],
			buttons: [{ label: "Next", action: nextStep }]
		},
		{
			title: "Step 2: Contact Information",
			fields: [
				{ label: "Phone Number", name: "phoneNumber" },
				{ label: "Email", name: "email", type: "email" }
			],
			buttons: [
				{ label: "Previous", action: prevStep },
				{ label: "Next", action: nextStep }
			]
		},
		{
			title: "Step 3: Selling Details",
			fields: [
				{ label: "Considered Selling Duration", name: "consideredSellingDuration" },
				{
					label: "Reasons to Sell",
					name: "reasonsToSell",
					type: "checkbox",
					options: [
						"For Sale By Owner",
						"Vacant property",
						"Divorce",
						"Pre foreclosure",
						"Death in the family",
						"Relocation",
						"A tired landlord",
						"Inherited property"
					]
				},
				{ label: "Selling Timeframe", name: "sellingTimeframe" },
				{ label: "Asking Price", name: "askingPrice", type: "number" }
			],
			buttons: [
				{ label: "Previous", action: prevStep },
				{ label: "Submit", action: handleSubmit, isSubmit: true }
			]
		},
		{
			title: "Thank You",
			fields: [],
			buttons: []
		}
	]

	const renderFormStep = () => {
		const step = formSteps[currentStep - 1]
		if (currentStep === 4) {
			return (
				<div>
					<h2 className="mb-4 text-[18px]">Thank You!</h2>
					<p>Your form has been submitted successfully. We will get back to you soon.</p>
				</div>
			)
		}

		return (
			<form onSubmit={handleSubmit}>
				<h2 className="mb-4 text-[18px]">{step.title}</h2>
				{step.fields.map((field) =>
					field.type === "checkbox"
						? renderCheckboxGroup(field.label, field.name, field.options, formData[field.name])
						: renderFormInput(field.label, field.name, field.type, formData[field.name])
				)}
				<ButtonContainer>
					{step.buttons.map((button) => (
						<Button
							key={button.label}
							type={button.isSubmit ? "submit" : "button"}
							onClick={button.action}
						>
							{button.label}
						</Button>
					))}
				</ButtonContainer>
			</form>
		)
	}

	return (
		<div className="bg-blue min-h-[100vh]">
			<div className="flex items-center justify-center bg-white shadow-sm py-5">
				<a href="/"><img src={Logo} alt="logo" /></a>
			</div>
			<FormContainer>
				<h1 className="font-bold text-[30px] md:text-[40px]">Sell Your House the EZ Way</h1>
				<p className="font-normal text-[16px] md:text-[20px] mb-5">
					Fill out the form below to get a tailored offer from us
				</p>
				{isLoading ? <Spinner /> : renderFormStep()}
				{/* {responseMessage && <p>{responseMessage}</p>} */}
			</FormContainer>
		</div>
	)
}

export default StepForm
