import {useRouter} from "next/router";
import {Button} from "@mui/material";

function Header(){
    const router = useRouter();
    return(
        <header>
            <Button
                onClick={()=>router.push('/')}
            >
                <img
                    src={'logoMinisterio.png'}
                    height={'150px'}
                    alt={'Logo ministerio de defensa'}
                    style={{
                        padding:'5px 5px 5px 12px',
                    }}
                />
            </Button>
        </header>
    )
}
export default Header;