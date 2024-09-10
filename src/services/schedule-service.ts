import baseAxios from "./base"
import { ScheduleSteps, FlattenedScheduleFormSubmission } from "types/form"

class ScheduleService {
	createFormEntry(
		address: string
	): Promise<{ data: FlattenedScheduleFormSubmission; steps: ScheduleSteps[] }> {
		return baseAxios.post(`/submissions/create`, { address })
	}

	getFormEntry(
		submissionId: string
	): Promise<{ data: FlattenedScheduleFormSubmission; steps: ScheduleSteps[] }> {
		return baseAxios.get(`/submissions/${submissionId}`)
	}

	editForm(
		submissionId: string,
		payload: Partial<Record<keyof FlattenedScheduleFormSubmission, any>>,
		step: ScheduleSteps
	): Promise<{ data: FlattenedScheduleFormSubmission; steps: ScheduleSteps[] }> {
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

	async scheduleForm(value: {
		name: string
		phoneNumber: string
		streetAddress: string
		city: string
		state: string
		zipCode: string
		email: string
		consideredSellingDuration: string
		reasonsToSell: string[]
		sellingTimeframe: string
		askingPrice: string
	}) {
		const response = await baseAxios.post("/schedule-form", value)
		return response
	}

	async submitCashBuyerForm(value: {
		fullName: string
		phoneNumber: string
		email: string
		purchaseTimeframe: string
		propertyType: string
		investmentStrategy: string
		maxBudget: string
		doYouLikeLightMediumOrHeavyRehab: string
		preferredLocation: string
		financingType: string
		additionalNotes?: string
	}) {
		try {
			const response = await baseAxios.post("/cash-buyer-form", value)
			return response
		} catch (error) {
			console.error("Error submitting Cash Buyer Form:", error)
			throw error
		}
	}
}

const scheduleService = new ScheduleService()

export default scheduleService
