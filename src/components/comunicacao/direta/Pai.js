import React from 'react'
import Filho from './Filho'

export default props =>
    <div>
        <Filho {...props}><strong> Rafaela</strong></Filho>
        <Filho sobrenome={props.sobrenome}> Shirlei</Filho>
        <Filho sobrenome="Cunha"> Rafaela</Filho>
    </div>


/* Comunicacao direta a gente tem a passagem de parametros via propriedade
 ou seja o pai passa para o filho a propriedade

Em vez de ter amarrado dentro do componente pai voce quer receber o sobrenome dentro desse componente o componente pai,
então você passou aqui primeiro ao sobrenome lá no app.js vc criou um componente pai que tem um sobrenome por exemplo freitas
e quer passar a propriedade para os filhos como fazer?

dentro do pai eu posso pegar as propriedades que eu recebi nesse componente e passar para outro componente 
assim colocando props entre chaves e utilizando operador spreed que vai criar um novo objeto pegando todas
as propriedades que voce recebeu do pai passando pro filho 

Outra forma é pegar diretamente o valor que recebeu usando props.sobrenome e voce vai pegar especificamente o sobrenome
que recebeu a propriedade do pai passando pro filho 

 */