import React from "react"
import {
	Control,
	Controller,
	FieldErrors,
	FieldValues,
	UseFormGetValues,
	UseFormWatch
} from "react-hook-form"
import { FlattenedIbuyezSubmission, FormPageProps } from "types/form"
import OptionGroup from "./OptionGroup"
import CustomSelect from "./CustomSelect"
import CustomInput from "./CustomInput"
import OptionGroupWithImage from "./OptionGroupWIthImage"

interface FormInputRendererProps extends Pick<FormPageProps, "items"> {
	control: Control<any, any>
	errors: FieldErrors<FieldValues>
	watch: UseFormWatch<Partial<Record<keyof FlattenedIbuyezSubmission, any>>>
	triggerSubmit?: () => void
}

const FormInputRenderer = ({
	control,
	items,
	errors,
	triggerSubmit,
	watch
}: FormInputRendererProps) => {
	return (
		<div className="flex flex-col space-y-8">
			{items.map((item) => {
				const shouldRender = !item.displayFlag
					? true
					: item.displayFlag &&
						item.displayFlag.displayOn.includes(watch(item.displayFlag.watch as any))
				const hasError = errors[item.fieldName]
				if (!shouldRender) {
					return null
				}
				if (item.type === "list") {
					const options = Array.isArray(item.options) ? item.options : []
					return (
						<Controller
							key={item.fieldName}
							control={control}
							name={item.fieldName}
							rules={item.rules}
							render={({ field: { onChange, value } }) => (
								<OptionGroup
									isMultiple={item.isMultiple}
									selectedOption={value}
									onOptionChange={(newValue) => {
										onChange(newValue)
										triggerSubmit && triggerSubmit()
									}}
									hasError={hasError}
									options={options}
								/>
							)}
						/>
					)
				}
				if (item.type === "select") {
					return (
						<Controller
							key={item.fieldName}
							control={control}
							name={item.fieldName}
							rules={item.rules}
							render={({ field: { onChange, value } }) => (
								<CustomSelect
									value={value}
									label={item.label || ""}
									description={item.description}
									onChange={onChange}
									hasError={errors[item.fieldName]}
									options={item.options as (string | number)[]}
								/>
							)}
						/>
					)
				}
				if (item.type === "input" || item.type === "numeric-input") {
					return (
						<Controller
							key={item.fieldName}
							control={control}
							name={item.fieldName}
							rules={item.rules}
							render={({ field: { onChange, value } }) => (
								<CustomInput
									isNumeric={item.type === "numeric-input"}
									prefix={item.inputPrefix}
									suffix={item.inputSuffix}
									onChange={onChange}
									value={value}
									hasError={errors[item.fieldName]}
									label={item.label || ""}
									description={item.description}
									italicizeDescription={item.italicizeDescription}
								/>
							)}
						/>
					)
				}
				if (item.type === "image-select") {
					return (
						<Controller
							key={item.fieldName}
							control={control}
							name={item.fieldName}
							rules={item.rules}
							render={({ field: { onChange, value } }) => (
								<OptionGroupWithImage
									selectedOption={value}
									onOptionChange={onChange}
									options={item.options || []}
									hasError={errors[item.fieldName]}
								/>
							)}
						/>
					)
				}
				return <div key={item.fieldName} />
			})}
		</div>
	)
}

export default FormInputRenderer
