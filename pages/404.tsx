import NotFound from '@/shared/ui/NotFound'
import SEARCH from '@/shared/assets/icons/search.svg'

export default function Error() {
    return (
        <NotFound
            title="Произошла ошибка!"
            subtitle="Пожалуйста, проверьте правильность запроса или вернитесь к списку товаров"
            icon={SEARCH}
        />
    )
}
