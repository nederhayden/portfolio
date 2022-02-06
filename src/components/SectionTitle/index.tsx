/* eslint-disable react/require-default-props */
// react
import { ReactNode } from 'react';

// styles
import { Container } from './styles';

// interfaces
interface SectionTitleProps {
  title: string;
  description?: string | ReactNode;
}

function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <Container>
      <h1>#{title}</h1>
      {description && <h2>{description}</h2>}
    </Container>
  );
}

export default SectionTitle;
