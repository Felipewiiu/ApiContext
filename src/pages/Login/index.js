import { Button } from '@material-ui/core';
import {
  Container,
  Titulo,
  InputContainer
} from './styles';
import {
  Input,
  InputLabel,
  InputAdornment
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { UsuarioContext } from 'Commun/Context/Usuario';
import { useContext } from 'react';

function Login() {

  const history = useHistory()
  const {nome, setNome, saldo, setSaldo} = useContext(UsuarioContext)


  return (
    <Container>
       <Titulo>
              Insira o seu nome
            </Titulo>
            <InputContainer>
              <InputLabel>
                Nome
              </InputLabel>
              <Input
                value={nome}
                type="text"
                onChange={e => setNome(e.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <InputLabel>
                Saldo
              </InputLabel>
              <Input
                type="number"
                value={saldo}
                onChange={e => setSaldo(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    R$
                  </InputAdornment>
                }
              />
            </InputContainer>
            <Button
              variant="contained"
              color="primary"
              disabled={nome.length < 4}
              onClick={event => history.push('/feira')}
            >
              Avançar
            </Button>

    </Container>
  )
};

export default Login;