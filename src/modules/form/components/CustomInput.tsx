import React from "react"
import clsx from "clsx"
import { NumericFormat } from "react-number-format"

interface CustomInputProps {
	isNumeric?: boolean
	value: number | string
	onChange: (value?: number | string) => void
	label: string
	description?: string
	prefix?: string
	suffix?: string
	hasError?: any
}

const CustomInput = ({
	value,
	onChange,
	isNumeric,
	label,
	description,
	prefix,
	suffix,
	hasError
}: CustomInputProps) => {
	return (
		<div className="flex flex-col space-y-2 w-full">
			<div className="flex flex-col space-y-[2px]">
				<h3 className="text-black text-[24px]">{label}</h3>
				{description && <p className="text-[black] text-sm">{description}</p>}
			</div>
			{isNumeric ? (
				<NumericFormat
					className={clsx(
						"hover:border-black/[.5] border-black/[.1] transition-all duration-[300] !h-[70px] !px-4 !text-[25px] !w-full outline-none !rounded-[18px] focus:!border-black focus:!border-[2px] !shadow-none border",
						{ "!border-[red] !border-[2px]": hasError }
					)}
					thousandSeparator=","
					value={value}
					onValueChange={(value) => onChange(value.floatValue)}
					prefix={prefix}
					suffix={suffix}
				/>
			) : (
				<input
					className={clsx(
						"hover:border-black/[.8] border-black/[.1] transition-all duration-[300] !h-[70px] px-3 outline-none !text-[25px] !w-full !rounded-[18px] focus:!border-black focus:!border-[2px] !shadow-none border",
						{ "!border-[red] !border-[2px]": hasError }
					)}
					value={value}
					onChange={(e) => onChange(e.target.value)}
				/>
			)}
		</div>
	)
}

export default CustomInput
