import {
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
	lotSquareFootage: "lotSquareFootage",
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
		description: "Confirm this is your home or enter a new address.",
		step: FormSteps.addressConfirmation,
		items: [
			{
				type: "input",
				label: "Street address",
				fieldName: fieldNames.streetAddress,
				rules: { validate: validators.validateString }
			},
			{
				type: "input",
				label: "Unit number",
				fieldName: fieldNames.unitNumber
			},
			{
				type: "input",
				label: "City",
				rules: { validate: validators.validateString },
				fieldName: fieldNames.city
			},
			{
				type: "select",
				label: "State",
				rules: { validate: validators.validateRequiredOption },
				fieldName: fieldNames.state,
				options: americanStates
			},
			{
				type: "input",
				label: "Zip Code",
				rules: { validate: validators.validateString },
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
				rules: { validate: validators.validateString },
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
				options: getNumbers(1, 12),
				rules: { validate: validators.validateRequiredOption }
			},
			{
				type: "select",
				label: "Full bathrooms",
				description: "Must have a toilet and a shower/tub.",
				fieldName: fieldNames.bathroomCount,
				options: getNumbers(1, 10),
				rules: { validate: validators.validateRequiredOption }
			},
			{
				type: "select",
				label: "Partial bathrooms",
				description: "Must have a toilet and sink.",
				fieldName: fieldNames.partialBathroomCount,
				options: getNumbers(1, 10),
				rules: { validate: validators.validateRequiredOption }
			},
			{
				type: "numeric-input",
				inputSuffix: " ft²",
				label: "Square footage (above ground)",
				description:
					"Don't include basements, non-permitted additions, or non-heated square footage.",
				fieldName: fieldNames.squareFootageAboveGround,
				rules: { validate: validators.validateRequiredNumber }
			},
			{
				type: "numeric-input",
				inputSuffix: " ft²",
				label: "Lot square footage",
				description: "This is the length x width of your lot (in feet).",
				fieldName: fieldNames.lotSquareFootage,
				rules: { validate: validators.validateRequiredNumber }
			},
			{
				type: "select",
				label: "Floors (above ground)",
				description: "Don't include the basement.",
				fieldName: fieldNames.floorsAboveGround,
				options: getNumbers(1, 3),
				rules: { validate: validators.validateRequiredOption }
			},
			{
				type: "select",
				label: "Basement",
				description: "Floors that are completely below ground.",
				fieldName: fieldNames.floorsBelowGround,
				options: yesNoOptions,
				rules: { validate: validators.validateRequiredOption }
			},
			{
				type: "select",
				label: "Year built",
				fieldName: fieldNames.yearBuilt,
				options: getNumbers(1874, new Date().getFullYear()),
				rules: { validate: validators.validateRequiredOption }
			},
			{
				type: "select",
				label: "Pool",
				fieldName: fieldNames.pool,
				options: poolOptions,
				rules: { validate: validators.validateRequiredOption }
			}
			// carport spaces
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
				rules: { validate: validators.validateString },
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
				rules: { validate: validators.validateString },
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
				rules: { validate: validators.validateString },
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
				rules: { validate: validators.validateString },
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
				rules: { validate: validators.validateString },
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
				rules: { validate: validators.validateString },
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
				rules: { validate: validators.validateString },
				fieldName: fieldNames.homeExteriorDescription
			}
		]
	},
	[FormSteps.isHomeHomeOwnersAssociation]: {
		header: "Is your home part of a homeowners association?",
		description:
			"This is often called an HOA. It's a group that helps maintain your community for a fee.",
		step: FormSteps.isHomeHomeOwnersAssociation,
		items: [
			{
				type: "list",
				options: yesNoOptions,
				rules: { validate: validators.validateString },
				fieldName: fieldNames.isHomeHomeOwnersAssociation
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
				rules: { validate: validators.validateString },
				fieldName: fieldNames.homeCommunityGroup,
				isMultiple: true
			}
		]
	},
	[FormSteps.miscellaneousHomeFeatures]: {
		header: "Do any of these apply to your home?",
		description:
			"Select all that apply. We keep an eye out for these things when we're making an offer.",
		step: FormSteps.miscellaneousHomeFeatures,
		items: [
			{
				type: "list",
				options: extraInformationOptions,
				fieldName: fieldNames.miscellaneousHomeFeatures,
				isMultiple: true,
				rules: { validate: (v) => v.length > 0 }
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
				fieldName: fieldNames.sellTime,
				rules: { validate: validators.validateString }
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
				fieldName: fieldNames.homeBuilder,
				rules: { validate: validators.validateString }
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
				rules: { validate: validators.validateString },
				fieldName: fieldNames.homeBuilderSelect
			}
		]
	},
	[FormSteps.completion]: {
		header: "Submit your email-address",
		description:
			"Provide a means for us to reach out to you with an offer. You will not able to edit your entry after this step. Please save instead if you still want to be able to edit this entry",
		step: FormSteps.completion,
		items: [
			{
				type: "input",
				rules: { validate: validators.validateEmail },
				fieldName: fieldNames.email,
				autoFocus: true
			}
		]
	}
}
