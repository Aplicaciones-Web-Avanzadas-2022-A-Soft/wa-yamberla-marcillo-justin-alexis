import Layout from "./components/layout";
import {Box, Button, ButtonGroup, Container, Typography} from "@mui/material";
import React from 'react';
import {
    CarouselProvider,
    Slider,
    ButtonBack,
    ButtonNext,
    DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import CustomCardSlide from "./components/CustomCardSlide";
import {Helmet} from "react-helmet";

function Home() {
    return (
        <Layout titulo={'Página Oficial - Ministerio de Defensa del Ecuador'}>
            <Box sx={{padding: '0.5em 1.5em 0 1.5em'}}>
                <h1 style={{paddingBottom: '2px'}}>Servicios</h1>
                <Box sx={{background: '#527D66', display: 'flex', justifyContent: 'space-around'}}>
                    <Button
                        sx={{flexDirection: "column",}}
                        onClick={() => window.open('https://www.defensa.gob.ec/transparencia/')}
                    >
                        <img
                            src={'iconos/transparencia.svg'}
                            alt={'Ícono de Servicio de transparencia'}
                            height={'75'}
                        />
                        <Typography sx={{color: 'white'}}>Transparencia</Typography>
                    </Button>

                    <Button
                        sx={{flexDirection: "column",}}
                        onClick={() => window.open('/certificados')}
                    >
                        <img
                            src={'iconos/certificados.svg'}
                            alt={'Ícono de Servicio de certificados en línea'}
                            height={'75'}
                        />
                        <Typography sx={{color: 'white'}}>Certificados en línea</Typography>
                    </Button>

                    <Button
                        sx={{flexDirection: "column",}}
                        onClick={() => window.open('https://registro.midena.gob.ec/ContactoCiudadano/?ruta=ContactoCiudadano')}
                    >
                        <img
                            src={'iconos/contacto.svg'}
                            alt={'Ícono de Servicio de contacto ciudadano'}
                            height={'75'}
                        />
                        <Typography sx={{color: 'white'}}>Contacto Ciudadano</Typography>
                    </Button>

                    <Button
                        sx={{flexDirection: "column",}}
                        onClick={() => window.open('/noticias')}
                    >
                        <img
                            src={'iconos/noticias.svg'}
                            alt={'Ícono de Servicio de Noticias'}
                            height={'75'}
                        />
                        <Typography sx={{color: 'white'}}>Noticias</Typography>
                    </Button>


                    <Button
                        sx={{flexDirection: "column",}}
                        onClick={() => window.open('https://mail.midena.gob.ec/zimbra/')}
                    >
                        <img
                            src={'iconos/correo.svg'}
                            alt={'Ícono de Servicio de correo zimbra'}
                            height={'75'}
                        />
                        <Typography sx={{color: 'white'}}>Correo Zimbra</Typography>
                    </Button>

                </Box>
            </Box>

            <Box sx={{padding: '1em 1.5em 1em 1.5em'}}>
                <Box>
                    <h1>Destacado</h1>
                </Box>

                <Container sx={{
                    position: "relative",
                    margin: "auto",
                    padding: '0 1.5em 0 1.5em',
                    textAlign: 'center'
                }
                }>
                    <CarouselProvider
                        naturalSlideWidth={160}
                        naturalSlideHeight={86}
                        totalSlides={4}
                    >
                        <Slider>
                            <CustomCardSlide
                                index={0}
                                source={'noticias/noticia1.jpg'}
                                alt="Imagen de la noticia de conmemoración 30 años de vida institucional"
                                titulo={"Instituto de Seguridad Social de las Fuerzas Armadas conmemoró 30 años de vida institucional"}
                                descripcion={''}
                                sizeTitle={'h5'}
                                sizeBody={'body2'}
                                height={500}
                                direc='https://www.defensa.gob.ec/instituto-de-seguridad-social-de-las-fuerzas-armadas-conmemoro-30-anos-de-vida-institucional/'
                            />
                            <CustomCardSlide
                                index={1}
                                source={'noticias/noticia2.jpeg'}
                                alt="Imagen de la noticia del fortalecimiento de la paz y la seguridad ciudadana"
                                titulo={"El fortalecimiento de la paz y la seguridad ciudadana son prioridades para el Ministerio de Defensa Nacional"}
                                descripcion={''}
                                sizeTitle={'h5'}
                                sizeBody={'body2'}
                                height={500}
                                direc={'https://www.defensa.gob.ec/el-fortalecimiento-de-la-paz-y-la-seguridad-ciudadana-son-prioridades-para-el-ministerio-de-defensa-nacional/'}
                            />
                            <CustomCardSlide
                                index={2}
                                source={'noticias/noticia3.jpeg'}
                                alt="Imagen de la noticia de Ceremonia de posesión del nuevo Mando Militar"
                                titulo={"Ceremonia de posesión del nuevo Mando Militar"}
                                descripcion={""}
                                sizeTitle={'h5'}
                                sizeBody={'body2'}
                                height={500}
                                direc={'https://www.defensa.gob.ec/ceremonia-de-posesion-del-nuevo-mando-militar/'}
                            />
                            <CustomCardSlide
                                index={3}
                                source={'noticias/noticia4.png'}
                                alt="Imagen de la noticia de sentencia de 03 de junio de 2021"
                                titulo={"Sentencia de 03 de junio de 2021 relativa al caso Grijalva Bueno Vs. Ecuador"}
                                descripcion={""}
                                sizeTitle={'h5'}
                                sizeBody={'body2'}
                                height={500}
                                direc={'https://www.defensa.gob.ec/wp-content/uploads/downloads/2021/09/sentencia_ddhh_grijalva_bueno_vs_ecuador_24_sep_2021.pdf'}
                            />
                        </Slider>
                        <ButtonBack style={{
                            position: 'absolute',
                            top: '50%',
                            left: '0',
                            transform: 'translateY(-50%)',
                            padding: "0",
                        }}>
                            <img src={'iconos/arrow_back.svg'}
                                 width="50"
                                 height="50"
                                 alt={"btnAtras"}
                            />
                        </ButtonBack>
                        <ButtonNext style={{
                            position: 'absolute',
                            top: '50%',
                            right: '0',
                            transform: 'translateY(-50%)',
                            padding: "0",
                        }}>
                            <img src={'iconos/arrow_forward.svg'}
                                 width="50"
                                 height="50"
                                 alt={"btnSiguiente"}
                            />
                        </ButtonNext>
                        <DotGroup/>
                    </CarouselProvider>
                </Container>

            </Box>

            <Box sx={{
                margin: '0 1.5em 1em 1.5em',
            }}>
                <ButtonGroup
                    variant="text" aria-label="outlined primary button group" fullWidth={true}
                    sx={{backgroundColor: '#f8f8f8', border: 'solid 1px #cecece'}}
                >
                    <Button
                        sx={{textTransform: 'none', color: 'black', fontWeight: 'bold'}}
                        onClick={() => window.open('https://www.trabajo.gob.ec/sistema-contacto-ciudadano-mantenimiento/')}
                    >
                        Contacto Ciudadano
                    </Button>
                    <Button
                        sx={{textTransform: 'none', color: 'black', fontWeight: 'bold'}}
                        onClick={() => window.open('https://www.gob.ec')}
                    >
                        Portal trámites ciudadanos
                    </Button>
                    <Button
                        sx={{textTransform: 'none', color: 'black', fontWeight: 'bold'}}
                        onClick={() => window.open('https://sni.gob.ec/inicio')}
                    >
                        Sistema Nacional de Información (SNI)
                    </Button>
                </ButtonGroup>
            </Box>
        </Layout>
    )
}

export default Home;
