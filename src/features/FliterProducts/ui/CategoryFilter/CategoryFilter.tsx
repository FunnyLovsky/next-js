// import styles from './FilterProducts.module.scss'
// import { useLocation } from 'react-router-dom'
import { FC } from 'react'
import { Filters } from '../../types/Filters'
import Filter from '../Filter/Filter'
import Checkbox from '../Checkbox/Checkbox'
import { useRouter } from 'next/router'

interface IProps {
    filters: Filters
    onChange: (value: React.SetStateAction<Filters>) => void
}

const CategoryFliter: FC<IProps> = ({ filters, onChange }) => {
    const { query } = useRouter()
    const { category } = query

    const onChangeCategory = (category: 'T-shirts' | 'Shirts') => {
        if (category == filters.category) {
            onChange((prev) => ({ ...prev, category: '' }))
        } else {
            onChange((prev) => ({ ...prev, category }))
        }
        onChange((prev) => ({ ...prev, isApply: false }))
    }

    return (
        <>
            {!category && (
                <Filter title="Категории">
                    <Checkbox
                        title="Футблоки"
                        checked={filters.category == 'T-shirts'}
                        onChange={() => onChangeCategory('T-shirts')}
                    />
                    <Checkbox
                        title="Рубашки"
                        checked={filters.category == 'Shirts'}
                        onChange={() => onChangeCategory('Shirts')}
                    />
                </Filter>
            )}
        </>
    )
}

export default CategoryFliter
