import Layout from '../components/Layout'
import styled from '@emotion/styled'
import CryptoFormulario from "../components/cripto/CriptoFormulario";
import {useEffect, useState} from "react";

const ImagenPrincipal = styled.img`
  width: 300px;
  height: 200px;
`


const Cripto = () => {
    const [monedas, setMonedas] = useState({} as any);
    const [resultado, setResultado] = useState({} as any);
    useEffect(
        ()=>{
            if(Object.keys(monedas).length > 0){
                // { valorMoneda:'USD' } 1 longitud llave
                // { } 0 longitud llave
                console.log(monedas);
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedas.valorCriptoMoneda}&tsyms=${monedas.valorMoneda}`
                const consultarCripto = async ()=>{
                    const respuesta = await fetch(url);
                    const resultado = await respuesta.json();
                    setResultado(resultado.DISPLAY[monedas.valorCriptoMoneda][monedas.valorMoneda])
                }
                consultarCripto();
            }

        },
        [monedas]
    )

    return (
        <Layout title="Cripto | Next.js + TypeScript Example">
            <div className="text-center">
                <h1>Cripto Exchange Calculator</h1>
                <ImagenPrincipal
                    className="rounded"
                    src={'https://besthqwallpapers.com/Uploads/24-3-2018/45509/thumb2-bitcoin-smartphone-sign-crypto-currency-gold-coins.jpg'}
                    alt={'Texto Alternativo Criptomoneda'}
                >
                </ImagenPrincipal>
            </div>
            <h2>Selección</h2>
            <p>Selecciona tu moneda y criptomoneda</p>
            <CryptoFormulario setMonedas={setMonedas}></CryptoFormulario>
            {
                resultado.PRICE &&
                <div>
                    <h1>Resultado</h1>
                    <div className="row">
                        <div className="col-sm-6">
                            <p><strong>Precio:</strong> {resultado.PRICE}</p>
                        </div>
                        <div className="col-sm-6">
                            <p><strong>Precio más alto del día:</strong> {resultado.HIGHDAY}</p>
                            <p><strong>Precio más bajo del día:</strong> {resultado.LOWDAY}</p>
                            <p><strong>Variación últimas 24 horas:</strong> {resultado.CHANGEPCT24HOUR}</p>
                            <p><strong>Última Actualización:</strong> {resultado.LASTUPDATE}</p>
                        </div>
                    </div>
                </div>
            }


        </Layout>
    )
}

export default Cripto;

