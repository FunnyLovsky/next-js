import { MainPage } from '@/pages/Main'
import { NavLayout } from '@/widgets/NavLayout'
import Head from 'next/head'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import { MetaLayout } from '@/widgets/MetaLayout'

const Index = () => {
    return (
        <MetaLayout title="GLAMIFY - Модные тренды в мире одежды">
            <MainPage />
        </MetaLayout>
    )
}

export default Index
