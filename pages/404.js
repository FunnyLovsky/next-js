import { NavLayout } from '@/widgets/NavLayout'
import Head from 'next/head'

export default function NotFound() {
    return (
        <>
            <Head>
                <title>Not found - GLAMIFY</title>
            </Head>
            <NavLayout>
                <h1>Not found</h1>
            </NavLayout>
        </>
    )
}
