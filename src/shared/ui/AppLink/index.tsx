import { IPropsChildren } from '@/shared/types/IComponents'
import { FC } from 'react'
import styles from './AppLink.module.scss'
import Link from 'next/link'

interface IProps extends IPropsChildren {
    href: string
    type: 'text' | 'button'
    onClick?: () => void
}

const AppLink: FC<IProps> = ({ href, children, type, onClick }) => {
    const standart = styles[type]
    const active = [styles[`active_${type}`], styles[type]].join(' ')

    return (
        <Link href={href} className={standart} onClick={onClick}>
            {children}
        </Link>
    )
}

export default AppLink
