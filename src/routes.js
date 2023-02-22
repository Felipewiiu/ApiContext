import { UsuarioProvider } from 'Commun/Context/Usuario'
import Carrinho from 'pages/Carrinho'
import Feira from 'pages/Feira'
import Login from 'pages/Login'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CarrinhoProvider } from 'Commun/Context/Carrinho'
import { PagamentoProvider } from 'Commun/Context/Pagamento'

export default function Router() {


    return (
        <BrowserRouter>
            <Switch>
                <UsuarioProvider>
                    <Route exact path='/'>
                        <Login />

                    </Route>
                    <CarrinhoProvider>
                    <PagamentoProvider>
                        <Route path='/feira'>
                            <Feira />
                        </Route>
                        <Route path='/carrinho'>
                            <Carrinho />
                        </Route>
                    </PagamentoProvider>

                    </CarrinhoProvider>
                </UsuarioProvider>
            </Switch>

        </BrowserRouter>
    )
}
