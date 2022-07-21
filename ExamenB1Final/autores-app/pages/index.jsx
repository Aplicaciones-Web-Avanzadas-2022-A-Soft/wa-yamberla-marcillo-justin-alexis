import { Link } from 'components';

export default Home;

function Home() {
    return (
        <div>
            <h1>Examen 1 App Web Avanzadas</h1>
            <p>Examen de Primer Bimestre de Aplicaciones Web Avanzadas</p>
            <p><Link href="/autores"> Gestionar Autores </Link></p>
        </div>
    );
}
