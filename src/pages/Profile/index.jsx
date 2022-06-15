import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
export function Profile() {

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/jdeymisson.png" alt="Foto do Usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input type="text" placeholder="Nome" icon={FiUser} />
        <Input type="email" placeholder="E-mail" icon={FiMail}/>
        <Input type="password" placeholder="Senha atual" icon={FiLock}/>    
        <Input type="password" placeholder="Nova senha" icon={FiLock}/>     
        <Button title="Salvar" />   
      </Form>
    </Container>
  );
};