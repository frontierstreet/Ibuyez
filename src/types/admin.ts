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

export interface ContactType {
	_id: string
	companyName?: string
	firstName?: string
	lastName?: string
	address?: string
	city?: string
	state?: string
	zipCode?: string
	phoneNumbers?: string[]
	emails?: string[]
}

export interface ScheduleSubmissionType {
	_id:string
	name?: string,
	streetAddress?: string,
	city?: string,
	state?: string,
	zipCode?: string,
	phoneNumber?: string,
	email?: string,
	consideredSellingDuration?: string,
	reasonsToSell?: string[],
	sellingTimeframe?:string
	askingPrice?: string
	createdAt: string
}