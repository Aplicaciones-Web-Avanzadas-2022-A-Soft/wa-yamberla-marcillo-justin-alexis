import Layout from "../components/Layout";
import {useState} from "react";
import {useForm, Controller } from "react-hook-form";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {toast} from "react-hot-toast";

type FormularioEjemplo = {
    nombre: string;
    estadoCivil: string;
}

export default function Formulario() {
    const [nombre, setNombre] = useState('Justin');
    // const [numuno, numdos] = [ 1,2]; // Importa el orden
    // const {a} = {a:1,b:2,c:3} as any; // importa el nombre del objeto

    const {control, register, handleSubmit, formState: {errors, isValid}} = useForm<FormularioEjemplo>(
        {
            defaultValues: {
                nombre: 'Justin',
                estadoCivil: '',
            },
            mode: 'onTouched'
        }
    )
    const controlarSubmit = (eventoSubmit) => {
        eventoSubmit.preventDefault();
        console.log('Submit', eventoSubmit);
        console.log('nombre', nombre);
    }
    const controlarSubmitRHF = (data) => {
        console.log('data', data);
        toast('Good job!', {icon: '🦍'});
        toast.success('Bien!')
        toast.success('Mal!')
    }
    return (
        <>
            <Layout title="Formulario">
                <h1>Formulario con react Hook Form</h1>
                <form onSubmit={handleSubmit(controlarSubmitRHF)}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text"
                               className="form-control"
                               placeholder="EJ: Adrian"
                               id="nombre"
                               {...register('nombre', {
                                   maxLength: {value: 20, message: 'Longitud maxima 20'},
                                   required: {value: true, message: 'Requerido'},
                                   minLength: {value: 5, message: 'Longitud minima 5'},
                                   validate: {
                                       soloNumeros: (valorActual) => {
                                           // Transformar a numero un string:
                                           // Number("1")
                                           // +"1"
                                           if (Number.isNaN(+valorActual)) {
                                               // Se puede devolver un false o un mensaje de error
                                               // return false; // Error
                                               return 'Ingrese solo numeros'; // Error
                                           } else {
                                               // Se devuelve un true
                                               return true; // Esta correcto
                                           }
                                       },
                                       // soloLetras: (valorActual) => {
                                       //     return 'Error de prueba';
                                       // },
                                   }
                               })}
                               aria-describedby="nombreHelp"/>
                        <div id="nombreHelp" className="form-text">
                            Ingresa tu nombre.
                        </div>
                        {errors.nombre &&
                            <div className="alert alert-warning" role="alert">
                                Tiene errores {errors.nombre.message}
                            </div>
                        }
                    </div>
                    <div className="mb-3">
                        <FormControl fullWidth>
                            <InputLabel id="estadoCivilLabelId">Estado Civil</InputLabel>
                            <Controller
                                control={control}
                                rules={{ required: {value: true, message: 'Estado civil requerido!'}}}
                                name="estadoCivil"
                                render={({ field: { onChange, value, onBlur,}}) => {
                                    return <Select
                                        labelId="estadoCivilLabelId"
                                        id="estadoCivilId"
                                        onBlur={onBlur}
                                        value={value}
                                        label="Estado Civil"
                                        onChange={onChange}
                                    >
                                        <MenuItem value={''}>Seleccione uno</MenuItem>
                                        <MenuItem value={'casado'}>Casado</MenuItem>
                                        <MenuItem value={'soltero'}>Soltero</MenuItem>
                                    </Select>
                                }}
                            />
                        </FormControl>
                    </div>
                    <button type="submit"
                            disabled={!isValid}
                            className="btn btn-primary">
                        Submit
                    </button>
                </form>
                <br/>
                <h1>Formulario con React</h1>
                <form onSubmit={controlarSubmit}>
                    {/*<form onSubmit={(e)=>controlarSubmit(e)}>*/}
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text"
                               className="form-control"
                               onChange={(e) => setNombre(e.target.value)}
                               placeholder="EJ: Justin"
                               value={nombre}
                               id="nombre"
                               aria-describedby="nombreHelp"/>
                        <div id="nombreHelp" className="form-text">
                            Ingresa tu nombre.
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Layout>
        </>
    )
}