import { CategoryPage } from '@/pages/Category'
import { MetaLayout } from '@/widgets/MetaLayout'

const Sales = () => {
    return (
        <MetaLayout
            title="Акции и скидки на брендовую одежду - GLAMIFY"
            description="Не пропустите выгодные предложения на брендовую одежду от GLAMIFY. Скидки, распродажи и специальные предложения ждут вас!"
        >
            <CategoryPage />
        </MetaLayout>
    )
}

export default Sales
