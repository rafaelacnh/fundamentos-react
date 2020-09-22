import './App.css'
import React from 'react'
import ComFilhos from './components/basicos/ComFilhos' 
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/input'

export default props => (
    <div className="App">
        <Card titulo=" #09 - Inputs " color="#9c0f5f">
       <Input></Input>
        </Card>
        <Card titulo=" #08 - Comunicação Indireta " color="#000">
       <Super></Super>
        </Card>
        <Card titulo=" #07 - Comunicação Direta " color="#4298b5">
       <Pai sobrenome="Freitas"></Pai>
        </Card>
        <Card titulo=" #06 - Condicional Com If " color="#fa6900">
        <CondicionalComIf numero={11}></CondicionalComIf>
        </Card>
        <Card titulo=" #05 - Condicional "  color="#e94c6f">
        <Condicional numero={10}></Condicional>
        </Card>
        <Card titulo=" #04 - Repetição "  color="#008bba">
        <Repeticao></Repeticao>
        </Card>
        <Card titulo=" #03 - Componente com Filhos "  color="#d96459">
            <ComFilhos>
                <ul>
                    <li>Rafa</li>
                    <li>Vida</li>
                    <li>Puff</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo=" #02 - Componente com Parametro "  color="#ff85cb">
            <ComParametro titulo="Esse é o título"
                subtitulo="Esse é o subtítulo"></ComParametro>
        </Card>
        <Card titulo=" #01 - Primeiro Componente"  color="#92b06a">
            <Primeiro></Primeiro>
        </Card>
         
       </div>
);