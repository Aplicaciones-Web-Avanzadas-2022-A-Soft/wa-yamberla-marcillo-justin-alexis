import Layout from '../components/Layout';
import styled from '@emotion/styled'
import CriptoFormulario from "../components/cripto/CriptoFormulario";

const ImagenPrincipal = styled.img`
  width: 300px;
  height: 200px;
`

const Cripto = () =>(
    <Layout title={"Cripto | Next.js + TypeScript Example"}>
        <ImagenPrincipal src={'https://besthqwallpapers.com/Uploads/24-3-2018/45509/thumb2-bitcoin-smartphone-sign-crypto-currency-gold-coins.jpg'}
                         alt={'Texto alternativo criptomoneda'}
        >
        </ImagenPrincipal>

        <h1>Hola desde cripto</h1>

        <CriptoFormulario></CriptoFormulario>

    </Layout>
)

export default Cripto;