import type { AppProps } from 'next/app'
import '../src/app/styles/index.scss'
import { NavLayout } from '@/widgets/NavLayout'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <NavLayout>
            <Component {...pageProps} />
        </NavLayout>
    )
}
