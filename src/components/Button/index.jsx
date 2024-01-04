import { Container } from "./styles";

export function Button({ title, icon: Icon, ...rest }){
    return(
        <Container {...rest} type="button">
            {Icon && <Icon/>}
            {title}
        </Container>
    )
}