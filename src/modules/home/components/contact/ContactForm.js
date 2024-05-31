import React, { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { useDebouncedLoader, useWindowSize } from "../../../common/hooks"
import { Button, Select, Input } from "../../../common/components"
import { reason } from "../../../common/utils/Constant"
import clsx from "clsx"
import formService from "services/form-service"
import { validators } from "modules/common/utils/functions"

const defaultValues = {
	firstName: "",
	lastName: "",
	email: "",
	reason: "",
	message: ""
}

const ContactForm = () => {
	const [loading, setLoading] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)
	const isLoading = useDebouncedLoader(loading)
	const {
		control,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		defaultValues
	})

	const onSubmit = async (data) => {
		setIsSuccess(false)
		setLoading(true)
		try {
			await formService.contactForm({
				email: data.email,
				firstName: data.firstName,
				lastName: data.lastName,
				supportRequest: data.supportRequest.value,
				message: data.message
			})
			setLoading(false)
			setIsSuccess(true)
		} catch (e) {
			setLoading(true)
		}
	}

	useEffect(() => {
		if (isSuccess) {
			reset()
		}
	}, [isSuccess])
	return (
		<div id="contact-form">
			<div className="md:mt-[250px]">
				<div className="flex flex-col items-center justify-center">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="mt-[29px] shadow-sm mx-auto z-[1] bg-[#f9f9f9] rounded-[11.89px] lg:rounded-[20.22px] lg:w-[900px]  px-[16px] lg:px-[30px] pt-[36.25px] lg:pt-[60px] pb-[17.03px] lg:pb-[100.46px] mb-[30px]">
						<h3 className="font-black max-w-[508px] text-[30px] text-_25253C leading-[41.3px] text-center lg:text-[40px] lg:font-bold lg:leading-[61.6px] lg:text-left">
							Reach out to us
						</h3>
						<p className="font-normal text-center md:text-start text-[15px] md:text-[16px] text-[#6F6C90]">
							Fill out the form below and we would get back to you as soon as possible
						</p>
						<div className="flex flex-col space-y-[13.08px] lg:space-y-[30px] mt-10">
							<div className="flex  flex-col md:flex-row justify-between space-y-3 md:space-y-0 md:space-x-3 items-start">
								<Controller
									control={control}
									name="firstName"
									rules={{ validate: validators.validateString }}
									render={({ field: { onChange, value, ref } }) => (
										<Input
											placeholder={"Your First Name"}
											onChange={onChange}
											hasError={!!errors.firstName}
											value={value}
											ref_={ref}
											className={
												"border-black px-4 placeholder:text-[#6F6C90]"
											}
										/>
									)}
								/>

								<Controller
									control={control}
									name="lastName"
									rules={{ validate: validators.validateString }}
									render={({ field: { onChange, value, ref } }) => (
										<Input
											placeholder={"Last name"}
											onChange={onChange}
											hasError={!!errors.lastName}
											value={value}
											ref_={ref}
											className={
												" border-black px-4  placeholder:text-[#6F6C90]"
											}
										/>
									)}
								/>
							</div>
							<div className="flex  flex-col md:flex-row justify-between space-y-3 md:space-y-0 md:space-x-3 items-start">
								<Controller
									control={control}
									name="email"
									rules={{ validate: validators.validateEmail }}
									render={({ field: { onChange, value, ref } }) => (
										<Input
											placeholder={"Email"}
											type="email"
											onChange={onChange}
											hasError={!!errors.email}
											value={value}
											ref_={ref}
											className={
												" border-black px-4  placeholder:text-[#6F6C90]"
											}
										/>
									)}
								/>
							</div>
							<div className=" flex flex-col flex-1 space-y-[11px]">
								{/* <span className=" !text-base">
                                Reason / Purpose
                            </span> */}
								<Controller
									control={control}
									name="supportRequest"
									rules={{ required: true, validate: (v) => !!v.value }}
									render={({ field: { ref, ...rest } }) => (
										<Select
											placeholder="General enquiry"
											className={" !px-4  placeholder:text-[#121212]"}
											options={reason}
											hasError={!!errors?.supportRequest}
											ref_={ref}
											{...rest}
										/>
									)}
								/>
							</div>

							<div className="flex flex-col flex-1 space-y-[11px]">
								<Controller
									control={control}
									name="message"
									rules={{ validate: validators.validateString }}
									render={({ field: { onChange, value, ref } }) => (
										<Input
											placeholder={"Your Message"}
											type="textarea"
											onChange={onChange}
											hasError={!!errors.message}
											value={value}
											ref_={ref}
											className={
												" border-black px-4 min-h-[140px]  placeholder:text-[#6F6C90]"
											}
										/>
									)}
								/>
							</div>
							<Button type="submit" text="Submit" loading={isLoading} />
						</div>
					</form>
				</div>
			</div>
			{/* <StepButtons currentPage={currentPage} onPrev={onPrev} onProceed={handleSubmit(onSubmit)} /> */}
		</div>
	)
}

export default ContactForm
