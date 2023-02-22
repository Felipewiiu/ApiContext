import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useCarrinhoContext } from 'Commun/Context/Carrinho';
import { useHistory } from 'react-router-dom';

export default function NavBar() {
  const {quantidadeProduto} = useCarrinhoContext();
  const history = useHistory()

  return (
    <Nav>
      <Logo onClick={() => history.goBack()}/>
      <IconButton
        onClick={() => history.push('/carrinho')}
      >
        <Badge
          color="primary"
          badgeContent={quantidadeProduto}
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  )
}