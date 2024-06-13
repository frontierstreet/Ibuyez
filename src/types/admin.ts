export interface IbuyezSubmissionType {
	address: {
		streetAddress: string
		unitNumber?: string
		state: string
		zipCode: string
		city: string
	}
	_id: string
	bedroomCount?: string
	bathroomCount?: string
	yearBuilt?: string
	homeCommunityGroup?: string[]
	miscellaneousHomeFeatures?: string[]
	isSubmitted: boolean
	createdAt: string
	updatedAt: string
	homeDescription?: string
	floorsAboveGround?: string
	lotSize?: string
	partialBathroomCount?: string
	percentageOfCompletedBasement?: string
	squareFootageAboveGround?: string
	squareFootageBelowGround?: string
	doesHomeNeedRepairing?: string
	otherDetails?: string
	whatNeedsRepairing?: string
	isHomeHomeOwnersAssociation?: string
	neighborhoodAllowsRentals?: string
	sellTime?: string
	email?: string
	name?: string
	phone?: string
}

export interface ContactFormType {
	_id: string
	email: string
	firstName: string
	lastName: string
	supportRequest: string
	message: string
	createdAt: string
	updatedAt: string
}
