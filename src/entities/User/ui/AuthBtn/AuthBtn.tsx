import { RoutesName } from '@/app/providers/router'
import styles from './AuthBtn.module.scss'
import Link from 'next/link'

const AuthBtn = () => {
    return (
        <Link href={RoutesName.AUTH} className={styles.login}>
            Войти
        </Link>
    )
}

export default AuthBtn
