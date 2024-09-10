import React, { useState } from "react"
import styled from "styled-components"
import formService from "services/schedule-service"
import Logo from "modules/common/assets/icons/logo1.svg"

const FormContainer = styled.div`
	max-width: 700px;
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
	flex: 1;
	margin-right: 20px;
	@media (min-width: 769px) {
		display: flex;
		flex-direction: column;
	}
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
	box-sizing: border-box;
	@media (min-width: 769px) {
		flex: 1;
		margin-right: 10px; // Add space between inputs in a row
	}
`

const FormRow = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`

const Button = styled.button`
	padding: 10px 20px;
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

const CashBuyerForm = () => {
	const [formData, setFormData] = useState({
		email: "",
		firstName: "",
		lastName: "",
		phoneNumber: "",
		whatAreasDoYoLikeToBuyIn: "",
		whatDoYouLikeToBuy: "",
		doYouLikeLightMediumOrHeavyRehab: "",
		specificDollarAmount: "",
		anythingToSell: "",
		anythingElseToShare: ""
	})

	// const [formErrors, setFormErrors] = useState({})
	const [isLoading, setIsLoading] = useState(false)
	const [responseMessage, setResponseMessage] = useState("")

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsLoading(true)

		try {
			await formService.submitCashBuyerForm(formData)
			setIsLoading(false)
			setResponseMessage("Form submitted successfully.")
			setFormData({
				email: "",
				firstName: "",
				lastName: "",
				phoneNumber: "",
				whatAreasDoYoLikeToBuyIn: "",
				whatDoYouLikeToBuy: "",
				doYouLikeLightMediumOrHeavyRehab: "",
				specificDollarAmount: "",
				anythingToSell: "",
				anythingElseToShare: ""
			})
		} catch (error) {
			setIsLoading(false)
			setResponseMessage("An error occurred while submitting the form.")
		}
	}

	return (
		<div className="bg-blue min-h-[100vh]">
			<div className="flex items-center justify-center bg-white shadow-sm py-5">
				<a href="/">
					<img src={Logo} alt="logo" />
				</a>
			</div>
			<FormContainer>
				<h1 className="font-bold text-[30px] md:text-[40px]">Join Our Cash Buyer List</h1>
				<p className="font-normal text-[16px] md:text-[20px] mb-5">
					Fill out the form below to get on our exclusive cash buyer list.
				</p>
				{isLoading ? (
					<Spinner />
				) : (
					<form onSubmit={handleSubmit}>
						<FormRow>
							<FormGroup>
								<FormLabel>Email:</FormLabel>
								<FormInput
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</FormGroup>

							<FormGroup>
								<FormLabel>First Name:</FormLabel>
								<FormInput
									type="text"
									name="firstName"
									value={formData.firstName}
									onChange={handleChange}
									required
								/>
							</FormGroup>
						</FormRow>

						<FormRow>
							<FormGroup>
								<FormLabel>Last Name:</FormLabel>
								<FormInput
									type="text"
									name="lastName"
									value={formData.lastName}
									onChange={handleChange}
									required
								/>
							</FormGroup>

							<FormGroup>
								<FormLabel>Phone Number:</FormLabel>
								<FormInput
									type="text"
									name="phoneNumber"
									value={formData.phoneNumber}
									onChange={handleChange}
									required
								/>
							</FormGroup>
						</FormRow>
						<FormGroup>
							<FormLabel>What Areas Do You Like to Buy In?</FormLabel>
							<FormInput
								type="text"
								name="whatAreasDoYoLikeToBuyIn"
								value={formData.whatAreasDoYoLikeToBuyIn}
								onChange={handleChange}
								required
							/>
						</FormGroup>

						<FormGroup>
							<FormLabel>What Do You Like to Buy?</FormLabel>
							<FormInput
								type="text"
								name="whatDoYouLikeToBuy"
								value={formData.whatDoYouLikeToBuy}
								onChange={handleChange}
								required
							/>
						</FormGroup>

						<FormGroup>
							<FormLabel>Light, Medium, or Heavy Rehab?</FormLabel>
							<FormInput
								type="text"
								name="doYouLikeLightMediumOrHeavyRehab"
								value={formData.doYouLikeLightMediumOrHeavyRehab}
								onChange={handleChange}
								required
							/>
						</FormGroup>

						<FormGroup>
							<FormLabel>Do You Buy Within a Specific Dollar Amount?</FormLabel>
							<FormInput
								type="text"
								name="specificDollarAmount"
								value={formData.specificDollarAmount}
								onChange={handleChange}
							/>
						</FormGroup>

						<FormGroup>
							<FormLabel>Do You Have Anything to Sell?</FormLabel>
							<FormInput
								type="text"
								name="anythingToSell"
								value={formData.anythingToSell}
								onChange={handleChange}
							/>
						</FormGroup>

						<FormGroup>
							<FormLabel>Anything Else to Share:</FormLabel>
							<FormInput
								type="text"
								name="anythingElseToShare"
								value={formData.anythingElseToShare}
								onChange={handleChange}
							/>
						</FormGroup>

						<Button type="submit">Submit</Button>
					</form>
				)}
			</FormContainer>
		</div>
	)
}

export default CashBuyerForm
