import React from "react"
import ReactSelect from "react-select"

const customClassNames = (hasError) => ({
	control: (state) =>
		`h-[60px] lg:h-[59.98px] text-[9.41px] px-4 lg:text-base leading-[14.12px] lg:leading-6 w-full outline-none rounded-[7.93px] lg:rounded-[13.48px] border-black  placeholder:text-C9C7C7${
			state.isFocused ? "!outline-none !border-E8EBEC !-none" : ""
		} ${hasError ? "!border-[red]" : "!border-white"}`,
	option: (state) =>
		state.data === state.selectProps.value
			? "!text-[#1e1e1e] !text-16 font-semibold !bg-[#EFEFEF]"
			: "hover:!bg-[#EFEFEF] !text-16 !text-[#1e1e1e]",
	placeholder: (state) => `!text-[#121212]`,
	valueContainer: (state) => "!px-0"
})

const Select = ({ hasError, className, ref_, ...rest }) => {
	return (
		<ReactSelect
			ref={ref_}
			classNames={{
				...customClassNames(!!hasError)
			}}
			components={{
				IndicatorSeparator: null
			}}
			{...rest}
			value={!!rest?.value?.value ? rest?.value : null}
		/>
	)
}
// text-[9.41px] lg:text-base
export default Select
