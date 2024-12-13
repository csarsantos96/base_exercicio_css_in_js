import styled from 'styled-components'

const Form = styled.form`
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`

const HeroTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  line-height: 1.5;
`

const Hero = () => (
  <Form>
    <Container>
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </Container>
  </Form>
)

export default Hero
