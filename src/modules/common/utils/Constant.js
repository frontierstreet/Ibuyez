import { Contact } from "../../home/pages"

export const propertyTypes = [
	{ label: "Residential House", value: "Residential House" },
	{ label: "Apartment", value: "Apartment" },
	{ label: "Condo", value: "Condo" },
	{ label: "Townhouse", value: "Townhouse" },
	{ label: "Vacation Home", value: "Vacation Home" }
]
export const reason = [
	{ label: "General enquiry", value: "General enquiry" },
	{ label: "Support request", value: "Support request" },
	{ label: "Partnership Opportunity", value: "Partnership Opportunity" }
]

const CONSTANTS = {
	routes: {
		home: "/",
		howWeBuy: "/how-we-buy",
		about: "/about",
		contact: "/contact",
		scheduleForm: "/schedule-form",
		cashBuyerForm: "/buyer-form"
	}
}

export default CONSTANTS
