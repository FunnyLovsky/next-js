import React from 'react'
import { CartPage } from '@/pages/Cart'

import { MetaLayout } from '@/widgets/MetaLayout'

const Cart = () => {
    return (
        <MetaLayout title="GLAMIFY - Ваша корзина покупок" noIndex={true}>
            <CartPage />
        </MetaLayout>
    )
}

export default Cart
