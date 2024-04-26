import Head from 'next/head'
import React from 'react'
import { AuthPage } from '@/pages/Auth'

const Auth = () => {
    return (
        <>
            <Head>
                <title>GLAMIFY - Войти или зарегистрироваться</title>
            </Head>
            <AuthPage />
        </>
    )
}

export default Auth
