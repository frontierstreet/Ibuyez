import { FlattenedIbuyezSubmission, FormSteps, ScheduleSteps, IbuyezSubmission, Option } from "types/form"

export const createSelectOptions = (options: Option[]) => {
	return options.map((option) => ({ label: option.toString(), value: option.toString() }))
}

export const formRoute = (step: FormSteps, formId?: string) =>
	formId ? `/form/${formId}/${step}` : `/form/:formId/${step}`

export const scheduleRoute = (step: ScheduleSteps, id: string): string => {
	switch (step) {
	  case ScheduleSteps.addressAndReasons:
		return `/schedule/address-and-reasons/${id}`;
		case ScheduleSteps.speedAndPrice:
		 return `/schedule/speed-and-price/${id}`;
	  default:
		return "/";
	}
};

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

export const getPreviousSchedule = (steps: ScheduleSteps[], currentStep: ScheduleSteps) => {
	const currIndex = steps.indexOf(currentStep)
	if (currIndex > 0) {
		return steps[currIndex - 1]
	}
}
