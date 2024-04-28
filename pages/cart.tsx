import React from 'react'
import { CartPage } from '@/pages/Cart'
import Head from 'next/head'

const Cart = () => {
    return (
        <>
            <Head>
                <title>GLAMIFY - Ваша корзина покупок</title>
            </Head>
            <CartPage />
        </>
    )
}

export default Cart
