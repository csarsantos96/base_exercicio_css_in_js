import styled from 'styled-components'

const Header = styled.header`
  background-color: rgb(26, 135, 243);
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #ddd;

  h1 {
    font-size: 2.5rem;
    color: #333;
  }
`

const Cabecalho = () => (
  <Header>
    <h1>EBAC Jobs</h1>
  </Header>
)

export default Cabecalho
