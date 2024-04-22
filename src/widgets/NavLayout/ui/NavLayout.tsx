// import { useAppDispatch } from '@/app/providers/StoreProvider/lib/hooks'
// import { authUser } from '@/entities/User'
import { Header } from '@/widgets/Header'
import { FC, useEffect } from 'react'
import styles from './NavLayout.module.scss'
import { Footer } from '@/widgets/Footer'
import { IPropsChildren } from '@/shared/types/IComponents'
import Head from 'next/head'
// import { fetchProductsLS } from '@/entities/Cart'

interface IProps extends IPropsChildren {}

const NavLayout: FC<IProps> = ({ children }) => {
    console.log('navlayou')
    // const dispatch = useAppDispatch()

    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //         dispatch(authUser())
    //     } else {
    //         dispatch(fetchProductsLS())
    //     }
    // }, [dispatch])

    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    )
}

export default NavLayout
