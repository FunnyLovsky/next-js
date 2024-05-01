import type { AppProps } from 'next/app'
import '../src/app/styles/index.scss'
import { NavLayout } from '@/widgets/NavLayout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import LoaderLine from '@/shared/ui/LoaderLine'

export default function App({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState<boolean>(false)

    const router = useRouter()

    useEffect(() => {
        router.events.on('routeChangeStart', () => {
            setLoading(true)
        })

        router.events.on('routeChangeComplete', () => {
            setLoading(false)
        })
    }, [])

    return (
        <NavLayout>
            {loading && <LoaderLine />}
            <Component {...pageProps} />
        </NavLayout>
    )
}
