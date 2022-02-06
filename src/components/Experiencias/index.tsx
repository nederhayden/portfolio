import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';

import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="01 Ano" description="de experiência" />
      <section>
        <ExperienciaItem
          year="2022"
          title="Dev Front-End"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus error atque dolores quas laborum deserunt, dolorum quae libero facilis inventore, sunt corrupti. Quam nisi aspernatur excepturi. Nostrum delectus quia neque!"
        />
        <ExperienciaItem
          year="2021"
          title="Dev Front-End"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus error atque dolores quas laborum deserunt, dolorum quae libero facilis inventore, sunt corrupti. Quam nisi aspernatur excepturi. Nostrum delectus quia neque!"
        />
        <ExperienciaItem
          year="2020"
          title="Dev Front-End"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus error atque dolores quas laborum deserunt, dolorum quae libero facilis inventore, sunt corrupti. Quam nisi aspernatur excepturi. Nostrum delectus quia neque!"
        />
        <ExperienciaItem
          year="2019"
          title="Dev Front-End"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus error atque dolores quas laborum deserunt, dolorum quae libero facilis inventore, sunt corrupti. Quam nisi aspernatur excepturi. Nostrum delectus quia neque!"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
