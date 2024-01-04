import { Container } from "./styles";

export function ButtonWithText({ title, subtitle, icon: Icon, ...rest }){
    return(
        <Container {...rest} type="button">
            {Icon && <Icon/>}
            <p>{title}</p>
            <span>{subtitle}</span>
        </Container>
    )
}