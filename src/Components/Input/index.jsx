import { Container } from "./styles";

export function Input({textLabel, forLabel, ...rest}){
    return(
        <Container>
            <label for={forLabel}>{textLabel}</label>
            <input {...rest}/>
        </Container>
    )
}