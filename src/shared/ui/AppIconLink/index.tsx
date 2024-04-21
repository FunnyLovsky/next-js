import { FC } from 'react'
import styles from './AppIconLink.module.scss'
import Link from 'next/link'

interface IProps {
    href: string
    Icon: React.VFC<React.SVGProps<SVGElement>>
}

const AppIconLink: FC<IProps> = ({ href, Icon }) => {
    return (
        <Link
            href={href}
            // className={({ isActive }) =>
            //     isActive ? [styles.active, styles.link].join(' ') : styles.link
            // }
            className={styles.link}
        >
            <Icon />
        </Link>
    )
}

export default AppIconLink
