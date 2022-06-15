import { Link } from "react-router-dom";
import { Textarea } from "../../components/Textarea";
import { NotItem } from "../../components/NotItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Form } from "./styles";

export function New() {

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>

            <Link to="/">Voltar</Link>
          </header>

          <Input type="text" placeholder="Título" />
          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            <NotItem value="https://www.notion.so/" />
            <NotItem isNew placeholder="Novo link"/>
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NotItem value="react" />
              <NotItem isNew placeholder="Nova tag"/>
            </div>
          </Section>
          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  );
}