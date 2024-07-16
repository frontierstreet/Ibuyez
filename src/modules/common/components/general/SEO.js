import { Helmet } from "react-helmet-async"
import React from 'react';

export default function SEO({ title, description, image }) {
	const parsedTitle = title ? `iBuyEZ || ${title}` : "iBuyEZ"
	return (
		<Helmet>
			{/* Standard metadata tags */}
			<title>{parsedTitle}</title>
			<meta
				name="description"
				content={description || "SELL YOUR HOME THE EZ WAY"}
			/>
			{/* End standard metadata tags */}
			{/* Facebook tags */}
			<meta property="og:title" content={parsedTitle} />
			<meta
				property="og:description"
				content={description || "SELL YOUR HOME THE EZ WAY"}
			/>
			{/* End Facebook tags */}
			{/* Twitter tags */}
			<meta name="twitter:title" content={parsedTitle} />
			<meta
				name="twitter:description"
				content={description || "SELL YOUR HOME THE EZ WAY"}
			/>
			{/* End Twitter tags */}
			{image && <meta property="og:image" content={image} />}
			{image && <meta name="twitter:image" content={image} />}
		</Helmet>
	)
}
