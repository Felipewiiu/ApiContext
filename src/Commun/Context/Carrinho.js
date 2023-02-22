import { createContext, useContext, useEffect, useState } from 'react'
import { usePagamentoContext } from './Pagamento';
import { UsuarioContext } from './Usuario';

export const CarrinhoContext = createContext()

CarrinhoContext.displayName = 'Carrinho';

export const CarrinhoProvider = ({children}) =>{
    const [carrinho, setCarrinho] = useState([])
    const [quantidadeProduto, setQuantidadeProduto] = useState(0)
    const [valorTotalCarrinho, setValortotalCarrinho] = useState(0)

    return (
        <CarrinhoContext.Provider 
        value={{carrinho, 
        setCarrinho,
        quantidadeProduto,
        setQuantidadeProduto,
        valorTotalCarrinho,
        setValortotalCarrinho
      }}
        >
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const {
      carrinho, 
      setCarrinho, 
      quantidadeProduto, 
      setQuantidadeProduto,
      valorTotalCarrinho,
      setValortotalCarrinho
      
    } = useContext(CarrinhoContext);

    const {formaPagamento} = usePagamentoContext()

    const {setSaldo} = useContext(UsuarioContext)

    function mudarQuantidades (id, quantidade){
        return carrinho.map(itemDoCarrinho => {
          if(itemDoCarrinho.id === id) itemDoCarrinho.quantidade += quantidade;
          return itemDoCarrinho
        })
      }

    const adicionarProduto = (novoProduto) =>{
        const temOProduto = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === novoProduto.id);
        
    
        if(!temOProduto){
          novoProduto.quantidade = 1;
          return setCarrinho( carrinhoAnterior => [...carrinhoAnterior, novoProduto]);
    
        }
        
        setCarrinho(mudarQuantidades(novoProduto.id, 1))
      }

      function removerProduto(id){
        const produto = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id);
        const ehOUltimo = produto.quantidade === 1;

        if(ehOUltimo){
          
          return setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(itemDoCarrinho => itemDoCarrinho.id !== id))
        }
        setCarrinho(mudarQuantidades(id, -1))
      }

      function efetuarCompra(){
        setCarrinho([]);
        setSaldo(saldoAtual => saldoAtual - valorTotalCarrinho)
      }

      useEffect(() =>{
        const {novaQuantidade, novoTotal} = carrinho.reduce((contador, produto) => ({
          novaQuantidade: contador.novaQuantidade + produto.quantidade,
          novoTotal: contador.novoTotal + (produto.valor * produto.quantidade)
        }), {
          novaQuantidade: 0,
          novoTotal: 0
        });
        setQuantidadeProduto(novaQuantidade)
        setValortotalCarrinho(novoTotal * formaPagamento.juros)

      }, [carrinho, setQuantidadeProduto, setValortotalCarrinho, formaPagamento])

    return {
        carrinho,
        setCarrinho,
        adicionarProduto,
        removerProduto,
        quantidadeProduto,
        setQuantidadeProduto,
        valorTotalCarrinho,
        efetuarCompra
    }
}



