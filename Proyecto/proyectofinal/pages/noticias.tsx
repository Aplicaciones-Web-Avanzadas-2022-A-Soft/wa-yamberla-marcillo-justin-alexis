import Layout from "./components/layout";
import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Container,
    Typography
} from "@mui/material";
import React from "react";
import {ButtonBack, ButtonNext, CarouselProvider, DotGroup, Image, Slide, Slider} from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';
import CustomCardSlide from "./components/CustomCardSlide";

function Noticias() {
    return (
        <Layout titulo={'Noticias - Ministerio de Defensa del Ecuador'}>
            <Box sx={{padding: '0.5em 1.5em 0 1.5em'}}>
                <h1 style={{paddingBottom: '2px'}}>Noticias</h1>
                <h4>Más Destacadas</h4>
                <hr color="gray"/>
                <Box sx={{margin: '0 1em 0 1em', display: 'flex', justifyContent: 'space-around'}}>
                    <Card sx={{width: '42.5%', background: '#527D66'}}>
                        <CardActionArea
                            onClick={() => window.open('https://www.defensa.gob.ec/primera-fase-de-remediacion-en-zaruma-fue-entregada/')}>
                            <CardMedia
                                component="img"
                                height="400"
                                image="https://www.defensa.gob.ec/wp-content/uploads/2022/09/Primera-fase-de-remediacion-en-Zaruma-fue-entregada02.jpeg"
                                alt="Imagen de la noticia de remediación en Zaruma"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                        marginBottom: '0.70em',
                                        textAlign: 'center'
                                    }}
                                >
                                    Primera fase de remediación en Zaruma fue entregada
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{color: 'white', textAlign: 'justify', marginTop: '0.70em'}}
                                >
                                    El presidente de la República, Guillermo Lasso, junto al Ministro de Defensa
                                    Nacional,
                                    Grad. Luis Lara y varias autoridades, asistieron al acto de entrega de la primera
                                    fase
                                    de la regeneración urbana del socavón en Zaruma.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{width: '42.5%', background: '#527D66'}}>
                        <CardActionArea
                            onClick={() => window.open('https://www.defensa.gob.ec/instituto-de-seguridad-social-de-las-fuerzas-armadas-conmemoro-30-anos-de-vida-institucional/')}>
                            <CardMedia
                                component="img"
                                height="400"
                                image="https://www.defensa.gob.ec/wp-content/uploads/2022/08/Instituto-de-Seguridad-Social-de-las-Fuerzas-Armadas-conmemoro-30-anos-de-vida-institucional01.jpeg"
                                alt="Imagen de la noticia de conmemoración 30 años de vida institucional"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                        marginBottom: '0.70em',
                                        textAlign: 'center'
                                    }}
                                >
                                    Instituto de Seguridad Social de las Fuerzas Armadas conmemoró 30 años de vida
                                    institucional
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{color: 'white', textAlign: 'justify', marginTop: '0.70em'}}
                                >
                                    El pasado viernes 26 de agosto, en las instalaciones del Instituto Geográfico
                                    Militar “IGM” en Quito, se realizó la ceremonia conmemorativa por los 30 años
                                    de vida institucional del Instituto de Seguridad Social de las Fuerzas Armadas,
                                    ISSFA.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>

            </Box>
            <Box sx={{padding: '1em 1.5em 1.5em 1.5em', alignItems: 'center'}}>
                <h4>Más Recientes</h4>
                <hr color="gray"/>
                <Container
                    sx={{
                    position: "relative",
                    margin: "auto",
                    padding: '0 1.5em 0 1.5em',
                    textAlign: 'center',
                }
                }>
                    <CarouselProvider
                        naturalSlideWidth={160}
                        naturalSlideHeight={120}
                        totalSlides={4}
                        visibleSlides={3}
                    >
                        <Slider>
                            <CustomCardSlide
                                index={0}
                                source={'noticias/noticia1.jpg'}
                                alt="Imagen de la noticia de conmemoración 30 años de vida institucional"
                                titulo={"Instituto de Seguridad Social de las Fuerzas Armadas conmemoró 30 años de vida"}
                                descripcion={''}
                                sizeTitle={'subtitle2'}
                                sizeBody={'body2'}
                                height={200}
                                direc='https://www.defensa.gob.ec/instituto-de-seguridad-social-de-las-fuerzas-armadas-conmemoro-30-anos-de-vida-institucional/'
                            />
                            <CustomCardSlide
                                index={1}
                                source={'noticias/noticia2.jpeg'}
                                alt="Imagen de la noticia de fortalecimiento de la paz y la seguridad ciudadana"
                                titulo={"El fortalecimiento de la paz y la seguridad ciudadana son prioridades"}
                                descripcion={''}
                                sizeTitle={'subtitle2'}
                                sizeBody={'body2'}
                                height={200}
                                direc={'https://www.defensa.gob.ec/el-fortalecimiento-de-la-paz-y-la-seguridad-ciudadana-son-prioridades-para-el-ministerio-de-defensa-nacional/'}
                            />
                            <CustomCardSlide
                                index={2}
                                source={'noticias/noticia3.jpeg'}
                                alt="Imagen de la noticia de Ceremonia de posesión del nuevo Mando Militar"
                                titulo={"Ceremonia de posesión del nuevo Mando Militar\n"}
                                descripcion={""}
                                sizeTitle={'subtitle2'}
                                sizeBody={'body2'}
                                height={200}
                                direc={'https://www.defensa.gob.ec/ceremonia-de-posesion-del-nuevo-mando-militar/'}
                            />
                            <CustomCardSlide
                                index={3}
                                source={'noticias/noticia4.png'}
                                alt="Imagen de la noticia de sentencia de 03 de junio de 2021"
                                titulo={"Sentencia de 03 de junio de 2021 relativa al caso Grijalva Bueno Vs. Ecuador \n"}
                                descripcion={""}
                                sizeTitle={'subtitle2'}
                                sizeBody={'body2'}
                                height={200}
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

export default Noticias;