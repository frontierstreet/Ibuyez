import { FieldValues, RegisterOptions } from "react-hook-form"

export type Option = string | number | { title: string; subtitle: string; image?: string }

export interface FormOptionProps {
	options: Option[]
	selectedOption: Option | Option[] | null | undefined
	onOptionChange: (value: Option | Option[]) => void
	hasError?: any
	isMultiple?: boolean
}

export interface FormOptionItemProps {
	isSelected: boolean
	onClick: (value: Option) => void
	value: Option
	hasError?: any
}

export interface FormPageItem {
	type: "image-select" | "list" | "select" | "input" | "numeric-input"
	label?: string
	description?: string
	options?: Option[]
	inputSuffix?: string
	inputPrefix?: string
	rules?:
		| Omit<
				RegisterOptions<FieldValues, string>,
				"valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
		  >
		| undefined
	fieldName: string
	isMultiple?: boolean
	autoFocus?: boolean
}

export enum FormSteps {
	addressConfirmation = "address-confirmation",
	homeDescription = "home-description",
	homeDetailsConfirmation = "home-details-confirmation",
	homeOwnerConfirmation = "home-owner-confirmation",
	kitchenCounterTops = "kitchen-countertops",
	kitchenApplicanceDescriptions = "kitchen-applicance-descriptions",
	kitchenDescription = "kitchen-description",
	bathroomDescription = "bathroom-description",
	livingRoomDescription = "livingroom-description",
	homeExteriorDescription = "home-exterior-description",
	isHomeHomeOwnersAssociation = "homeowners-association",
	homeCommunityGroup = "homecommunity-group",
	miscellaneousHomeFeatures = "miscellaneous-home-features",
	sellTime = "sell-time",
	homeBuilder = "home-builder",
	homeBuilderSelect = "home-builder-select",
	completion = "completion"
}

export interface FormPageProps {
	header: string
	description: string
	extraLeftHandSideElement?: React.ReactNode
	items: FormPageItem[]
	step: FormSteps
}

export interface IbuyezSubmission {
	address?: {
		streetAddress: string
		unitNumber?: string
		state: string
		zipCode: string
		city: string
	}
	_id: string
	step: FormSteps
	bedroomCount?: number
	bathroomCount?: number
	yearBuilt?: number
	homeDescription?: string
	partialBathroomCount?: number
	squareFootageAboveGround?: number
	lotSquareFootage?: number
	floorsAboveGround?: number
	floorsBelowGround?: string
	pool?: string
	homeownership?: string
	kitchenCounterTops?: string
	kitchenApplicanceDescriptions?: string
	kitchenDescription?: string
	bathroomDescription?: string
	livingRoomDescription?: string
	homeExteriorDescription?: string
	isHomeHomeOwnersAssociation?: string
	homeCommunityGroup?: string
	miscellaneousHomeFeatures?: string
	sellTime?: string
	homeBuilder?: string
	homeBuilderName?: string
}

export interface FlattenedIbuyezSubmission extends Omit<IbuyezSubmission, "address"> {
	streetAddress: string
	unitNumber: string
	state: string
	zipCode: string
	city: string
}
