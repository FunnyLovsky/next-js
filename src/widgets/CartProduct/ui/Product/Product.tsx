import styles from './Product.module.scss'
import { FC } from 'react'
import { ICartProduct } from '@/entities/Cart'
import { DeleteProductCart } from '@/features/DeleteProductCart'
import { ChangeCountProductCart } from '@/features/ChangeCountProductCart'
// import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import LoaderBtn from '@/shared/ui/LoaderBtn'

import { RoutesName } from '@/app/providers/router'
import Image from '@/shared/ui/Image'
import Link from 'next/link'

interface IProps {
    product: ICartProduct
}

const ProductCart: FC<IProps> = ({ product }) => {
    // const { isLoading } = useAppSelector((state) => state.cartReducer)
    const isLoading = false
    const { price, discount, count } = product
    const withDiscount = Math.ceil(price * (1 - discount / 100)) * count
    const withoutDiscount = price * count

    return (
        <div className={styles.product}>
            <Link href={`${RoutesName.SHOP}/${product.url}`}>
                <div className={styles.img}>
                    <Image src={product.image} alt="" />
                </div>
            </Link>

            <div className={styles.info}>
                <div className={styles.desc}>
                    <div className={styles.title}>
                        <h3>{product.name}</h3>
                        <DeleteProductCart type="icon" productId={product.id} />
                    </div>

                    <p>Размер: {product.size}</p>
                    <p>Цвет: {product.color}</p>
                </div>
                <div className={styles.title}>
                    <div className={styles.price}>₽{discount ? withDiscount : withoutDiscount}</div>
                    {isLoading ? (
                        <LoaderBtn variant="button" type="small" />
                    ) : (
                        <ChangeCountProductCart productCart={product} type="small" />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductCart
