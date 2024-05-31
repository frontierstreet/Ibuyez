import baseAxios from "./base"
import { FormSteps, IbuyezSubmission } from "types/form"

class FormService {
	createFormEntry(address: string): Promise<{ data: IbuyezSubmission; steps: FormSteps[] }> {
		return baseAxios.post(`/submissions/create`, { address })
	}
	getFormEntry(submissionId: string): Promise<{ data: IbuyezSubmission; steps: FormSteps[] }> {
		return baseAxios.get(`/submissions/${submissionId}`)
	}
	editForm(
		submissionId: string,
		payload: any,
		step: FormSteps
	): Promise<{ data: IbuyezSubmission; steps: FormSteps[] }> {
		return baseAxios.patch(`/submissions/${submissionId}/${step}`, payload)
	}
	saveForm(submissionId: string, email: string) {
		return baseAxios.post(`/submissions/${submissionId}/save`, { email })
	}

	contactForm(value: {
		email: string
		firstName: string
		lastName: string
		supportRequest: string
		message: string
	}) {
		return baseAxios.post("/contact", value)
	}
}

const formService = new FormService()

export default formService
