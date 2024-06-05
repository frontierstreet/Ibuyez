import { useContext, useEffect, useState, useMemo } from "react"
import { FormSteps, FlattenedIbuyezSubmission } from "types/form"
import { FormContext } from "../components/FormContext"
import formService from "services/form-service"
import { fieldNames, formMaker } from "../constants/constants"
import { useNavigate, useParams } from "react-router-dom"
import toast from "react-hot-toast"
import { formRoute } from "../helpers"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const useCustomForm = (step: FormSteps) => {
	const navigate = useNavigate()
	const params = useParams()
	const [submitting, setSubmitting] = useState(false)
	const { data, setter, setSteps, steps } = useContext(FormContext)

	useEffect(() => {
		const html = document.querySelector("html")
		if (html) {
			html.classList.add("no-scrollbar")
		}
		return () => {
			const html = document.querySelector("html")
			if (html) {
				html.classList.remove("no-scrollbar")
			}
		}
	}, [])

	const onCompletion = async () => {
		const ReactSwal = withReactContent(Swal)
		const response = await ReactSwal.fire({
			title: "Offer processing...",
			text: "We'll update you via email or call/text with questions",
			icon: "success",
			allowOutsideClick: false,
			confirmButtonText: "Okay"
		})
		if (response.isConfirmed) {
			navigate("/")
		}
	}

	const onSave = async () => {
		if (!data) {
			return
		}
		const ReactSwal = withReactContent(Swal)
		const {
			value: email,
			isConfirmed,
			isDenied
		} = await ReactSwal.fire({
			title: "Save your progress",
			input: "email",
			inputLabel: "We'll send you a mail so you can pick up where you left off",
			inputPlaceholder: "Enter your email address",
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: "Save",
			denyButtonText: "Save and continue",
			denyButtonColor: "#000",
			allowOutsideClick: () => !ReactSwal.isLoading()
		})
		const stopLoading = () => {
			if (isConfirmed || isDenied) {
				ReactSwal.hideLoading()
			}
		}
		if (email) {
			if (isConfirmed) {
				ReactSwal.showLoading()
			} else if (isDenied) {
				ReactSwal.showLoading(ReactSwal.getDenyButton())
			}

			try {
				await formService.saveForm(data._id, email)
				stopLoading()
				Swal.fire({
					title: "Saved successfully!",
					text: "Your progress has been saved!",
					icon: "success"
				}).then((result) => {
					if (result.isDenied) {
						navigate("/", { replace: true })
					}
				})
			} catch (e) {
				Swal.showValidationMessage("Request failed")
				stopLoading()
			}
		}
	}

	const getData = async () => {
		if (params.formId) {
			try {
				const { steps, data } = await formService.getFormEntry(params.formId)
				setter(data)
				setSteps(steps)
				const currentFormStepIndex = steps.indexOf(data.step)
				const currentPageStepIndex = steps.indexOf(step)
				if (currentPageStepIndex > currentFormStepIndex) {
					navigate(formRoute(data.step, data._id))
				}
			} catch (e) {
				toast.error("There was an error fetching your form details")
				navigate("/")
			}
		}
	}

	useEffect(() => {
		if (!data) {
			if (!params.formId) {
				toast.error("Invalid route")
				navigate("/", { replace: true })
				return
			}
			getData()
		}
	}, [])

	const extract = (keys: (keyof FlattenedIbuyezSubmission)[]) => {
		const response: Partial<Record<keyof FlattenedIbuyezSubmission, any>> = {}
		keys.map((key) => {
			let item = data?.[key] || ""

			response[key] = item
		})
		return response
	}

	const defaultValues = useMemo(() => {
		const map: Partial<
			Record<FormSteps, Partial<Record<keyof FlattenedIbuyezSubmission, any>>>
		> = {}
		Object.keys(formMaker).map((key) => {
			const fields = formMaker[key as FormSteps].items.map(
				(key) => key.fieldName as keyof FlattenedIbuyezSubmission
			)
			map[key as FormSteps] = extract(fields)
		})
		return map[step]
	}, [data, step])

	const submit = async (payload: Partial<Record<keyof typeof fieldNames, any>>) => {
		if (data?._id) {
			setSubmitting(true)
			try {
				const response = await formService.editForm(data._id, payload, step)
				setter(response.data)
				setSteps(response.steps)
				setSubmitting(false)
				if (step !== FormSteps.completion) {
					navigate(formRoute(response.data.step, data._id))
					setSubmitting(false)
				} else {
					onCompletion()
					setSubmitting(false)
				}
			} catch (e: any) {
				if (!e.response.data.error) {
					toast.error("There was an error.")
				}
				setSubmitting(false)
			}
		}
	}

	return {
		defaultValues,
		submit,
		submitting,
		onSave
	}
}

export default useCustomForm
