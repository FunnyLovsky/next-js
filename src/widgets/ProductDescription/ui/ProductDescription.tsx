// import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import { IProductDetail } from '@/entities/Product'
import styles from './ProductDescription.module.scss'
import { FC } from 'react'

interface IProps {
    productDetail: IProductDetail
}

const ProductDescription: FC<IProps> = ({ productDetail }) => {
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
