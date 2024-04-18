import Link from 'next/link'
import React from 'react'

const Main = () => {
    return (
        <>
            <Link href={'/about'}>About</Link>
            <h1>Hellddo Next!</h1>

            <style jsx>
                {`
                    h1 {
                        color: red;
                    }
                `}
            </style>
        </>
    )
}

export default Main
