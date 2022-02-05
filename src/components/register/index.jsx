import { useState } from "react";
import { RegisterBG, Title, } from "./style";

const Register = () => {

    const [user, setUser] = useState("");

    //return alert(user.name);

    const get = async () => {
        const user = await fetch("http://localhost:21262")
        .then(res => res.json())
	    .then(data => { console.log("Sucesso:", data); })
        .catch(erro => { if(erro){ console.error("Erro:", erro); }});
    }
      
    const userData = { nome: user };
    
    const post = async () => {
        await fetch("http://localhost:21262/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
        .then(response => response.json())
        .then(data => {   
            console.log("Success:", data); })
        .catch(error => {
                console.error("Error:", error);
  	    });
    }

    const deletar = async () => {
        await fetch(`http://localhost:21262/${user}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(res => res.json())
	    .then(data => { 
            if(data == "Usuário não existe!"){
                console.error(data)
            }else{
                console.log("Sucesso", data);
            }
             
        })
        .catch(erro => { if(erro){ console.error("Erro:", erro); }});
    }
    
    function handleKeyPress(e){
        if(e.key === 'Enter'){
            //get();
            //post();
            deletar();
        }
    }

    return(
        <RegisterBG>
            <Title>
                Registro
            </Title>

            <input 
                placeholder="Registrar Pessoa"
                onChange={(event) => setUser(event.target.value)}
                onKeyPress={handleKeyPress}
            />

        </RegisterBG>
    );
}

export default Register;