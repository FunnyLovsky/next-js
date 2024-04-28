import { ProductsList } from '@/features/ProductList'
import Conatiner from '@/shared/ui/Container'
import NotFound from '@/shared/ui/NotFound'
import { Breadcrumb } from '@/widgets/Breadcrumb'
import { InfoProduct } from '@/widgets/InfoProduct'
import { ProductDescription } from '@/widgets/ProductDescription'
import { FC, useEffect } from 'react'
import SEARCH from '@/shared/assets/icons/search.svg'
import { IProductDetail } from '@/entities/Product'

interface IProps {
    productDetail: IProductDetail | null
    error?: null | string
}

const ProductDetail: FC<IProps> = ({ productDetail, error = null }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (error) {
        return (
            <Conatiner>
                <Breadcrumb />
                <NotFound
                    title={error}
                    subtitle="Пожалуйста, проверьте правильность запроса или вернитесь к списку товаров"
                    icon={SEARCH}
                    type="big"
                />
            </Conatiner>
        )
    }

    return (
        <>
            <Breadcrumb product={productDetail} />
            <Conatiner>
                <InfoProduct productDetail={productDetail} />
                <ProductDescription productDetail={productDetail} />
                <ProductsList title="Похожие товары" productDetail={productDetail} />
            </Conatiner>
        </>
    )
}

export default ProductDetail
