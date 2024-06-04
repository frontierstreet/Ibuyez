import React, { useContext, useState } from "react"
import GooglePlacesAutocomplete from "react-google-places-autocomplete"
import toast from "react-hot-toast"
import { ReactComponent as Search } from "../../../common/assets/icons/Down.svg"
import { Controller, useForm } from "react-hook-form"
import { Button, Select, Input } from "../../../common/components"
import { propertyTypes } from "../../../common/utils/Constant"
import { useDebouncedLoader, useWindowSize } from "../../../common/hooks"
import formService from "services/form-service"
import { useNavigate } from "react-router-dom"
import { FormSteps } from "types/form"
import { FormContext } from "modules/form/components/FormContext"

const defaultValues = {
	address: ""
}

const HeroForm = () => {
	const [query, setQuery] = useState(null)
	const { width } = useWindowSize()
	const [loading, setLoading] = useState(false)
	const isLoading = useDebouncedLoader(loading)
	const navigate = useNavigate()
	const { setter } = useContext(FormContext)

	const onCreateFormEntry = async (e) => {
		e && e.preventDefault()
		const q = query?.label.trim()
		if (!q) {
			return
		}
		setLoading(true)
		try {
			const data = await formService.createFormEntry(q)
			setLoading(false)
			setter(data)
			navigate(`/form/${data._id}/${FormSteps.addressConfirmation}`)
		} catch (e) {
			console.log(e)
			setLoading(false)
		}
	}
	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					onCreateFormEntry()
				}}>
				<div className="flex  mt-5 868:mt-10 gap-4 h-[70px]  max-w-[500px] md:w-[100%]  items-center justify-between border px-2 py-2 md:px-5 md:py-5   rounded-[20px] bg-white ">
					<div className=" flex-[1.4] relative">
						{/* <h3>Property Address</h3> */}
						<GooglePlacesAutocomplete
							apiKey={"AIzaSyDLQqQd-GhDUzCvNclvZEpuxVUFICYcfXY"}
							debounce={500}
							minLengthAutocomplete={4}
							onLoadFailed={(error) =>
								toast.error(
									"Could not inject Google script. Please reload the page",
									error
								)
							}
							selectProps={{
								isClearable: true,
								placeholder: "Type in an address",
								query,
								onChange: setQuery,
								components: {
									IndicatorSeparator: null,
									DropdownIndicator: null
								},
								classNames: {
									container: () => ` `,
									control: (state) =>
										"!border-none !outline-none w-[60vw]  !flex-[1.5] md:w-[300px]   outline-none border-none text-[14px] md:text-[16px] text-[#25253C] !placeholder:text-[#121212]"
								}
							}}
						/>
					</div>

					<div className="flex-[0.6]">
						<Button
							text={width < 500 ? "Get Offer" : "Get Cash Offer"}
							classNames="!px-2 !md:px-6"
							textClassNames="text-[15px] md:text-[16px]"
							type="submit"
							loading={loading}
						/>
					</div>
				</div>
			</form>
		</div>
	)
}

export default HeroForm
