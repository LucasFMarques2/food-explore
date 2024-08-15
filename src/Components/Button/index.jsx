import { Container } from "./styles";

export function Button({title, icon: Icon, order}){
    return(
        <Container>
            {Icon && <Icon size={20}/>}
            <h4>{title}</h4>
            {order && <span>({order})</span>}
        </Container>
    )
}