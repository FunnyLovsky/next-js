// import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import styles from './InfoProduct.module.scss'
import { IProductDetail, Info, Price } from '@/entities/Product'
import Images from '../Images/Images'
import Colors from '../Colors/Colors'
import { FC, useState } from 'react'
import Sizes from '../Sizes/Sizes'
import CartController from '../CartController/CartController'

interface IProps {
    productDetail: IProductDetail
}

const InfoProduct: FC<IProps> = ({ productDetail }) => {
    // const { cartProducts } = useAppSelector((state) => state.cartReducer)
    const cartProducts = []
    const [product, setProduct] = useState({
        color: productDetail.colors[0].name,
        size: productDetail.sizes[0],
    })
    console.log('infoproduct')

    const onChangeColor = (color: string) => {
        if (color !== product.color) {
            setProduct((prev) => ({ ...prev, color }))
        }
    }

    const onChangeSize = (size: string) => {
        if (size !== product.size) {
            setProduct((prev) => ({ ...prev, size }))
        }
    }

    const productInCart = cartProducts.find((product) => product.id == productDetail.id)

    return (
        <div className={styles.cont}>
            <Images product={product} productDetail={productDetail} />
            <div className={styles.info}>
                <Info data={productDetail} type="big" />
                <Price data={productDetail} type="big" />
                <p className={styles.description}>{productDetail.description}</p>

                <Colors
                    product={product}
                    onChange={onChangeColor}
                    productInCart={productInCart}
                    productDetail={productDetail}
                />
                <Sizes
                    product={product}
                    onChange={onChangeSize}
                    productInCart={productInCart}
                    productDetail={productDetail}
                />
                <CartController product={product} productInCart={productInCart} />
            </div>
        </div>
    )
}

export default InfoProduct
