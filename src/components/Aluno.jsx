// para contatenar dados entre componentes usar props

const Aluno = (props) => {
    return (
        <>
        <p>O nome do aluno: {props.nome}</p>
        <p>A idade do aluno: {props.idade}</p>
        </>
    )
}

export default Aluno
