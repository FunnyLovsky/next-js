import { MetaLayout } from '@/widgets/MetaLayout'
import { CategoryPage } from '@/pages/Category'

const Shop = () => {
    return (
        <MetaLayout
            title="Купить брендовую одежду онлайн - GLAMIFY"
            description="Огромный выбор брендовой одежды на GLAMIFY. Новые поступления, лучшие цены и быстрая доставка."
        >
            <CategoryPage />
        </MetaLayout>
    )
}

export default Shop
