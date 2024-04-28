import NotFound from '@/shared/ui/NotFound'
import SEARCH from '@/shared/assets/icons/search.svg'
import Conatiner from '@/shared/ui/Container'
import { Breadcrumb } from '@/widgets/Breadcrumb'

export default function Error() {
    return (
        <Conatiner>
            <Breadcrumb />
            <NotFound
                title="Произошла ошибка!"
                subtitle="Пожалуйста, проверьте правильность запроса или вернитесь к списку товаров"
                icon={SEARCH}
            />
        </Conatiner>
    )
}
