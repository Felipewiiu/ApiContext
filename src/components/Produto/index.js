import { Container } from './styles';
import { memo } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useCarrinhoContext } from 'Commun/Context/Carrinho';

function Produto({nome,foto,id,valor,unidade}) {

  const {carrinho, adicionarProduto, removerProduto} = useCarrinhoContext()

  const produtoNoCarrinho = carrinho.find(itenDoCarrinho => itenDoCarrinho.id === id)

  return (
      <Container>
        <div>
          <img
            src={`/assets/${foto}.png`}
            alt={`foto de ${nome}`}
          />
          <p>
            {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
          </p>
        </div>
        <div>
          <IconButton
            color="secondary"
            onClick={() => removerProduto(id)}
            disabled={!produtoNoCarrinho}
          >
            <RemoveIcon />
          </IconButton>
              {produtoNoCarrinho?.quantidade || 0} {/* O Ponto de interrogação verifia a existência do produto */}
          <IconButton 
            color="primary"
            onClick={() => adicionarProduto({nome, foto, id, valor})}

          >;
            <AddIcon />
          </IconButton>
        </div>
      </Container>
  )
}

export default memo(Produto)