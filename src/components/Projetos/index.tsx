// next
import Link from 'next/link';

// components
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';

// styles
import { Container } from './styles';

function Projetos() {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos" />
      <section>
        <ProjetoItem title="Projeto 01" type="Website" slug="teste" img="" />
        <ProjetoItem title="Projeto 02" type="Website" slug="teste" img="" />
        <ProjetoItem title="Projeto 03" type="Website" slug="teste" img="" />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;
