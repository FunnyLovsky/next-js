import { MetaLayout } from '@/widgets/MetaLayout'
import { CategoryPage } from '@/pages/Category'
import { SuspenseWrapper } from '@/app/providers/router'

const Styles = () => {
    return (
        <MetaLayout
            title="Стильная одежда для всех вкусов - GLAMIFY"
            description="Найдите свой стиль с GLAMIFY. Огромный выбор модной одежды для мужчин и женщин. Обновите гардероб прямо сейчас!"
        >
            <SuspenseWrapper>
                <CategoryPage />
            </SuspenseWrapper>
        </MetaLayout>
    )
}

export default Styles
