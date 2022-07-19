import { useState, useEffect } from 'react';
import { Link } from '../components/link';
//import { userService } from 'services';
import React from 'react'
import { Autor } from 'src/interfaces/autor';
import {Button} from "@mui/material";

interface Props{
    autores: Autor[]
}

export default function index({ autores }: Props) {
    //return <> {autores.length === 0 ? <h1>No hay autores</h1> : <h1>Autores: </h1>}; </>
    //return <Button variant="contained">Hello World</Button>;
    return (
        <div>
            <h1>Users</h1>

            <table className="table table-striped">
                <thead>
                <tr>
                    <th style={{ width: '30%' }}>Name</th>
                    <th style={{ width: '30%' }}>Email</th>
                    <th style={{ width: '30%' }}>Role</th>
                    <th style={{ width: '10%' }}></th>
                </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    );
}

export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/autor');
    const autores = await res.json();
    console.log(autores)
    return {
        props: {
            autores: autores,
        },
    };
}
