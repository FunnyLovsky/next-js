import { MainPage } from '@/pages/Main'
import { NavLayout } from '@/widgets/NavLayout'
import Head from 'next/head'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import { MetaLayout } from '@/widgets/MetaLayout'
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
