import { useState } from "react";
import { Container } from "./styles";
import { PiNote } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import { Input } from '../Input'


import logo from '../../assets/logo.svg'
import { Button } from "../Button";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
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
            <p> <PiNote /><span>0</span></p>
            <div className="hidden-on-small">
                <Input icon={RiSearchLine} placeholder="Busque por prato ou ingrediente" type="text" />
                <Button icon={PiNote} title="Pedidos" order="0" />
                <a href="#"><IoIosLogOut size={30} /></a>
            </div>
        </Container>
    );
}
