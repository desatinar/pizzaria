import React from "react"

import logo from '../../img/logo.png'
import pizza from '../../img/icone-pizza.png'
import cartao from '../../img/icone-cartao.png'
import entrega from '../../img/icone-entrega.png'
import {Topo, SegundoElemento, TextoH3, TerceiroElemento, Lista, ImagemNav } from "./styled.js"

const Header = () => {

    return (
        <Topo>
            
            <SegundoElemento>
                <TextoH3>Melhor Pizza da Cidade</TextoH3>
            </SegundoElemento>

            <TerceiroElemento>
                <Lista>
                    <li>
                        <ImagemNav src={pizza} alt="Icone Pizza" />
                    </li>
                    <li>
                        <ImagemNav src={cartao} alt="Icone Cartão" />
                    </li>
                    <li>
                        <ImagemNav src={entrega} alt="Icone Entrega" />
                    </li>
                </Lista>

            </TerceiroElemento>
        </Topo>
    )
}

export default Header