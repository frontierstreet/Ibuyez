import React, { useEffect } from "react"
import clsx from "classnames"
import Footer from "./Footer"
import TopNav from "./TopNav"
import SEO from "../general/SEO"

const NavigationWrapper = ({
	children,
	containerClassName,
	title,
	description,
	image,
	handleSEO = false,
	hasFooter = true
}) => {
	useEffect(() => {
		window.scroll(0, 0)
	}, [])
	return (
		<div>
			{handleSEO && <SEO title={title} description={description} image={image} />}
			<TopNav />
			<div
				className={clsx(
					{ "min-h-[calc(100vh_-_602px)] lg:min-h-[calc(100vh_-_316px)]": hasFooter },
					containerClassName
				)}>
				{children}
			</div>
			{hasFooter && <Footer />}
		</div>
	)
}

export default NavigationWrapper
