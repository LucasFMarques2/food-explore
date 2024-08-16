import { Container, Food, Datails, Order } from "./styes"
import { Navbar } from "../../Components/Navbar"
import { Tag } from "../../Components/Tag"
import { Button } from "../../Components/Button";
import { IoIosArrowBack } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa";
import { PiNote } from "react-icons/pi";

import prato from '../../assets/prato.svg'

export function FoodDatails() {
    const tags = ["comida", "cebola", "pão naaan", "pepino", "pepino", "pepino"]
    const preco = "25,00"

    return (
        <Container>
            <Navbar />
            <a href=""><IoIosArrowBack size={30} />Voltar</a>
            <Food>
                <img src={prato} alt="imagem do prato" />
                <Datails>
                    <h2>Salada Ravanello</h2>
                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
                    <div id="tags">
                        {tags.map((tag, index) => {
                            return (
                                <Tag
                                    key={index}
                                    title={tag}
                                />
                            )
                        })}
                    </div>
                </Datails>
                <Order>
                    <button className="buttonNumber"><FaMinus size={20} /></button>
                    <span>01</span>
                    <button className="buttonNumber"><FaPlus size={20}/></button>
                    <Button icon={PiNote} title={`Pedir • R$${preco}`}/>
                </Order>
            </Food>
        </Container>
    )
}