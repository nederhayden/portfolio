/* eslint-disable react/jsx-no-comment-textnodes */

// image
import picture from '../../assets/foto.png';

// styles
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';

function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Neder</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Neder,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Hayden</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Função: <span className="blue">Desenvolvedor Front-End,</span>
            </div>
            <div>
              Nível: <span className="blue">Júnior</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
