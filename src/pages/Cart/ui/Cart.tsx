import { Breadcrumb } from '@/widgets/Breadcrumb'
import { CartProduct } from '@/widgets/CartProduct'
import { useEffect } from 'react'

const Cart = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Breadcrumb />
            <CartProduct />
        </>
    )
}

export default Cart
