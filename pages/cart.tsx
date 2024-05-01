import React from 'react'
import { CartPage } from '@/pages/Cart'

import { MetaLayout } from '@/widgets/MetaLayout'
import { SuspenseWrapper } from '@/app/providers/router'

const Cart = () => {
    return (
        <MetaLayout title="GLAMIFY - Ваша корзина покупок" noIndex={true}>
            <SuspenseWrapper>
                <CartPage />
            </SuspenseWrapper>
        </MetaLayout>
    )
}

export default Cart
