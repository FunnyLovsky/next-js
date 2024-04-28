import { MainPage } from '@/pages/Main'
import React from 'react'
import { MetaLayout } from '@/widgets/MetaLayout'

const Index = () => {
    return (
        <MetaLayout
            title="Брендовая одежда GLAMIFY - Мода, стиль и качество"
            description="Погрузитесь в мир стиля и качества с GLAMIFY. Новые коллекции, акции и скидки на одежду от лучших брендов."
        >
            <MainPage />
        </MetaLayout>
    )
}

export default Index
