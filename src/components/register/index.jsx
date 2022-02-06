import { useState } from "react";
import { Main, Title, Submit} from "./style";
import Button from "../Button";

const Register = () => {

    const [user, setUser] = useState("");

    //REQUISIÇÕES
    const get = async () => {
        await fetch("http://localhost:21262")
        .then(res => res.json())
	    .then(data => { alert(`Nomes cadastrados: ${data}`); })
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
        .then(res => res.json())
        .then(data => { alert(`Adição concluída: ${data}`); })
        .catch(error => { console.error("Error:", error); });
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
            if(data === "Usuário não existe!"){
                console.error("Erro: ", data)
            }else{
                alert(`Exclusão concluída: ${data}`);
            }
             
        })
        .catch(erro => { if(erro){ console.error("Erro:", erro); }});
    }
    
    //FAZER AS REQUISIÇÕES DE ACORDO COM CADA BOTÃO
    function handleClick(e, type){
        e.preventDefault();
        if(type === 'get'){
            get();
        }else if(type === 'post'){
            post();
        }else{
            deletar();
        }
    }

    //COR DOS BOTÕES
    const cores = {
        verde: { backgroundColor: 'green'},
        azul: { backgroundColor: 'blue'},
        vermelho: {backgroundColor: 'red'}
    };

    const div = {
        margin: '0 auto',
        display: 'flex',
        width: '70%'
    }

    //RETORNO DO COMPONENTE
    return(
        <Main>
            <Title>
                Visualize, adicione ou exclua nomes.
            </Title>

            <Submit 
                onChange={(event) => setUser(event.target.value)}
            />
            
            <div style={div}>
                <Button 
                    style={cores.verde}
                    onClick={e => handleClick(e, 'get')}
                > 
                    GET 
                </Button>

                <Button 
                    style={cores.azul}
                    onClick={e => handleClick(e, 'post')}
                > 
                    POST
                </Button>

                <Button 
                    style={cores.vermelho}
                    onClick={e => handleClick(e, 'delete')}
                > 
                    DELETE
                </Button>
            </div>

        </Main>
    );
}

export default Register;