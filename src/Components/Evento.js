import Button from "./Evento/Button"

function Evento() {
    function meuEvento() {
        console.log(`Foi ativado!`)
    }

    
    
    return (
        <div>
            <p>Clique aqui para disparar um evento: </p>
            <Button event={meuEvento()}text="Primeiro Evento!"/>            
        </div>
    )
}

export default Evento