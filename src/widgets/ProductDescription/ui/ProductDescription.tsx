// import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import styles from './ProductDescription.module.scss'

const ProductDescription = () => {
    // const { productDetail } = useAppSelector((state) => state.productReducer)
    const productDetail = {
        id: '',
        name: '',
        image: '',
        rating: 0,
        price: 0,
        discount: null,
        category: '',
        gender: '',
        style: '',
        description: '',
        sizes: [],
        details: [[]],
        colors: [],
    }
    return (
        <div className={styles.cont}>
            <h1>Характеристики:</h1>
            {productDetail.details.map((detail) => (
                <h3 key={Math.random() * 12}>
                    {detail[0]} {detail[1]}
                </h3>
            ))}
        </div>
    )
}

export default ProductDescription
