import Layout from "./components/layout";
import {Box, Button, ButtonBase, ButtonGroup, Container, Typography} from "@mui/material";
import React from "react";

function Certificados() {
    return (
        <Layout titulo={'Certificados en línea - Ministerio de Defensa del Ecuador'}>
            <Box sx={{padding: '0.5em 1.5em 0 1.5em'}}>
                <h1 style={{paddingBottom: '2px'}}>Certificados en línea</h1>
                <Container sx={{display: 'flex', justifyContent: 'space-around'}}>
                    <Button
                        sx={{
                            border: 'solid 1px gray',
                            flexDirection: "column",
                            padding: '5px',
                            width: '350px',
                            textTransform: 'none'
                        }}
                        onClick={() => window.open('https://sidehu.midena.gob.ec/certificados/nofa.action')}
                    >
                        <img
                            src={'iconos/medalla.svg'}
                            alt={'Ícoono de Certificado de pertenencia a fuerzas armadas'}
                            height={'150'}
                        />
                        <Typography sx={{color: 'black'}}>Certificado de Pertenecia a Fuerzas Armadas</Typography>
                    </Button>
                    <Button
                        sx={{
                            border: 'solid 1px gray',
                            flexDirection: "column",
                            padding: '5px',
                            width: '350px',
                            textTransform: 'none'
                        }}
                        onClick={() => window.open('https://sidehu.midena.gob.ec/certificados/clts.action')}
                    >
                        <img
                            src={'iconos/liquidaciones.svg'}
                            alt={'Ícoono de Liquidaciones del tiempo de servicio'}
                            height={'150'}
                        />
                        <Typography sx={{color: 'black'}}>Liquidaciones del Tiempo de Servicio</Typography>
                    </Button>
                </Container>
            </Box>
            <Box sx={{padding: '2em 1.5em 2em 1.5em'}}>
                <h1 style={{paddingBottom: '1rem'}}>Para más información:</h1>
                <Container sx={{display: 'flex', justifyContent: 'space-around'}}>
                    <Button
                        sx={{
                            flexDirection: "column",
                            padding: '5px',
                            textTransform: 'none'
                        }}
                        onClick={() => window.open()}
                    >
                        <img
                            src={'iconos/pregunta.svg'}
                            alt={'Ícoono de Preguntas frecuentes'}
                            height={'100'}
                        />
                        <Typography sx={{color: 'black'}}>Preguntas frecuentes</Typography>
                    </Button>
                    <Button
                        sx={{
                            flexDirection: "column",
                            padding: '5px',
                            textTransform: 'none'
                        }}
                        onClick={() => window.open('https://www.defensa.gob.ec/wp-content/uploads/2018/12/manual_de_usuario.pdf')}
                    >
                        <img
                            src={'iconos/manual.svg'}
                            alt={'Ícoono del Manual de usuario'}
                            height={'100'}
                        />
                        <Typography sx={{color: 'black'}}>Manual de usuario</Typography>
                    </Button>
                </Container>
            </Box>
            <Box sx={{
                margin: '1em 1.5em 1em 1.5em',
            }}>
                <ButtonGroup
                    variant="text" aria-label="outlined primary button group" fullWidth={true}
                    sx={{backgroundColor:'#f8f8f8',border:'solid 1px #cecece'}}
                >
                    <Button
                        sx={{textTransform: 'none', color: 'black',fontWeight:'bold'}}
                        onClick={()=>window.open('https://www.trabajo.gob.ec/sistema-contacto-ciudadano-mantenimiento/')}
                    >
                        Contacto Ciudadano
                    </Button>
                    <Button
                        sx={{textTransform: 'none', color: 'black',fontWeight:'bold'}}
                        onClick={()=>window.open('https://www.gob.ec')}
                    >
                        Portal trámites ciudadanos
                    </Button>
                    <Button
                        sx={{textTransform: 'none', color: 'black',fontWeight:'bold'}}
                        onClick={()=>window.open('https://sni.gob.ec/inicio')}
                    >
                        Sistema Nacional de Información (SNI)
                    </Button>
                </ButtonGroup>
            </Box>
        </Layout>
    )
}

export default Certificados;