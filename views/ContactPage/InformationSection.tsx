import Container from 'components/Container';
import styled from 'styled-components';

export default function InformationSection() {
  return (
    <Wrapper>
      <Container>
      <h3>Contact Info</h3>
      <p>
        <span><strong>Email:</strong></span> greenshield007@yandex.com
      </p>
      <p>
        <span><strong>Github:</strong></span> 
      </p>
      <p>
        <span><strong>X:</strong></span> 
      </p>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-weight: normal;
    font-size: 1.6rem;
    color: rgba(var(--text), 0.7);
    margin-bottom: 1rem;
  }

  span {
    opacity: 1;
    color: rgba(var(--text), 1);
  }
`;
