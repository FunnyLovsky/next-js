import { NavLayout } from '@/widgets/NavLayout'
import { Head } from 'next/document'
import { useRouter } from 'next/router'

export default function ShopID() {
    const { query } = useRouter()

    return (
        <>
            <title>Glamify - {query.url}</title>

            <h2>Shop URL</h2>
            <p>{query.url}</p>
        </>
    )
}
