import Head from 'next/head'
import Category from '../../src/pages/Category'
import { NavLayout } from '@/widgets/NavLayout'
import { Footer } from '@/widgets/Footer'
import { MetaLayout } from '@/widgets/MetaLayout'

const Sales = () => {
    return (
        <MetaLayout title="GLAMIFY - Популярные товары для стильного образа">
            <h1>Sales Page</h1>
        </MetaLayout>
    )
}

export default Sales
