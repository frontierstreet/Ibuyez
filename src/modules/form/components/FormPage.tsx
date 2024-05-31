import React, { useEffect } from "react"
import type { FormPageProps } from "types/form"
import MaxWidthItem from "./MaxWidthItem"
import TopBanner from "./TopBanner"
import FormFooter from "./FormFooter"
import { useForm } from "react-hook-form"
import FormInputRenderer from "./FormInputRenderer"
import useCustomForm from "../hooks/useCustomForm"
import { motion } from "framer-motion"

const FormLeftHandSide = ({
	header,
	description,
	extraLeftHandSideElement
}: Pick<FormPageProps, "description" | "header" | "extraLeftHandSideElement">) => {
	return (
		<div>
			<div className="space-y-4">
				<h2 className="text-black text-[22px] leading-6 md:text-[50px] md:leading-[54px]">
					{header}
				</h2>
				{description && (
					<p className="text-black text-base leading-4 md:text-[18px] md:leading-[20px]">
						{description}
					</p>
				)}
				{extraLeftHandSideElement && extraLeftHandSideElement}
			</div>
		</div>
	)
}

const FormPage = ({
	header,
	description,
	items,
	step,
	extraLeftHandSideElement
}: FormPageProps) => {
	const { defaultValues, submit, submitting, onSave } = useCustomForm(step)
	const {
		control,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm({ defaultValues })

	const onSubmit = (data: any) => {
		submit(data)
	}

	useEffect(() => {
		reset(defaultValues)
	}, [defaultValues])

	return (
		<div className="px-5 lg:px-[64px] bg-white no-scrollbar">
			<MaxWidthItem>
				<TopBanner onSave={onSave} />
				<motion.div
					className="w-full"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
					exit={{ opacity: 0, y: 30, transition: { duration: 0.5 } }}>
					<div className="min-h-[calc(100vh_-_80px)] pb-[120px] flex flex-col space-y-5 1020:flex-row 1020:space-y-0 1020:space-x-10">
						<div className="lg:flex-1 lg:flex-shrink-0 pt-5">
							<FormLeftHandSide
								header={header}
								description={description}
								extraLeftHandSideElement={extraLeftHandSideElement}
							/>
						</div>
						<div className="lg:flex-1 lg:flex-shrink-0 pt-5">
							<FormInputRenderer control={control} items={items} errors={errors} />
						</div>
					</div>
				</motion.div>
			</MaxWidthItem>
			<FormFooter step={step} loading={submitting} onNext={handleSubmit(onSubmit)} />
		</div>
	)
}

export default FormPage
