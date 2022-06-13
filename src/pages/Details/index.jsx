import { Container, Links, Content } from "./styles";

import { Tag } from "../../components/Tag";
import { Button } from '../../components/Button';
import { Header } from "../../components/Header";
import { Section } from '../../components/Section';
import { ButtonText } from "../../components/ButtonText";

export function Details() {

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere delectus quam suscipit repellendus, fugit aspernatur quibusdam doloremque cumque sint sed ullam, eaque, veniam deserunt. Dolorum, harum. Voluptates doloremque at incidunt.</p>
          <Section title= "Links úteis">
            <Links>
              <li><a href="http://https://www.rocketseat.com.br/" target="_blank">https://www.rocketseat.com.br/</a></li>
              <li><a href="http://https://www.rocketseat.com.br/" target="_blank">https://www.rocketseat.com.br/explorer</a></li>
            </Links>
          </Section>
          <Section title= "Marcadores">
            <Tag title="Express" />
            <Tag title="Nodejs" />
          </Section>
          <Button title="Voltar" />
      </Content>
      </main>
    </Container>
  );
};