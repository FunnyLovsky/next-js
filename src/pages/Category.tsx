import Link from 'next/link'
import { useRouter } from 'next/router'

const routesName = {
    ['/shop']: 'Shops',
}

const Category = ({ data }: { data: any[] }) => {
    const router = useRouter()
    const category = router.query.category

    return (
        <>
            <h1>
                {routesName[router.pathname]} Page {category && category}
            </h1>
            <ul>
                {data.map((item) => (
                    <Link href={`shop/${item.id}`}>
                        <li key={item.id}>{item.name}</li>
                    </Link>
                ))}
            </ul>
        </>
    )
}

export default Category
