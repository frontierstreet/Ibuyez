import {
	NA,
	americanStates,
	bathroomDescriptionOptions,
	extraInformationOptions,
	homeBuilderOptions,
	homeCommunityTypeOptions,
	homeDescriptionOptions,
	homeExteriorDescriptionOptions,
	homeOwnerShipOptions,
	kitchenApplicanceDescriptions,
	kitchenCounterTopOptions,
	kitchenDescriptionOptions,
	livingRoomDescriptionOptions,
	poolOptions,
	timeToSellHomeOptions,
	yesNoOptions
} from "./listing-form"
import { validators } from "modules/common/utils/functions"
import { FormPageProps, FormSteps } from "types/form"
import { getNumbers } from "../helpers"

export const fieldNames = {
	// address confirmation
	name: "name",
	phone: "phone",
	doesHomeNeedRepairing: "doesHomeNeedRepairing",
	whatNeedsRepairing: "whatNeedsRepairing",
	otherDetails: "otherDetails",
	streetAddress: "streetAddress",
	unitNumber: "unitNumber",
	city: "city",
	state: "state",
	zipCode: "zipCode",
	// home description
	homeDescription: "homeDescription",
	// home details confirmation
	bedroomCount: "bedroomCount",
	bathroomCount: "bathroomCount",
	partialBathroomCount: "partialBathroomCount",
	squareFootageAboveGround: "squareFootageAboveGround",
	squareFootageBelowGround: "squareFootageBelowGround",
	percentageOfCompletedBasement: "percentageOfCompletedBasement",
	lotSize: "lotSize",
	floorsAboveGround: "floorsAboveGround",
	floorsBelowGround: "floorsBelowGround",
	yearBuilt: "yearBuilt",
	pool: "pool",
	// home ownership
	homeownership: "homeOwnership",
	// kitchen countertops
	kitchenCounterTops: "kitchenCounterTops",
	// kitchen appliance description
	kitchenApplicanceDescriptions: "kitchenApplicanceDescriptions",
	// kitchen descriptions
	kitchenDescription: "kitchenDescription",
	// bathroom description
	bathroomDescription: "bathroomDescription",
	// living room description
	livingRoomDescription: "livingRoomDescription",
	// home exterior description
	homeExteriorDescription: "homeExteriorDescription",
	// home owners
	isHomeHomeOwnersAssociation: "isHomeHomeOwnersAssociation",
	neighborhoodAllowsRentals: "neighborhoodAllowsRentals",
	// home community group
	homeCommunityGroup: "homeCommunityGroup",
	// miscellaneous home features
	miscellaneousHomeFeatures: "miscellaneousHomeFeatures",
	// sell time
	sellTime: "sellTime",
	// homebuilder
	homeBuilder: "homeBuilder",
	// home builder name
	homeBuilderSelect: "homeBuilderSelect",
	email: "email"
}

export const formMaker: Record<FormSteps, FormPageProps> = {
	[FormSteps.addressConfirmation]: {
		header: "Is this the correct address?",
		description: "Confirm this is the property address or enter a new address.",
		step: FormSteps.addressConfirmation,
		items: [
			{
				type: "input",
				label: "Street address",
				fieldName: fieldNames.streetAddress
			},
			{
				type: "input",
				label: "Unit number",
				description: "(if applicable)",
				fieldName: fieldNames.unitNumber,
				italicizeDescription: true
			},
			{
				type: "input",
				label: "City",
				fieldName: fieldNames.city
			},
			{
				type: "select",
				label: "State",
				fieldName: fieldNames.state,
				options: americanStates
			},
			{
				type: "input",
				label: "Zip Code",
				fieldName: fieldNames.zipCode
			}
		]
	},
	// home address confirmation
	[FormSteps.homeDescription]: {
		header: "What best describes your home ?",
		description: "This question helps us select comps when preparing your offer",
		step: FormSteps.homeDescription,
		items: [
			{
				type: "list",
				options: homeDescriptionOptions,
				fieldName: fieldNames.homeDescription
			}
		]
	},
	[FormSteps.homeDetailsConfirmation]: {
		header: "Do these home details look right to you?",
		description: "Your offer will be more accurate if all these details are up to date.",
		step: FormSteps.homeDetailsConfirmation,
		items: [
			{
				type: "select",
				label: "Bedrooms",
				description: "Must have a door, closet, and window.",
				fieldName: fieldNames.bedroomCount,
				options: getNumbers(1, 12)
			},
			{
				type: "select",
				label: "Full bathrooms",
				description: "Must have a toilet and a shower/tub.",
				fieldName: fieldNames.bathroomCount,
				options: getNumbers(1, 10)
			},
			{
				type: "select",
				label: "Half Bathrooms",
				description: "Must have a toilet and sink.",
				fieldName: fieldNames.partialBathroomCount,
				options: getNumbers(0, 10)
			},
			{
				type: "numeric-input",
				inputSuffix: " ft²",
				label: "Above-ground Square Footage",
				description:
					"Don't include garages, basements, non-permitted additions, or non-heated square footage.",
				fieldName: fieldNames.squareFootageAboveGround
			},
			{
				type: "numeric-input",
				inputSuffix: " ft²",
				label: "Below-ground Square Footage",
				description: "(If any)",
				italicizeDescription: true,
				fieldName: fieldNames.squareFootageBelowGround
			},
			{
				type: "select",
				label: "What percent of the basement (if any) is finished and climate controlled?",
				fieldName: fieldNames.percentageOfCompletedBasement,
				options: [NA, "25%", "50%", "75%", "100%"]
			},
			{
				type: "select",
				label: "Lot Size",
				fieldName: fieldNames.lotSize,
				options: [
					"< 0.25 acre",
					"0.25 - 0.5 acre",
					"0.5 - 1 acre",
					"1 - 3 acres",
					"3 - 5 acres",
					"5 - 10 acres",
					">10 acres"
				]
			},
			{
				type: "select",
				label: "Floors (above ground)",
				description: "Don't include the basement.",
				fieldName: fieldNames.floorsAboveGround,
				options: ["1", "1 + finished attic space", "1.5", "2", "3"]
			},
			{
				type: "select",
				label: "Year built",
				fieldName: fieldNames.yearBuilt,
				options: getNumbers(1874, new Date().getFullYear())
			}
			// carport spaces
		]
	},
	[FormSteps.miscellaneousHomeFeatures]: {
		header: "Other amenities",
		description: "Select all that apply.",
		step: FormSteps.miscellaneousHomeFeatures,
		items: [
			{
				type: "list",
				options: extraInformationOptions,
				fieldName: fieldNames.miscellaneousHomeFeatures,
				isMultiple: true
			}
		]
	},
	[FormSteps.homeSituation]: {
		header: "Home Situation",
		description: "",
		step: FormSteps.homeSituation,
		items: [
			{
				type: "select",
				label: "Does your home need updating or repairs?",
				fieldName: fieldNames.doesHomeNeedRepairing,
				options: yesNoOptions
			},
			{
				type: "input",
				fieldName: fieldNames.whatNeedsRepairing,
				label: "What needs updating or repaired ?",
				description: "(if any)",
				italicizeDescription: true
			},
			{
				type: "input",
				fieldName: fieldNames.otherDetails,
				label: "Other details about your property or situation"
			}
		]
	},
	[FormSteps.isHomeHomeOwnersAssociation]: {
		header: "Homeowners association",
		description: "",
		step: FormSteps.isHomeHomeOwnersAssociation,
		items: [
			{
				label: "Is your home part of a homeowners association (HOA) or condo association?",
				type: "select",
				options: ["HOA", "Condo", "Other", "None"],
				fieldName: fieldNames.isHomeHomeOwnersAssociation
			},
			{
				displayFlag: {
					watch: fieldNames.isHomeHomeOwnersAssociation,
					displayOn: ["HOA", "Condo", "Other"]
				},
				label: "Does your neighborhood allow rentals?",
				type: "select",
				options: ["Yes", "No", "I don't know"],
				fieldName: fieldNames.neighborhoodAllowsRentals
			}
		]
	},
	[FormSteps.homeOwnerConfirmation]: {
		header: "Are you the owner of this home?",
		description: "We have additional questions if you're an agent.",
		step: FormSteps.homeOwnerConfirmation,
		items: [
			{
				type: "list",
				options: homeOwnerShipOptions,
				fieldName: fieldNames.homeownership
			}
		]
	},
	[FormSteps.kitchenCounterTops]: {
		header: "What are your kitchen countertops made of?",
		description: "This tells us a bit about when the kitchen was last updated.",
		items: [
			{
				type: "list",
				options: kitchenCounterTopOptions,
				fieldName: fieldNames.kitchenCounterTops
			}
		],
		step: FormSteps.kitchenCounterTops
	},
	[FormSteps.kitchenApplicanceDescriptions]: {
		step: FormSteps.kitchenApplicanceDescriptions,
		header: "How would you describe your kitchen appliances?",
		description: "This helps us understand the condition of your kitchen.",
		items: [
			{
				type: "list",
				options: kitchenApplicanceDescriptions,
				fieldName: fieldNames.kitchenApplicanceDescriptions
			}
		]
	},
	[FormSteps.kitchenDescription]: {
		header: "How would you describe your kitchen?",
		description: "For these questions, just select the closest match.",
		step: FormSteps.kitchenDescription,
		items: [
			{
				type: "image-select",
				options: kitchenDescriptionOptions,
				fieldName: fieldNames.kitchenDescription
			}
		]
	},
	[FormSteps.bathroomDescription]: {
		header: "How would you describe your main bathroom?",
		description: "",
		step: FormSteps.bathroomDescription,
		items: [
			{
				type: "image-select",
				options: bathroomDescriptionOptions,
				fieldName: fieldNames.bathroomDescription
			}
		]
	},
	[FormSteps.livingRoomDescription]: {
		header: "How would you describe your living room?",
		description: "",
		step: FormSteps.livingRoomDescription,
		items: [
			{
				type: "image-select",
				options: livingRoomDescriptionOptions,
				fieldName: fieldNames.livingRoomDescription
			}
		]
	},
	[FormSteps.homeExteriorDescription]: {
		header: "How would you describe your home exterior?",
		description: "",
		step: FormSteps.homeExteriorDescription,
		items: [
			{
				type: "image-select",
				options: homeExteriorDescriptionOptions,
				fieldName: fieldNames.homeExteriorDescription
			}
		]
	},
	[FormSteps.homeCommunityGroup]: {
		header: "Does your home belong to any of these types of communities?",
		description:
			"Select all that apply. We keep an eye out for these things when we're making an offer.",
		step: FormSteps.homeCommunityGroup,
		items: [
			{
				type: "list",
				options: homeCommunityTypeOptions,
				fieldName: fieldNames.homeCommunityGroup,
				isMultiple: true
			}
		]
	},

	[FormSteps.sellTime]: {
		header: "When do you need to sell your home?",
		description: "This won't affect your offer. We're here to help with any timeline.",
		step: FormSteps.sellTime,
		items: [
			{
				type: "list",
				options: timeToSellHomeOptions,
				fieldName: fieldNames.sellTime
			}
		]
	},
	[FormSteps.homeBuilder]: {
		header: "Are you working with a homebuilder?",
		description: "We can work with them to line up your close dates.",
		step: FormSteps.homeBuilder,
		items: [
			{
				type: "list",
				options: yesNoOptions,
				fieldName: fieldNames.homeBuilder
			}
		]
	},
	[FormSteps.homeBuilderSelect]: {
		header: "Which homebuilder are you working with?",
		description: "",
		step: FormSteps.homeBuilderSelect,
		items: [
			{
				type: "select",
				options: homeBuilderOptions,
				fieldName: fieldNames.homeBuilderSelect
			}
		]
	},
	[FormSteps.completion]: {
		header: "Submit your details",
		description:
			"We need name, phone number, and email so we can reach out with question and provide an offer.",
		step: FormSteps.completion,
		items: [
			{
				type: "input",
				fieldName: fieldNames.name,
				autoFocus: true,
				rules: { validate: validators.validateString },
				label: "Name"
			},
			{
				type: "input",
				fieldName: fieldNames.phone,
				rules: { validate: validators.validateString },
				label: "Phone"
			},
			{
				type: "input",
				fieldName: fieldNames.email,
				rules: { validate: validators.validateEmail },
				label: "Email"
			}
		]
	}
}
