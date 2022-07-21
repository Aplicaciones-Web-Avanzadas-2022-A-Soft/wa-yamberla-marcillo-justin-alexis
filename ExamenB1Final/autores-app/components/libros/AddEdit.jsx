import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Link } from 'components';
import { libroService } from 'services/libro.service';
import { alertService } from 'services/alert.service';

export { AddEdit };

function AddEdit(props) {
    const libro = props?.libro;
    const isAddMode = !libro;
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    
    // form validation rules 
    const validationSchema = Yup.object().shape({
        id_autor:Yup.number()
            .required('Campo Id Autor es obligatorio'),
        titulo: Yup.string()
            .required('Campo Titulo es obligatorio'),
        numeroPaginas: Yup.number()
            .required('Campo Numero de páginas es obligatorio'),
        genero: Yup.string()
            .required('Campo Genero es obligatorio'),
        fechaPublicacion: Yup.string()
            .required('Campo Fecha de publicación es obligatorio'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // set default form values if in edit mode
    if (!isAddMode) {
        const { ...defaultValues } = libro;
        formOptions.defaultValues = defaultValues;
    }

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        return isAddMode
            ? createLibro(data)
            : updateLibro(libro.id, data);
    }

    function createLibro(data) {
        return libroService.create(data)
            .then(() => {
                alertService.success('Libro creado', { keepAfterRouteChange: true });
                router.push('.');
            })
            .catch(alertService.error);
    }

    function updateLibro(id, data) {
        return libroService.update(id, data)
            .then(() => {
                alertService.success('Libro actualizado', { keepAfterRouteChange: true });
                router.push('..');
            })
            .catch(alertService.error);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>{isAddMode ? 'Agregar Libro' : 'Editar Libro'}</h1>
            <div className="form-row">
                <div className="form-group col-5">
                    <label> Id Autor </label>
                    <input name="id_autor" type="text" {...register('id_autor')} className={`form-control ${errors.id_autor ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.id_autor?.message}</div>
                </div>
                <p></p>
                <div className="form-group col-5">
                    <label> Titulo </label>
                    <input name="titulo" type="text" {...register('titulo')} className={`form-control ${errors.titulo ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.titulo?.message}</div>
                </div>
                <p></p>
                <div className="form-group col-5">
                    <label> Número de páginas </label>
                    <input name="numeroPaginas" type="text" {...register('numeroPaginas')} className={`form-control ${errors.numeroPaginas? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.numeroPaginas?.message}</div>
                </div>
                <p></p>
                <div className="form-group col-5">
                    <label> Género </label>
                    <input name="genero" type="text" {...register('genero')} className={`form-control ${errors.genero ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.genero?.message}</div>
                </div>
                <p></p>
                <div className="form-group col-5">
                    <label> Fecha de publicación </label>
                    <input name="fechaPublicacion" type="text" {...register('fechaPublicacion')} className={`form-control ${errors.fechaPublicacion ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.fechaPublicacion?.message}</div>
                </div>
                <p></p>
            </div>

            <div className="form-group">
                <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary mr-2">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Guardar
                </button>
                <button onClick={() => reset(formOptions.defaultValues)} type="button" disabled={formState.isSubmitting} className="btn btn-secondary">Resetear</button>
                <Link href="/libros" className="btn btn-link">Cancelar</Link>
            </div>
        </form>
    );
}