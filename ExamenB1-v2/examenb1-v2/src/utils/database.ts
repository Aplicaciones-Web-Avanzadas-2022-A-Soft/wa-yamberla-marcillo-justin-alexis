import { Pool } from 'pg';

export let conexion: any;

if (!conexion){
    conexion = new Pool ({
        user: 'postgres',
        host: 'localhost',
        database: 'dbexamen_appweb',
        password: '12345',
        port: 5432
    });
}
