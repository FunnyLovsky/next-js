import Head from 'next/head'
import Category from '../../src/pages/Category'

const Shop = ({ data }) => {
    return (
        <>
            <Head>
                <title>Shop</title>
            </Head>
            <Category data={data} />
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
