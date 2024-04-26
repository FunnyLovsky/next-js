// import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
// import { clearProduct, setIsLoding } from '@/entities/Product'
// import { fetchProductDetail } from '@/entities/Product/model/services/fetchProductDetail'
import { ProductsList } from '@/features/ProductList'
import Conatiner from '@/shared/ui/Container'
// import LoaderPage from '@/shared/ui/LoaderPage'
import NotFound from '@/shared/ui/NotFound'
import { Breadcrumb } from '@/widgets/Breadcrumb'
// import { InfoProduct } from '@/widgets/InfoProduct'
// import { ProductDescription } from '@/widgets/ProductDescription'
import { FC, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import SEARCH from '@/shared/assets/icons/search.svg'
import { IProductDetail } from '@/entities/Product'

interface IProps {
    productDetail: IProductDetail | null
    error: null | string
}
const ProductDetail: FC<IProps> = ({ productDetail, error = null }) => {
    // const { productURL } = useParams()
    // const dispatch = useAppDispatch()
    // const { productDetail, isLoading, error } = useAppSelector((state) => state.productReducer)

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    //     dispatch(fetchProductDetail({ productURL }))
    // }, [dispatch, productURL])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // useEffect(() => {
    //     if (productDetail.name !== '') {
    //         document.title = `${productDetail.name} - GLAMIFY`
    //     }
    // }, [productDetail])

    // useEffect(() => {
    //     return () => {
    //         dispatch(clearProduct())
    //         dispatch(setIsLoding(true))
    //     }
    // }, [dispatch])

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
                {/* <InfoProduct />
                <ProductDescription /> */}
                <ProductsList title="Похожие товары" productDetail={productDetail} />
            </Conatiner>
        </>
    )
}

export default ProductDetail
