
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, image }) {
    const parsedTitle = title ? `Frontier Street || ${title}` : "Frontier Street"
    return (
        <Helmet>
            { /* Standard metadata tags */}
            <title>{parsedTitle}</title>
            <meta name='description' content={description || "Sell Your House Fast In The Greater Indianapolis"} />
            { /* End standard metadata tags */}
            { /* Facebook tags */}
            <meta property="og:title" content={parsedTitle} />
            <meta property="og:description" content={description || "Sell Your House Fast In The Greater Indianapolis"} />
            { /* End Facebook tags */}
            { /* Twitter tags */}
            <meta name="twitter:title" content={parsedTitle} />
            <meta name="twitter:description" content={description || "Sell Your House Fast In The Greater Indianapolis"} />
            { /* End Twitter tags */}
            {image &&
                <meta property='og:image' content={image} />
            }
            {image &&
                <meta name="twitter:image" content={image} />
            }

        </Helmet>
    )
}
