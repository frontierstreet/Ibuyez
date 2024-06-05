import React, { useContext } from "react"
import MaxWidthItem from "./MaxWidthItem"
import { Button } from "modules/common/components"
import chevronLeft from "../icons/chevron-left.png"
import { FormSteps } from "types/form"
import { formRoute, getPreviousStep } from "../helpers"
import { FormContext } from "./FormContext"
import { useLocation, useNavigate, useParams } from "react-router-dom"

const FormFooter = ({
	onNext,
	step,
	loading,
	hideNextBtn
}: {
	onNext: () => void
	step: FormSteps
	loading: boolean
	hideNextBtn?: boolean
}) => {
	const { steps, data } = useContext(FormContext)
	const navigate = useNavigate()
	const currentStep = step
	const isFirstStep = !steps.length ? true : currentStep === steps[0]
	const previousStep = isFirstStep
		? null
		: steps && data
			? getPreviousStep(steps, currentStep)
			: null

	const getProgress = () => {
		const stepIndex = steps.indexOf(step) + 1
		let progress = 0
		if (stepIndex > -1) {
			progress = Math.ceil((stepIndex / steps.length) * 100)
			progress = Math.min(progress, 100)
		}
		return progress
	}

	return (
		<MaxWidthItem
			wrapperClassName="w-full lg:px-[64px] px-5 bg-white border-t border-t-border fixed bottom-0 left-0 w-full h-[100px]"
			className="flex items-center justify-between h-full"
			wrapperElement={
				<div
					className="absolute top-0 left-0 h-[5px] bg-[black] transition-all duration-500"
					style={{ width: `${getProgress()}%` }}></div>
			}>
			{previousStep && data ? (
				<button
					type="button"
					onClick={() => {
						navigate(formRoute(previousStep, data?._id))
					}}>
					<img src={chevronLeft} alt="Back" className="h-8 w-8" />
				</button>
			) : (
				<div />
			)}
			{hideNextBtn ? (
				<div />
			) : (
				<Button
					loading={loading}
					classNames="!px-10 !py-5 !bg-black"
					textClassNames="!text-white"
					text={"Next"}
					onClick={onNext}
				/>
			)}
		</MaxWidthItem>
	)
}

export default FormFooter
