import styled from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AppContainer>
        <ListaVagas />
      </AppContainer>
    </>
  )
}

export default App
