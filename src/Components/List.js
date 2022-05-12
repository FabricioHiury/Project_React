import Item from "./Item"
function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca = 'Ferrari' ano_lancamento={2022}/>
                <Item marca = 'Lamborguini' ano_lancamento={2018}/>
                <Item marca = 'Porsche' ano_lancamento={2015}/>
                <Item marca = 'Land Rover' ano_lancamento={2010}/>                               
            </ul>
        </>
    )
}

export default List