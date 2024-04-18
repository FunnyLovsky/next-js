import { useRouter } from 'next/router'

const routesName = {
    ['/shop']: 'Shops',
}

const Category = ({ data }: { data: any[] }) => {
    const router = useRouter()

    return (
        <>
            <h1>{routesName[router.pathname]} Page</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </>
    )
}

export default Category
