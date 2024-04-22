import Head from 'next/head'
import Category from '../../src/pages/Category'
import { NavLayout } from '@/widgets/NavLayout'
import { Footer } from '@/widgets/Footer'
import { MetaLayout } from '@/widgets/MetaLayout'

const Arrivals = () => {
    return (
        <MetaLayout title="GLAMIFY - Популярные товары для стильного образа">
            <h1>Arrivals Page</h1>
        </MetaLayout>
    )
}

export default Arrivals
