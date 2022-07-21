import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Link } from 'components';
import { userService, alertService } from 'services';

export { AddEdit };

function AddEdit(props) {
    const autor = props?.autor;
    const isAddMode = !autor;
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    
    // form validation rules 
    const validationSchema = Yup.object().shape({
        nombre: Yup.string()
            .required('Campo Nombre es obligatorio'),
        direccion: Yup.string()
            .required('Campo Dirección es obligatoria'),
        edad: Yup.number()
            .required('Campo Edad es obligatorio'),
        hijos: Yup.number()
            .required('Campo Hijos es obligatorio'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // set default form values if in edit mode
    if (!isAddMode) {
        const { ...defaultValues } = autor;
        formOptions.defaultValues = defaultValues;
    }

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        return isAddMode
            ? createUser(data)
            : updateUser(autor.id, data);
    }

    function createUser(data) {
        return userService.create(data)
            .then(() => {
                alertService.success('Autor creado', { keepAfterRouteChange: true });
                router.push('.');
            })
            .catch(alertService.error);
    }

    function updateUser(id, data) {
        return userService.update(id, data)
            .then(() => {
                alertService.success('Autor actualizado', { keepAfterRouteChange: true });
                router.push('..');
            })
            .catch(alertService.error);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>{isAddMode ? 'Agregar Autor' : 'Editar Autor'}</h1>
            <div className="form-row">
                <div className="form-group col-5">
                    <label> Nombre </label>
                    <input name="nombre" type="text" {...register('nombre')} className={`form-control ${errors.nombre ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.nombre?.message}</div>
                </div>
                <p></p>
                <div className="form-group col-5">
                    <label> Dirección </label>
                    <input name="direccion" type="text" {...register('direccion')} className={`form-control ${errors.direccion ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.direccion?.message}</div>
                </div>
                <p></p>
                <div className="form-group col-5">
                    <label> Edad </label>
                    <input name="edad" type="text" {...register('edad')} className={`form-control ${errors.edad ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.edad?.message}</div>
                </div>
                <p></p>
                <div className="form-group col-5">
                    <label> Hijos </label>
                    <input name="hijos" type="text" {...register('hijos')} className={`form-control ${errors.hijos ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.hijos?.message}</div>
                </div>
                <p></p>
            </div>

            <div className="form-group">
                <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary mr-2">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Guardar
                </button>
                <button onClick={() => reset(formOptions.defaultValues)} type="button" disabled={formState.isSubmitting} className="btn btn-secondary">Resetear</button>
                <Link href="/autores" className="btn btn-link">Cancelar</Link>
            </div>
        </form>
    );
}