import Head from 'next/head'
import Category from '../../src/pages/Category'
import { NavLayout } from '@/widgets/NavLayout'
import { Footer } from '@/widgets/Footer'

const Shop = ({ data }) => {
    return (
        <>
            <Head>
                <title>Shop</title>
            </Head>
            <NavLayout>
                <Category data={data} />
            </NavLayout>
        </>
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
