import { Container, Form } from "./styles";
import { useState } from 'react'
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

import { Logo } from '../../components/Logo'
import { Input } from "../../components/Input";
import { ButtonWithText } from '../../components/ButtonWithText'

import { BsFillHexagonFill } from "react-icons/bs";

export function SignIn(){
    const { signIn } = useAuth();
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


  function handleSignIn() {
    signIn({ email, password });
  }
    return(
        <Container>
            <Logo title="food explorer" icon={BsFillHexagonFill} $isheader/>
            
            <Form>
                    <label>
                      Email:
                      <Input 
                      type="email" 
                      placeholder="exemplo@email.com" 
                      onChange={(e) => (setEmail(e.target.value))}
                      />
                    </label>                    
                
                    <label>
                      Senha:
                      <Input 
                      type="password" 
                      placeholder="No mínimo 6 caracteres" 
                      onChange={(e) => (setPassword(e.target.value))}
                      />
                    </label>
                    
                <ButtonWithText title="Entrar" onClick={handleSignIn}/>
                <Link to="/register">Criar uma conta</Link>
            </Form>

            
        </Container>
    )
}