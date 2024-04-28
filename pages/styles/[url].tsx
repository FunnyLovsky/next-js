import { IProductDetail, Services } from '@/entities/Product'
import { ProductDetailPage } from '@/pages/ProductDetail'
import { MetaLayout } from '@/widgets/MetaLayout'
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
    if (error) {
        return <ProductDetailPage productDetail={product} error={error} />
    }

    return (
        <MetaLayout title={`${product.name} - GLAMIFY`}>
            <ProductDetailPage productDetail={product} />
        </MetaLayout>
    )
}

export default ShopID
