import Head from 'next/head'
import Category from '../../src/pages/Category'
import { NavLayout } from '@/widgets/NavLayout'
import { Footer } from '@/widgets/Footer'
import { MetaLayout } from '@/widgets/MetaLayout'

const Styles = () => {
    return (
        <MetaLayout title="GLAMIFY - Популярные товары для стильного образа">
            <h1>Styles Page</h1>
        </MetaLayout>
    )
}

export default Styles
