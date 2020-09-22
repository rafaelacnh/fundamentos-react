import React, {useState} from "react";

export default (props) => {
    const [nome, setNome ]  = useState('Rafa')
    return (
        <>
        <h3>{nome}</h3>
        <input type="text" value={nome} 
            onChange={e => setNome(e.target.value)}/>
        </>
    )
}


/*controlled component

o valor desse componente sempre estarar ammarado ao estado do seu componente 
a comunicação é sempre em uma direção o estado da sua aplicação muda e a sua interface grafica 
vai refletir esse estado que alterou 

e não voce mexe na interface e altera o estado

como mudar esse componente? 
se voce tem um componente que não tem uma função ou seja voce não tem a função que vai ser responsabel 
por alterar o compoentne nesse caso voce proveu o valor e não proveu a funcao onchange 
ou voce troca pra read only ou voce coloca uma funçao onchange pra mudar o valor quando aconteceu um evento a partir do usuario

apontar a uma funcao que ira alterar o estado do componente nesse caso o nome porque um evento vai acontecer uma nova letra foi digitada 
e ele chamou o onchange aí o estado da aplicação sera alterado que é o nome, quando o nome alterado aí sim a UI sera atualizada 

evento --- um novo valor é recebido -- esse valor altera o estado e a interface é atualizada

o useState vai retornar pra voce um array de dois elementos o primeiro é o valor e o segundo uma função que altera o valor
*/

