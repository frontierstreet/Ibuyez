import { FlattenedIbuyezSubmission, FormSteps, IbuyezSubmission, Option } from "types/form"

export const createSelectOptions = (options: Option[]) => {
	return options.map((option) => ({ label: option, value: option }))
}

export const formRoute = (step: FormSteps, formId?: string) =>
	formId ? `/form/${formId}/${step}` : `/form/:formId/${step}`

export const getNumbers = (start: number, finish: number) => {
	const numbers: number[] = []
	for (let i = start; i <= finish; i++) {
		numbers.push(i)
	}
	return numbers
}

export const getPreviousStep = (steps: FormSteps[], currentStep: FormSteps) => {
	const currIndex = steps.indexOf(currentStep)
	if (currIndex > 0) {
		return steps[currIndex - 1]
	}
}
