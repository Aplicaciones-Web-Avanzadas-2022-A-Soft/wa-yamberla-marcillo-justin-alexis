import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    port: 5432,
    username: 'postgres',
    password: '12345',
    host: 'localhost',
    database: 'entidades',
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}']
};