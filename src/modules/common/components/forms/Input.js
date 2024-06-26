import React from "react"
import clsx from "classnames"

const Input = ({ value, onChange, hasError, type = "string", className, ref_, ...rest }) => {
	return (
		<input
			ref={ref_}
			value={value}
			onChange={onChange}
			className={clsx(
				"h-[60px] lg:h-[59.98px] text-[16px] lg:text-base leading-[14.12px] lg:leading-6 w-full outline-none rounded-[7.93px] lg:rounded-[13.48px] border-black border  placeholder:text-C9C7C7",
				className,
				{ "!border !border-[red] !border-solid": hasError }
			)}
			{...rest}
			type={type}
		/>
	)
}

export default Input
