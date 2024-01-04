import { Container, Form } from "./styles";

import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate, Link } from "react-router-dom";

import { Logo } from '../../components/Logo'
import { Input } from "../../components/Input";
import { ButtonWithText } from '../../components/ButtonWithText'

import { BsFillHexagonFill } from "react-icons/bs";

export function SignUp(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Cadastro realizado com sucesso!");
        navigate("/");
    }).catch(error => {
        if (error.response) {
          alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar.");
      }
    });
  }
    return(
        <Container>
            <Logo title="food explorer" icon={BsFillHexagonFill} $isheader/>
            <Form>
                <label htmlFor="name">
                    Nome:
                    <Input 
                    type="text" 
                    placeholder="Exemplo: Maria da Silva" 
                    id="name" 
                    onChange={e => setName(e.target.value)}
                    />
                </label>

                <label htmlFor="email">
                    Email:
                    <Input 
                    type="email" 
                    placeholder="Exemplo: exemplo@email.com" 
                    id="email" 
                    onChange={e => setEmail(e.target.value)}
                    />
                </label>

                <label htmlFor="password">
                    Senha:
                    <Input 
                    type="password" 
                    placeholder="No mínimo 6 caracteres" 
                    id="password" 
                    onChange={e => setPassword(e.target.value)}/>
                </label>

                <ButtonWithText title="Criar conta" onClick={handleSignUp}/>
                <Link to="/">Já tenho uma conta</Link>
            </Form>

            
        </Container>
    )
}