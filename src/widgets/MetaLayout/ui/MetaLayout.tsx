import { IPropsChildren } from '@/shared/types/IComponents'
import Head from 'next/head'
import { FC } from 'react'
import { metaData } from '../const/metaData'

interface IProps extends IPropsChildren {
    title: string
    description?: string
    keywords?: string
    ogDescription?: string
}

const MetaLayout: FC<IProps> = ({
    title,
    children,
    description = metaData.description,
    keywords = metaData.keywords,
    ogDescription = metaData.ogDescription,
}) => {
    return (
        <>
            <Head>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content="GLAMIFY" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={ogDescription} />
                <meta property="og:image" content="https://glamify-shop.vercel.app/favicon.svg" />
                <meta property="og:url" content="https://glamify-shop.vercel.app" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={ogDescription} />
                <meta name="twitter:image" content="https://glamify-shop.vercel.app/favicon.svg" />

                <title>{title}</title>
            </Head>
            {children}
        </>
    )
}

export default MetaLayout
