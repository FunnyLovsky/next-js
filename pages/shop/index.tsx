import { MetaLayout } from '@/widgets/MetaLayout'
import { CategoryPage } from '@/pages/Category'
import { SuspenseWrapper } from '@/app/providers/router'

const Shop = () => {
    return (
        <MetaLayout
            title="Купить брендовую одежду онлайн - GLAMIFY"
            description="Огромный выбор брендовой одежды на GLAMIFY. Новые поступления, лучшие цены и быстрая доставка."
        >
            <SuspenseWrapper>
                <CategoryPage />
            </SuspenseWrapper>
        </MetaLayout>
    )
}

export default Shop
