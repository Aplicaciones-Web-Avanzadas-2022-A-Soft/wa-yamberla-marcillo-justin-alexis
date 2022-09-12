import Link from 'next/link'
import Layout from '../components/Layout'
import React from "react";

const AboutPage = () => (
    <Layout title="About | Next.js + TypeScript Example">
        <h1>Login</h1>
        <p>Esta es la página de Login</p>
        <p>
            <Link href="/">
                <a>Regresar al inicio</a>
            </Link>
        </p>

    </Layout>
)

export default AboutPage