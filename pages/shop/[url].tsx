import { MetaLayout } from '@/widgets/MetaLayout'
import { NavLayout } from '@/widgets/NavLayout'
import { Head } from 'next/document'
import { useRouter } from 'next/router'

export default function ShopID() {
    const { query } = useRouter()

    return (
        <MetaLayout title={`Glamify - ${query.url}`}>
            <h2>Shop URL</h2>
            <p>{query.url}</p>
        </MetaLayout>
    )
}
