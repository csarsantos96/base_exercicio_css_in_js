import styled from 'styled-components'

const VagaContainer = styled.div`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
  }
`

const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

const VagaDetalhe = styled.p`
  margin: 4px 0;
`

const VagaRequisitos = styled.ul`
  margin-top: 8px;
  padding-left: 20px;
`

const VagaRequisito = styled.li`
  margin: 4px 0;
`

const Vaga = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}: {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}) => (
  <VagaContainer>
    <VagaTitulo>{titulo}</VagaTitulo>
    <VagaDetalhe>Localização: {localizacao}</VagaDetalhe>
    <VagaDetalhe>Nível: {nivel}</VagaDetalhe>
    <VagaDetalhe>Modalidade: {modalidade}</VagaDetalhe>
    <VagaDetalhe>
      Salário: R$ {salarioMin} - R$ {salarioMax}
    </VagaDetalhe>
    <VagaRequisitos>
      {requisitos.map((requisito, index) => (
        <VagaRequisito key={index}>{requisito}</VagaRequisito>
      ))}
    </VagaRequisitos>
  </VagaContainer>
)

export default Vaga
