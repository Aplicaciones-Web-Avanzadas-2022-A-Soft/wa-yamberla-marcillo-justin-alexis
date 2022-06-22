import Layout from '../components/Layout';
import styled from '@emotion/styled'
import CriptoFormulario from "../components/cripto/CriptoFormulario";

const ImagenPrincipal = styled.img`
  width: 300px;
  height: 200px;
`

const Cripto = () =>(
    <Layout title={"Cripto | Next.js + TypeScript Example"}>
        <div>
                <h1>Cripto Calculator</h1>
                <ImagenPrincipal
                    className="rounded"
                    src={'https://besthqwallpapers.com/Uploads/24-3-2018/45509/thumb2-bitcoin-smartphone-sign-crypto-currency-gold-coins.jpg'}
                    alt={'Texto alternativo criptomoneda'}
                >
                </ImagenPrincipal>
        </div>
        <h2>Selección</h2>
            <p>Selecciona tu moneda</p>

        <CriptoFormulario></CriptoFormulario>

    </Layout>
)

export default Cripto;