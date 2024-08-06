import {Container, Form} from './styles'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import logo from '../../assets/logo.svg'

export function Logout(){
    return(
        <Container>
            <img src={logo} alt="Logo food explore" />
            <Form>
                <h1>Crie sua conta</h1>
               <Input
                    textLabel="Email"
                    forLabel="name"

                    type="text"
                    id="name"
                    placeholder="Exemplo: Maria da Silva"
               />
               <Input
                    textLabel="Seu nome "
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
                <Button title="Criar conta"/>
                <a href="#">Já tenho uma conta</a>
            </Form>

    
        </Container>
    )
}