# Dicas de recursos utlilizados no projeto

# memo

# useHistory()

> Serve para fazer as mudanças de rotas dentro de uma aplicação react
> IMPORTANTE!! Ele foi substituido pelo `useNavigate()`

# CreateContext

> É o elemento que cria o contexto.
> Ele fornece uma maneira de passar dados pela árvore de componentes sem ter que passar props manualmente em todos os níveis..
> O Context foi projetado para compartilhar dados que podem ser considerados “globais” para uma árvore de componentes React, como o 
> usuário autenticado atual, tema ou idioma preferido.

> ### Exemplo:

```
import { createContext } from 'react'

export const UsuarioContext = createContext()

<UsuarioContext.Provider value={{nome, setNome, saldo, setSaldo}}>

    <Login/>
</UsuarioContext.Provider>

```

> A lógica é ter um contexto para prover e outro para consumir os valores.
> ` <UsuarioContext.Consumer>` o children precisa estar entro de uma arrow function

# useContex 

> É a forma de usar o contexto criado
> useContext é um React Hook que permite que você leia e escreva no contexto de seu componente.

# Sobre a função usuarioProvider na pasta Context

> Ela é uma função que armazena os estados de usuário de forma global contendo 
> dentro dela o `useState`. Essa função também retorna o `creatContext` do react
> onde está o `provider` com os valores de estados.
> Dentro de `UsuarioContext` é passado o children via prop.

### Exemplo:

```
import { createContext } from 'react'
import { useState } from 'react'

export const UsuarioContext = createContext()

export const UsuarioProvider =  ({children}) => {
    
    const [nome, setNome] = useState('')
    const [saldo, setSaldo] = useState(0)
    return(
        <UsuarioContext.Provider value={{nome, setNome, saldo, setSaldo}}>
                {children}
        </UsuarioContext.Provider>
    )
}
```

# UseEffect

O `useEffect` funciona como um ouvinte de um evento e ele recebe dois parâmetros, primeiro uma arrow function e outra um array vazio

# useMemo()


# parâmetro pré definido

Do inglês, default parameters. Isso é muito útil no React pois nem sempre temos os valores iniciais do jeito que esperamos, por exemplo:

- Podemos ter que usar o toFixed em um valor undefined como ocorreu no nosso código, para isso podemos usar o = 0 para, caso não haja valor, colocar o valor padrão como 0;

- Podemos usar um .map em uma variável undefined, e o = [] ajuda a não usar .map em undefined, isso também quebra o código;

- Estamos esperando um valor qualquer como parâmetro de uma função e precisamos colocar um valor padrão caso nenhum seja enviado.