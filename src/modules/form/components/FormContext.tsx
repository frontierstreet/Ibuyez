import { doNothing } from "modules/common/utils/functions"
import React, { createContext, useState } from "react"
import { IbuyezSubmission, FlattenedIbuyezSubmission, FormSteps } from "types/form"

export const FormContext = createContext<{
	data: FlattenedIbuyezSubmission | null
	setter: (data: IbuyezSubmission) => void
	steps: FormSteps[]
	setSteps: (data: FormSteps[]) => void
}>({ data: null, setter: doNothing, steps: [], setSteps: doNothing })

const FormContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [currentFormValue, setCurrentFormValue] = useState<FlattenedIbuyezSubmission | null>(null)
	const [steps, setSteps] = useState<FormSteps[]>([])
	const setter = (data: IbuyezSubmission) => {
		setCurrentFormValue({
			...data,
			streetAddress: data?.address?.streetAddress || "",
			unitNumber: data?.address?.unitNumber || "",
			state: data?.address?.state || "",
			zipCode: data?.address?.zipCode || "",
			city: data?.address?.city || ""
		})
	}

	return (
		<FormContext.Provider value={{ data: currentFormValue, setter, steps, setSteps }}>
			{children}
		</FormContext.Provider>
	)
}

export default FormContextProvider
