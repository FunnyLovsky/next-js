import { IPropsChildren } from '@/shared/types/IComponents'
import Head from 'next/head'
import { FC } from 'react'
import { metaData } from '../const/metaData'
import { SITE_URL } from '@/shared/const/URL'

interface IProps extends IPropsChildren {
    title: string
    description?: string
    keywords?: string
    image?: string
}

const MetaLayout: FC<IProps> = ({
    title,
    children,
    description = metaData.description,
    keywords = metaData.keywords,
    image = metaData.image,
}) => {
    return (
        <>
            <Head>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content="GLAMIFY TEAM" />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:url" content={SITE_URL} />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
                <meta property="og:site_name" content="GLAMIFY" />

                <title>{title}</title>
            </Head>
            {children}
        </>
    )
}

export default MetaLayout
