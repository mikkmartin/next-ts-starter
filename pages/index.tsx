import styled from '@emotion/styled'

export default function Home() {
  return (
    <Container>
      <h1>Hello world</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button>Some button</button>
    </Container>
  )
}

const Container = styled.div`
  font-size: 32px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
`
