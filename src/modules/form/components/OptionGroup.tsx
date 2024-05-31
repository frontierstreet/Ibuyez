import React from "react"
import clsx from "clsx"
import type { FormOptionItemProps, FormOptionProps, Option } from "types/form"
import { NA } from "../constants/listing-form"

const OptionItem = ({ isSelected, onClick, value, hasError }: FormOptionItemProps) => {
	const isRenderable = typeof value === "string" || typeof value === "number"
	const isObject = typeof value === "object"
	const handleOnClick = () => {
		onClick(isObject ? value.title : value)
	}

	return (
		<button
			onClick={handleOnClick}
			type="button"
			className={clsx(
				"border-border/[.5] border-[2px] transition-all duration-200 rounded-[20px] px-4 py-8 text-left",
				{
					"!border-black": isSelected,
					"!border-[red]": hasError
				}
			)}>
			{isObject ? (
				<div className="flex flex-col space-y-1">
					<span
						className={clsx("text-[24px] text-black", { "!font-medium": isSelected })}>
						{value.title}
					</span>
					<span className="text-sm text-[#aaa]">{value.subtitle}</span>
				</div>
			) : (
				<span className={clsx("text-[24px] text-black", { "!font-medium": isSelected })}>
					{isRenderable ? value : ""}
				</span>
			)}
		</button>
	)
}

const OptionGroup = ({
	selectedOption,
	onOptionChange,
	options,
	hasError,
	isMultiple
}: FormOptionProps) => {
	const isSelectedItem = (option: Option) => {
		if (isMultiple) {
			const selected = (selectedOption as Option[]) || []
			if (typeof option === "object") {
				return selected.includes(option.title)
			}
			return selected.includes(option)
		} else {
			if (typeof option === "object") {
				return selectedOption === option.title
			}
			return selectedOption === option
		}
	}

	const onChange = (option: Option) => {
		if (isMultiple) {
			if (option === NA) {
				onOptionChange([NA])
				return
			}
			if (isSelectedItem(option)) {
				const selected = (selectedOption as Option[]) || []
				if (typeof option === "object") {
					onOptionChange(selected.filter((item) => item !== option.title))
					return
				}
				onOptionChange(selected.filter((item) => item !== option))
				return
			} else {
				const selected = (selectedOption as Option[]) || []
				if (typeof option === "object") {
					onOptionChange([...selected, option.title].filter((item) => item !== NA))
					return
				}
				onOptionChange([...selected, option].filter((item) => item !== NA))
				return
			}
		} else {
			if (typeof option === "object") {
				onOptionChange(option.title)
				return
			}
			onOptionChange(option)
		}
	}

	return (
		<div className="space-y-2 flex flex-col w-full">
			{options.map((option) => (
				<OptionItem
					key={JSON.stringify(option)}
					isSelected={isSelectedItem(option)}
					onClick={(newValue) => onChange(newValue)}
					value={option}
					hasError={hasError}
				/>
			))}
		</div>
	)
}

export default OptionGroup
