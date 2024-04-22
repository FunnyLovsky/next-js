import { Breadcrumb } from '@/widgets/Breadcrumb'
import { CategoryPage } from '@/widgets/CategoryPage'
import { useEffect } from 'react'

const Category = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Breadcrumb />
            <CategoryPage />
        </>
    )
}

export default Category
