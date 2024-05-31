import React from "react"
import RSelect from "react-select"
import { createSelectOptions } from "../helpers"
import clsx from "clsx"

interface CustomSelectProps {
	value: number | string
	onChange: (value: number | string) => void
	options: (number | string)[]
	label: string
	description?: string
	hasError?: any
}

const CustomSelect = ({
	hasError,
	value,
	onChange,
	options,
	label,
	description
}: CustomSelectProps) => {
	const formattedOptions = createSelectOptions(options)
	const selectedValue = formattedOptions.find((option) => option.value === value)
	return (
		<div className="flex flex-col space-y-2 w-full">
			<div className="flex flex-col space-y-[2px]">
				<h3 className="text-black text-[24px]">{label}</h3>
				{description && <p className="text-[black] text-sm">{description}</p>}
			</div>
			<RSelect
				value={selectedValue}
				options={formattedOptions}
				components={{ IndicatorSeparator: () => null }}
				onChange={(value) => {
					onChange(value?.value as any)
				}}
				classNames={{
					container: () => "!w-full !border-none !shadow-none",
					control: (state) =>
						clsx("!h-[70px] !w-full !px-2 !rounded-[18px] !shadow-none border", {
							"!border-black/[.1]": !state.isFocused && !hasError,
							"!border-black": state.isFocused && !hasError,
							"!border-[2px]": state.isFocused || hasError,
							"!border-[red]": hasError
						}),
					menu: () => "!bg-white !border-border !border !rounded-[18px]",
					option: () => "!p-3 !rounded-[18px]",
					input: () => "!text-[25px]",
					singleValue: () => "!text-[25px]"
				}}
			/>
		</div>
	)
}

export default CustomSelect
