import styles from './Product.module.scss'
import { IProduct } from '../../types/IProduct'
import { FC } from 'react'

import { RoutesName } from '@/app/providers/router'
import Info from '../Info/Info'
import Price from '../Price/Price'
import Image from '@/shared/ui/Image'
import Link from 'next/link'

interface IProps {
    data: IProduct
    catalog?: RoutesName | null | string
}

const Product: FC<IProps> = ({ data, catalog = null }) => {
    const path = catalog ? catalog : RoutesName.SHOP

    return (
        <Link href={`${path}/${data.url}`} className={styles.product}>
            <div className={styles.img}>
                <Image src={data.image} alt="" />
            </div>
            <Info data={data} type="small" />
            <Price data={data} type="small" />
        </Link>
    )
}

export default Product
