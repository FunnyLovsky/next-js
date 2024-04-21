import { RoutesName } from '@/app/providers/router'
import styles from './Footer.module.scss'
import Container from '@/shared/ui/Container'
import TWITTER from '@/shared/assets/icons/twitter.svg'
import FACEBOOK from '@/shared/assets/icons/facebook.svg'
import GITHUB from '@/shared/assets/icons/github.svg'
import VISA from '@/shared/assets/icons/visa.svg'
import MASTERCARD from '@/shared/assets/icons/mastercard.svg'
import PAYPAL from '@/shared/assets/icons/paypal.svg'
import APPLE_PAY from '@/shared/assets/icons/a_pay.svg'
import GOOGLE_PAY from '@/shared/assets/icons/g_pay.svg'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.cont}>
                    <div className={styles.main}>
                        <h1>GLAMIFY</h1>
                        <p>
                            У нас есть одежда, которая подходит вашему стилю и которой вы гордитесь.
                            От женской до мужской.
                        </p>
                        <div className={styles.social}>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                <TWITTER />
                            </a>
                            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                                <FACEBOOK width={16} height={16} />
                            </a>
                            <a href="https://github.com/" target="_blank" rel="noreferrer">
                                <GITHUB />
                            </a>
                        </div>
                    </div>
                    <div className={styles.inner}>
                        <h2>Компания</h2>
                        <Link href={RoutesName.MAIN}>О нас</Link>
                        <Link href={RoutesName.MAIN}>Особенности</Link>
                        <Link href={RoutesName.MAIN}>Каталог</Link>
                        <Link href={RoutesName.MAIN}>Карьера</Link>
                    </div>
                    <div className={styles.inner}>
                        <h2>Помощь</h2>
                        <Link href={RoutesName.MAIN}>Поддержка клиентов</Link>
                        <Link href={RoutesName.MAIN}>Детали доставки</Link>
                        <Link href={RoutesName.MAIN}>Условия использования</Link>
                        <Link href={RoutesName.MAIN}>Политика конфиденциальности</Link>
                    </div>
                    <div className={styles.inner}>
                        <h2>Вопросы</h2>
                        <Link href={RoutesName.MAIN}>Учетная запись</Link>
                        <Link href={RoutesName.MAIN}>Управление доставками</Link>
                        <Link href={RoutesName.MAIN}>Заказы</Link>
                        <Link href={RoutesName.MAIN}>Платежи</Link>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.reserved}>Glamify © 2000-2024, Все права защищены</div>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <VISA />
                        </div>
                        <div className={styles.card}>
                            <MASTERCARD />
                        </div>
                        <div className={styles.card}>
                            <PAYPAL />
                        </div>
                        <div className={styles.card}>
                            <APPLE_PAY />
                        </div>
                        <div className={styles.card}>
                            <GOOGLE_PAY />
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
