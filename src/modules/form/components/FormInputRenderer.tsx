import React from "react"
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form"
import { FormPageItem, FormPageProps, FormSteps } from "types/form"
import OptionGroup from "./OptionGroup"
import CustomSelect from "./CustomSelect"
import CustomInput from "./CustomInput"
import OptionGroupWithImage from "./OptionGroupWIthImage"

interface FormInputRendererProps extends Pick<FormPageProps, "items"> {
	control: Control<any, any>
	errors: FieldErrors<FieldValues>
}

const FormInputRenderer = ({ control, items, errors }: FormInputRendererProps) => {
	return (
		<div className="flex flex-col space-y-8">
			{items.map((item) => {
				const hasError = errors[item.fieldName]
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
									onOptionChange={(newValue) => onChange(newValue)}
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
