import React, {ReactNode} from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({children, title = 'This is the default title'}: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <header>
            <nav>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/7217/7217754.png"
                    alt=" "
                    style={{width: '60px', height: '60px'}}>
                </img>

                <Link href="/">
                    <a>Inicio</a>
                </Link>{' '}
                |{' '}
                <Link href="/login">
                    <a>Login</a>
                </Link>{' '}
                |{' '}
                <Link href="/membresias">
                    <a>Membresias</a>
                </Link>{' '}
                |{' '}
                <Link href="/suplementos">
                    <a>Suplementos</a>
                </Link>{' '}
            </nav>
        </header>
        {children}
        <footer>
            <hr/>
            <span>I'm here to stay (Footer)</span>
        </footer>
    </div>
)

export default Layout
