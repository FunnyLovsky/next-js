import { MainPage } from '@/pages/Main'
import { NavLayout } from '@/widgets/NavLayout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Index = () => {
    return (
        <>
            <Head>
                <title>GLAMIFY - Модные тренды в мире одежды</title>
            </Head>
            <NavLayout>
                <MainPage />
            </NavLayout>
        </>
    )
}

export default Index
