import { useState } from "react";
import { RegisterBG, Title, } from "./style";

const Register = () => {

    const [register, setRegister] = useState("");

    function handleKeyPress(e){
        if(e.key === 'Enter'){
            const post = async () => {
                const user = await fetch("url")
                .then(res => res.json())
                .catch(e => {if(e){ alert(`Erro ${e}`); }});
            }
        }
    }

    return(
        <RegisterBG>
            <Title>
                Registro
            </Title>

            <input 
                placeholder="Registrar Pessoa"
                onChange={(event) => setRegister(event.target.value)}
                onKeyPress={handleKeyPress}
            />

        </RegisterBG>
    );
}

export default Register;