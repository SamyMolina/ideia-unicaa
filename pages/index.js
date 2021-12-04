import { useState } from 'react';

function Home() {
    return (
    <div>
        <h4>Home 4</h4>
        <Contador />
        <div>Testando</div>
    </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);
    function adicionarContador() {
        setContador(contador + 1);

    }
    return (
        <div>
            <di>{contador}</di>
            <button onClick={adicionarContador}>Adicionar</button>

        </div>
    )
}

export default Home