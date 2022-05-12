import { useState } from 'react'

function Form () {
function cadastrarUsuario(e) {
    e.preventDefaut()
    console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`)
}

const [name, setName] = useState()
const [password, setPassword] = useState()


    return (
    <div>
        <h1>Meu cadastro:</h1>
        <form onSubmit={cadastrarUsuario}>
            <div> <p>
                <label htmlFor="name">Nome: </label>
                <input type="text" id="name" name="name" placeholder="Digite seu nome" onChange={(e)=> setName(e.target.value)}/>
            </p>
            </div>
            <p>
            <div>
                <label htmlFor="password">Senha: </label>
                <input type= "password" id="password" name="password" placeholder="Digite sua senha" onChange={(e)=> setPassword(e.target.value)} />
            </div>
            </p>
            <div>
                <input type="submit" value= "Cadastrar" />
            </div>
        </form>
    </div>

)
}

export default Form