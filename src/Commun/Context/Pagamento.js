
import { createContext, useState, useContext } from "react";

export const PagamentoContext = createContext();
PagamentoContext.displayName = "Pagamento";

export const PagamentoProvider = ({ children }) => {
    const tiposDePagamento = [{
        nome: "Boleto",
        juros: 1,
        id: 1

    },
    {
        nome: "Cartão de crédito",
        juros: 1.3,
        id: 2,
    },
    {
        nome: "PIX",
        juros: 1,
        id: 3
    }, {
        nome: "Crediário",
        juros: 1.5,
        id: 4
    }
    ]

    const [formaPagamento, setformaPagamento] = useState(tiposDePagamento[0])

    return (
        <PagamentoContext.Provider value={{ tiposDePagamento, formaPagamento, setformaPagamento }}>

            {children}
        </PagamentoContext.Provider>
    )
}

export const usePagamentoContext = () => {
    const { tiposDePagamento, formaPagamento, setformaPagamento } = useContext(PagamentoContext)

    function mudarFormaDePagamento(id) {
        const pagamentoAtual = tiposDePagamento.find(pagamento => pagamento.id === id);

        setformaPagamento(pagamentoAtual)
    }

    return {
        tiposDePagamento,
        formaPagamento,
        mudarFormaDePagamento
    }
}

// const numeros = [1,2,4,5,6,7]
// numeros.find(elemento => elemento > 4)