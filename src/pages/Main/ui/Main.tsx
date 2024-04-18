import { useEffect } from 'react'
import { Intro } from '@/widgets/Intro'
import { ProductsList } from '@/features/ProductList'
import { RoutesName } from '@/app/providers/router'

const Main = () => {
    useEffect(() => {
        document.title = 'GLAMIFY - Модные тренды в мире одежды'
        window.scrollTo(0, 0)
    }, [])

    return (
        <main>
            <Intro />
            {/* <ProductsList title="Новинки" catalog={RoutesName.ARRIVALS} query="sortDate=-1" />
            <ProductsList title="Распродажа" catalog={RoutesName.SALES} query="sortSales=-1" /> */}
        </main>
    )
}

export default Main
