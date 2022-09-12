import {useRouter} from "next/router";
import {Button} from "@mui/material";

function Footer() {
    const router = useRouter();
    return (
        <footer>
            {/*Logo */}
            <Button onClick={() => router.push('/')}>
                <img
                    src={''}
                    height={'130px'}
                    alt={''}
                    style={{
                        padding: '5px 5px 5px 12px',
                    }}
                />
            </Button>

            {/*Enlaces y direccion - Extremo Derecho*/}
            <div
                style={{
                    marginRight: '15px'
                }}
            >
                {/*Enlaces a redes sociales*/}
                <div style={{display: 'flex', justifyContent: 'space-between', margin: '5px 0 10px 0'}}>

                </div>
                {/*Parrafo*/}
                <p style={{lineHeight: '22px', color: "white", textAlign: 'right', marginBottom: '5px'}}>
                    Text<br/>
                    Text<br/>
                    Text
                </p>
            </div>
        </footer>
    )
}

export default Footer;