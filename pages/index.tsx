import { MainPage } from '@/pages/Main'
import { NavLayout } from '@/widgets/NavLayout'
import Link from 'next/link'
import React from 'react'

const Index = () => {
    return (
        <>
            <NavLayout>
                <MainPage />
            </NavLayout>
        </>
    )
}

export default Index
