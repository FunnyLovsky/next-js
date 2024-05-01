import { SuspenseWrapper } from '@/app/providers/router'
import { CategoryPage } from '@/pages/Category'
import { MetaLayout } from '@/widgets/MetaLayout'

const Arrivals = () => {
    return (
        <MetaLayout
            title="Новые поступления брендовой одежды - GLAMIFY"
            description="Будьте в тренде с новыми поступлениями брендовой одежды от GLAMIFY. Откройте для себя последние модные тренды!"
        >
            <SuspenseWrapper>
                <CategoryPage />
            </SuspenseWrapper>
        </MetaLayout>
    )
}

export default Arrivals
