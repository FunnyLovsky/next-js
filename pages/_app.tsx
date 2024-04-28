import type { AppProps } from 'next/app'
import '../src/app/styles/index.scss'
import { NavLayout } from '@/widgets/NavLayout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import LoaderPage from '@/shared/ui/LoaderPage'

export default function App({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState<boolean>(false)

    const router = useRouter()

    useEffect(() => {
        router.events.on('routeChangeStart', () => {
            document.body.style.overflow = 'hidden'
            setLoading(true)
        })

        router.events.on('routeChangeComplete', () => {
            document.body.style.overflow = 'auto'
            setLoading(false)
        })
    }, [])

    return (
        <NavLayout>
            {loading && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        zIndex: 10000,
                        height: '100vh',
                        width: '100%',
                        display: 'flex',
                        background: 'rgba(255, 255, 255, 0.4)',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <LoaderPage />
                </div>
            )}
            <Component {...pageProps} />
        </NavLayout>
    )
}
