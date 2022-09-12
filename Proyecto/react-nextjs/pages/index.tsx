import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
    <Layout title="Home | Next.js + TypeScript Example">
        <h3>Nuestro nuevo gimnasio</h3>
        <h1>Bienvenido a nuestro nuevo sistema DevGym 👋</h1>
        <img
            src="https://library.kissclipart.com/20180901/saq/kissclipart-icon-personal-trainer-clipart-personal-trainer-phy-59b77b78679534e7.png"
            alt=""
            style={{width: '200px', height: '200px'}}>
        </img>
        <h3>Una nueva forma de elegir tus planes de entrenamiento y pagar tus membresías</h3>
        <p>
            <Link href="/about">
                <a>Contáctanos</a>
            </Link>
        </p>
    </Layout>
)

export default IndexPage
