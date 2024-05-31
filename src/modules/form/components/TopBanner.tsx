import React, { useContext } from "react"
import { FormContext } from "./FormContext"

interface TopBannerProps {
	onSave: () => void
}

const TopBanner = ({ onSave }: TopBannerProps) => {
	const { data } = useContext(FormContext)
	const addr = data
		? `${data?.unitNumber ? `${data.unitNumber}, ` : ""}${data.streetAddress}`
		: ""
	return (
		<div className="h-[80px] flex justify-between w-full items-center">
			<span className="font-semibold text-sm">{addr}</span>
			<button className="text-primary font-bold" onClick={onSave}>
				Save
			</button>
		</div>
	)
}

export default TopBanner
