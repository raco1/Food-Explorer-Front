import { Container } from "./style";

export function Logo({ title, subtitle, icon: Icon, $isheader, ...rest }){
    return(
        <Container $isheader={$isheader} {...rest}>
            {Icon && <Icon/>}
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
        </Container>
    )
}