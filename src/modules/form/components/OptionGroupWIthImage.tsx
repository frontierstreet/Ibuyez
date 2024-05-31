import React from "react"
import clsx from "clsx"
import type { FormOptionItemProps, FormOptionProps } from "types/form"

const OptionItemWithImage = ({ isSelected, onClick, value, hasError }: FormOptionItemProps) => {
	const handleOnClick = () => {
		if (!isSelected) {
			onClick(typeof value === "object" ? value.title : "")
		}
	}

	if (typeof value === "object") {
		return (
			<button
				onClick={handleOnClick}
				type="button"
				className={clsx(
					"border-border/[.5] overflow-hidden border-[2px] transition-all duration-200 rounded-[20px]",
					{
						"!border-black": isSelected,
						"!border-[red]": hasError
					}
				)}>
				<div className="h-[150px] relative">
					<img
						src={value.image}
						alt={value.title}
						className="absolute object-cover h-full w-full top-0 left-0"
					/>
				</div>
				<div className="h-[100px] px-4 py-2">
					<h3 className="font-medium text-[20px]">{value.title}</h3>
					<span className="text-sm text-[grey]">{value.subtitle}</span>
				</div>
			</button>
		)
	}
}

const OptionGroupWithImage = ({
	selectedOption,
	onOptionChange,
	options,
	hasError
}: FormOptionProps) => {
	return (
		<div className="grid grid-cols-2 gap-2">
			{options.map((option) => (
				<OptionItemWithImage
					key={JSON.stringify(option)}
					isSelected={
						typeof option == "object"
							? option.title === selectedOption
							: option === selectedOption
					}
					onClick={(newValue) => onOptionChange(newValue)}
					value={option}
					hasError={hasError}
				/>
			))}
		</div>
	)
}

export default OptionGroupWithImage
