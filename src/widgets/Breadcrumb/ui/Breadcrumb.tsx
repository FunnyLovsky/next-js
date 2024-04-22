import Container from '@/shared/ui/Container'
import styles from './Breadcrumb.module.scss'
// import { Link, useLocation } from 'react-router-dom'
import ARROW from '@/shared/assets/elements/arrow.svg'
import { mapPathName } from '../lib/mapPathName'
import { FC } from 'react'
import { IProductDetail } from '@/entities/Product'
import { getProductCategory } from '../lib/getProductCategory'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface IProps {
    product?: IProductDetail | null
}

const Breadcrumb: FC<IProps> = ({ product = null }) => {
    const { pathname, query } = useRouter()
    const paths = mapPathName(pathname, query)

    if (product) {
        paths.push(...getProductCategory(product!, pathname))
    }

    return (
        <Container>
            <div className={styles.breadcrumb}>
                {paths.map((path, index) => (
                    <div className={styles.link} key={path.to}>
                        {index !== paths.length - 1 ? (
                            <Link href={path.to}>{path.title}</Link>
                        ) : (
                            <p>{path.title}</p>
                        )}
                        <ARROW />
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Breadcrumb
