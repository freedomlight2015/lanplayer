import Container from 'components/Container';
import styled from 'styled-components';

export default function InformationSection() {
  return (
    <Wrapper>
      <Container>
      <h3>Contact Info</h3>
      <p>
        <span><strong>Email:</strong></span> <a href="mailto:greenshield007@yandex.com">greenshield007@yandex.com</a>
      </p>
      <p>
        <span><strong>Github issues:</strong></span> <a href="https://github.com/freedomlight2015/lanplayer/issues" target="_blank">https://github.com/freedomlight2015/lanplayer/issues</a>
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
