import { useRouter } from 'next/router'

export default function () {
    const { query } = useRouter()

    return (
        <>
            <h2>Shop URL</h2>
            <p>{query.url}</p>
        </>
    )
}
