//para criar esqueleto do arquivo usar comando 'rafce'



//outra maneira de passar dados é por meio de {nomeDaVariavel} e chamar no <p>
const Dados = ({ usuario, email }) => {
    return (
        <>
            <p>Nome do Usuário: {usuario}</p>
            <p>Email do Usuário: {email}</p>
        </>
    )
}

export default Dados
