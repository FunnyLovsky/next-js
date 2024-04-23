import { IPropsChildren } from '@/shared/types/IComponents'
import Head from 'next/head'
import { FC } from 'react'

interface IProps extends IPropsChildren {
    title: string
}

const MetaLayout: FC<IProps> = ({ title, children }) => {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="GLAMIFY - интернет-магазин одежды для стильных и модных. Широкий выбор женской, мужской и детской одежды высокого качества."
                />
                <meta
                    name="keywords"
                    content="GLAMIFY, одежда, интернет-магазин, мода, стиль, мужская одежда, женская одежда"
                />
                <meta name="author" content="GLAMIFY" />
                <meta property="og:title" content={title} />
                <meta
                    property="og:description"
                    content="Широкий выбор стильной и модной одежды для женщин, мужчин и детей. Быстрая доставка и высокое качество."
                />
                <meta property="og:image" content="https://glamify-shop.vercel.app/favicon.svg" />
                <meta property="og:url" content="https://glamify-shop.vercel.app" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta
                    name="twitter:description"
                    content="Широкий выбор стильной и модной одежды для женщин, мужчин и детей. Быстрая доставка и высокое качество."
                />
                <meta name="twitter:image" content="https://glamify-shop.vercel.app/favicon.svg" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <title>{title}</title>
            </Head>
            {children}
        </>
    )
}

export default MetaLayout
