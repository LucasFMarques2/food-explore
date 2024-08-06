import {Container, Form} from './styles'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import logo from '../../assets/logo.svg'

export function Login(){
    return(
        <Container>
            <img src={logo} alt="Logo food explore" />
            <Form>
                <h1>Faça login</h1>
               <Input
                    textLabel="Email"
                    forLabel="email"

                    type="email"
                    id="email"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
               />
               <Input
                    textLabel="Senha"
                    forLabel="password"

                    type="password"
                    id="password"
                    placeholder="No mínimo 6 caracteres"
               />
                <Button title="Entrar"/>
                <a href="#">Criar uma conta</a>
            </Form>

    
        </Container>
    )
}