function OutraLista({ itens }) {
    return (
        <>
        <h3>Lista de coisas boas: </h3>
        {
            itens.map((item) =>
                <p>{item.name}</p>
            )
        }
        </>
    )
}

export default OutraLista