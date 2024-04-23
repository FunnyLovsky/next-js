import { IProductDetail, Services } from '@/entities/Product'
import { ProductDetailPage } from '@/pages/ProductDetail'
import { API_URL } from '@/shared/const/URL'
import { MetaLayout } from '@/widgets/MetaLayout'
import { NavLayout } from '@/widgets/NavLayout'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Head } from 'next/document'
import { useRouter } from 'next/router'
import { FC } from 'react'

export const getServerSideProps = async (context) => {
    const { url } = context.params!
    try {
        const response = await Services.getDetailProduct(url)
        return { props: { product: response.data, error: null } }
    } catch (error) {
        return { props: { product: null, error: error.message } }
    }
}

interface IProps {
    product: IProductDetail
    error: null | string
}

const ShopID: FC<IProps> = ({ product, error }) => {
    const title = product ? `${product.name} - GLAMIFY` : 'Товар не найден - GLAMIFY'
    return (
        <MetaLayout title={title}>
            <ProductDetailPage productDetail={product} error={error} />
        </MetaLayout>
    )
}

export default ShopID
