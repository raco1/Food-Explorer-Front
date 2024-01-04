import { Container } from "./styles";
import { Logo } from "../../components/Logo"
import { BsFillHexagonFill } from "react-icons/bs";

export function Footer(){
    return(
        <Container>
            <Logo subtitle="food explorer" icon={BsFillHexagonFill}/>
            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}