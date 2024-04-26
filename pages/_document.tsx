import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="ru">
            <Head>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
                />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            </Head>
            <body>
                <div id="modal" />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
