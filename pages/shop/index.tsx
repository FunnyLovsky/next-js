import Head from 'next/head'
import Category from '../../src/pages/Category'
import { NavLayout } from '@/widgets/NavLayout'
import { Footer } from '@/widgets/Footer'
import { MetaLayout } from '@/widgets/MetaLayout'

const Shop = ({ data }) => {
    return (
        <MetaLayout title="GLAMIFY - Популярные товары для стильного образа">
            <Category data={data} />
        </MetaLayout>
    )
}

export default Shop

export async function getStaticProps(context) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        return {
            props: { data },
        }
    } catch (error) {
        return {
            props: {},
        }
    }
}
