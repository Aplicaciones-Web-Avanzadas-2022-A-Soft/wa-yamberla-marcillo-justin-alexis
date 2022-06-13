import Layout from "../components/Layout";
import BienvenidaHome from "../components/home/BienvenidaHome";
import LoginHome from "../components/home/LoginHome";

const MiPerfilPage = () => {

    const arreglo = [1, 2, 3, 4, 5, 6, 7, 8];
    const listaNumeros = arreglo
        .filter((a) => a < 5)
        .map((a) => {
            return (
                <li>
                    {a}
                </li>
            )
        })

    /*function mostrarLogin(){
        return (
            <>
                <h1> Login </h1>
                <p>Campos Login</p>
            </>
        )
    }
    function mostrarMensajeBienvenida(){
        return (
            <>
                <h1> Bienvenido </h1>
                <p>Registrate por favor</p>
            </>
        )
    }*/

    const estaLogeado = true;

    const desplegarMensaje = () => {
        if (estaLogeado) {
            return LoginHome({
                color: 'black',
                backgroundColor: 'orange',
                propiedadesImagen: {
                    width: 400,
                    height: 200,
                     urlImagen: 'https://i.ytimg.com/vi/euXlgrP5QiE/maxresdefault.jpg'
                }
            })
        } else {
            return BienvenidaHome()
        }
    }

    return (
        <Layout>
            <p>Hello {'Justin'.toUpperCase()}</p>
            <ul>
                {listaNumeros}
            </ul>
            {/*<p> CONDICION ? VERDADERA : FALSA </p>*/}
            {/*<p>{estaLogeado ? 'Bienvenido' : 'Login'}</p>*/}
            {/*<p>{estaLogeado ? mostrarLogin(): mostrarMensajeBienvenida()}</p>*/}
            <p>{desplegarMensaje()}</p>

            <ul>
                {(arreglo.length > 0) &&
                    <>
                        <li>Hola amigos</li>
                    </>
                }
            </ul>

            <ul>
                {(arreglo.length > 10) &&
                    listaNumeros
                }
            </ul>

            <div>
                {estaLogeado?
                    <LoginHome propiedadesImagen={
                        {
                        width: 300,
                        height: 150,
                        urlImagen: 'https://i.ytimg.com/vi/euXlgrP5QiE/maxresdefault.jpg'
                        }
                    } color = {'green'} backgroundColor = {'black'}
                    ></LoginHome>:
                    <BienvenidaHome></BienvenidaHome>
                }
            </div>

        </Layout>
    )
}

export default MiPerfilPage