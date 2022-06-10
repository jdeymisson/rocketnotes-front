import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profiler, Logout } from "./styles";
export function Header() {

  return (
    <Container>
      <Profiler>
        <img src="https://github.com/jdeymisson.png" alt="Foto do usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>Johnny Deymisson</strong>
        </div>
      </Profiler>
      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
};