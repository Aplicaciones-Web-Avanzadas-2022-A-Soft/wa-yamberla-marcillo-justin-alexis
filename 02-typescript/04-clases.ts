//04-clases.ts
class Persona{
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string = 'Humano';
    protected nombreYApellido = ''; //Duck Typing -> string
    constructor(nombreParametro: string, apellidoParametro: string) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = nombreParametro + '' + apellidoParametro;
    }
    private mostrarNombreYApellido(): string{
        return this.nombreYApellido;
    }
}

//Para ahorra lineas de codigo:
class Usuario extends Persona{
    constructor(
        nombreParametro: string, //parametros del constructor
        apellidoParametro: string, //parametros del constructor
        public cedula: string, //modificador de acceso -> propiedad de la clase
        public estadoCivil: string, //modificador de acceso -> propiedad de la clase
    ) {
        super(nombreParametro, apellidoParametro);
    }
}

const justin = new Usuario(
    'Justin',
    'Yamberla',
    '1004438956',
    'soltero'
);

justin.nombre;
justin.apellido;
justin.cedula;
justin.estadoCivil