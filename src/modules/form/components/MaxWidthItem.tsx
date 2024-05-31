import React from "react"
import clsx from "clsx"

const MaxWidthItem = ({
	children,
	className,
	wrapperClassName,
	wrapperElement
}: {
	children: React.ReactNode
	className?: string
	wrapperClassName?: string
	wrapperElement?: React.ReactNode
}) => {
	return (
		<div className={wrapperClassName}>
			{wrapperElement && wrapperElement}
			<div className={clsx("max-w-[1440px] w-full mx-auto", className)}>{children}</div>
		</div>
	)
}

export default MaxWidthItem
