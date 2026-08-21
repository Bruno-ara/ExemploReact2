import Aluno from "./components/Aluno"
import Dados from "./components/Dados"
const App = () => {
  return (
    <>
      {/* passando variaveis para concatenar */}
      <Aluno nome="Fiap" idade="30" />
      <Dados usuario="Dev" email="dev@email.com"/>
    </>
  )
}

export default App
