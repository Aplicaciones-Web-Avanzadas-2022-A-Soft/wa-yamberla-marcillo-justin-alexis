import { useState, useEffect } from 'react';

import { Link } from 'components';
import { userService } from 'services';

export default Index;

function Index() {
    const [autores, setAutores] = useState(null);

    useEffect(() => {
        userService.getAll().then(x => setAutores(x));
    }, []);

    function deleteUser(id) {
        setAutores(autores.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        userService.delete(id).then(() => {
            setAutores(autores => autores.filter(x => x.id !== id));
        });
    }


    return (
        <div>
            <h1>Autores</h1>
            <Link href="/autores/add" className="btn btn-sm btn-success mb-2">Agregar Autor</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '10%' }}>Id</th>
                        <th style={{ width: '20%' }}>Nombre</th>
                        <th style={{ width: '20%' }}>Dirección</th>
                        <th style={{ width: '10%' }}>Edad</th>
                        <th style={{ width: '10%' }}>Hijos</th>
                        <th style={{ width: '10%' }}></th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {autores && autores.map(autor =>
                        <tr key={autor.id}>
                            <td>{autor.id}</td>
                            <td>{autor.nombre}</td>
                            <td>{autor.direccion}</td>
                            <td>{autor.edad}</td>
                            <td>{autor.hijos}</td>
                            <td>
                                <Link as="" href="/libros" className="">Libros</Link>
                            </td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link href={`/autores/edit/${autor.id}`} className="btn btn-sm btn-primary mr-1">Editar</Link>
                                <button onClick={() => deleteUser(autor.id)} className="btn btn-sm btn-danger btn-delete-user" disabled={autor.isDeleting}>
                                    {autor.isDeleting
                                        ? <span className="spinner-border spinner-border-sm"></span>
                                        : <span>Borrar</span>
                                    }
                                </button>
                            </td>
                        </tr>
                    )}
                    {!autores &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="spinner-border spinner-border-lg align-center"></div>
                            </td>
                        </tr>
                    }
                    {autores && !autores.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No hay autores para mostrar</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}
