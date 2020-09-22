import React from 'react'

export default props => {
    function acao() {
        props.onClicar(Math.random(), 'Gerado');
    }

    return (
        <div>
            <button onClick={acao}>Alterar</button>
        </div>
    );
};
/*a partir de uma ação no filho voce quer gerar impacto no pai*/