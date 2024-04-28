import { MetaLayout } from '@/widgets/MetaLayout'
import { CategoryPage } from '@/pages/Category'

const Styles = () => {
    return (
        <MetaLayout
            title="Стильная одежда для всех вкусов - GLAMIFY"
            description="Найдите свой стиль с GLAMIFY. Огромный выбор модной одежды для мужчин и женщин. Обновите гардероб прямо сейчас!"
        >
            <CategoryPage />
        </MetaLayout>
    )
}

export default Styles
