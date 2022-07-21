import { useState, useEffect } from 'react';

import { Link } from 'components';
import {libroService} from "../../services/libro.service";
import {userService} from "../../services";

export default Index;

/*const libros = libroService.getAll()
const librosSoloAutor= libros.filter((elemento) =>{
    return elemento.id_autor =
});*/

function Index() {
    const [libros, setLibros] = useState(null);

    useEffect(() => {
        libroService.getAllByAutorId().then(x => setLibros(x));
    }, []);

    function deleteLibro(id) {
        setLibros(libros.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        libroService.delete(id).then(() => {
            setLibros(libros => libros.filter(x => x.id !== id));
        });
    }


    return (
        <div>
            <h1>Libros</h1>
            <Link href="/libros/add" className="btn btn-sm btn-success mb-2">Agregar Libro</Link>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th style={{ width: '10%' }}>Id</th>
                    <th style={{ width: '10%' }}>Id Autor</th>
                    <th style={{ width: '20%' }}>Título</th>
                    <th style={{ width: '30%' }}>Número de páginas</th>
                    <th style={{ width: '20%' }}>Género</th>
                    <th style={{ width: '30%' }}>Fecha de Publicación</th>
                    <th style={{ width: '10%' }}></th>
                </tr>
                </thead>
                <tbody>
                {
                    libros && libros.map(libro =>
                    <tr key={libro.id}>
                        <td>{libro.id}</td>
                        <td>{libro.id_autor}</td>
                        <td>{libro.titulo}</td>
                        <td>{libro.numeroPaginas}</td>
                        <td>{libro.genero}</td>
                        <td>{libro.fechaPublicacion}</td>
                        <td style={{ whiteSpace: 'nowrap' }}>
                            <Link href={`/libros/edit/${libro.id}`} className="btn btn-sm btn-primary mr-1">Editar</Link>
                            <button onClick={() => deleteLibro(libro.id)} className="btn btn-sm btn-danger btn-delete-user" disabled={libro.isDeleting}>
                                {libro.isDeleting
                                    ? <span className="spinner-border spinner-border-sm"></span>
                                    : <span>Borrar</span>
                                }
                            </button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}