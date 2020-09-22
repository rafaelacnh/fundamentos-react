/* comunicação indireta filho para pai
super  como pai e sub como filho
*/

import React, {useState} from 'react';
import Sub from './Sub';

export default props => {

    //const [a,b ] = [1,2]//usando destructuring do lado direito um array e do lado esquerdo a criação de variavel onde a =1 e b=2
    const [texto,setTexto] = useState('Valor')//valor inicial 0 e como parametro num e setNum que é uma função responsável por alterar onumeros
    const [num ,setNum] = useState(0)//valor inicial 0 e como parametro num e setNum que é uma função responsável por alterar onumeros

    function quandoClicar(valorGerado, texto){
        setNum(valorGerado)
        setTexto(texto)
    }
    return (
        <div>
            <h4>{texto}:{num}</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    );
}

/* 
criando uma função passando essa ação para um componente filho 

tem como ter estado em um componente baseado em classe e tem como ter estado com algo que muda com o 
tempo dentro de um componente funcional a partir dos rooks e os rooks mais usados é exatamente state
podemos importar ele colocando entre o par de chaves useState

com useState consigo criar um dado na minha aplicação por exemplo que opde ser modificado já que as propriedades , que até então
estamos trabalhando só com propriedades que até então são read only não pode mudá-las mas pode ter um estado interno dentro do componente

*/
