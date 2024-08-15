import { Container } from "./styles";

export function Input({textLabel, forLabel,icon: Icon, ...rest}){
    return(
        <Container>
            <label for={forLabel}>{textLabel}</label>
            <div id="searchArea">
                {Icon && <Icon size={20}/>}
                <input {...rest}/>
            </div>
        </Container>
    )
}