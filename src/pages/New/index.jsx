import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";

import { Container, Form } from "./styles";

export function New() {

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>

            <a href="#">Voltar</a>
          </header>

          <Input type="text" placeholder="Título" />
          <Textarea placeholder="Observações" />
        </Form>
      </main>
    </Container>
  );
}