import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
    <Layout title="About | Next.js + TypeScript Example">
        <h1>Membresías</h1>
        <p>Esta es la página de Membresías</p>
        <p>
            <Link href="/">
                <a>Regresar al inicio</a>
            </Link>
        </p>
    </Layout>
)

export default AboutPage