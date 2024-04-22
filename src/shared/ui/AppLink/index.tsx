import { IPropsChildren } from '@/shared/types/IComponents'
import { FC } from 'react'
import styles from './AppLink.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface IProps extends IPropsChildren {
    href: string
    type: 'text' | 'button'
    onClick?: () => void
}

const AppLink: FC<IProps> = ({ href, children, type, onClick }) => {
    const { pathname } = useRouter()
    const standart = styles[type]
    const active = [styles[`active_${type}`], styles[type]].join(' ')

    const style = pathname.startsWith(href) ? active : standart

    return (
        <Link href={href} className={style} onClick={onClick}>
            {children}
        </Link>
    )
}

export default AppLink
