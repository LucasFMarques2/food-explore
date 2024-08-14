import { useState } from "react";
import { Container } from "./styles";
import logo from '../../assets/logo.svg'
import { PiNote } from "react-icons/pi";

export function Navbar() {
    // Usando useState para controlar o estado do menu
    const [isOpen, setIsOpen] = useState(false);

    // Função para alternar o estado do menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Container>
            <div 
                className={`menu-burguer ${isOpen ? 'open' : ''}`} 
                onClick={toggleMenu}
            >
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </div>
            <img src={logo} alt="" />
            <PiNote />
        </Container>
    );
}
