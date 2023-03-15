## Pré-condições

> node instalado

## Plano de testes

> cenário 01 - verity home page testing
>
> CT-01 - Verificar se os títulos: Culture e Tech; e Nossas soluções_ estão visíveis na home page em português
>
> CT-02 - Verificar se os títulos: Culture and Tech; e Our solutions _ estão visíveis na home page em inglês

> cenário 02 - verity contact page testing
>
> CT-03 - Preencher formulário de contato com sucesso
>
> CT-04 - Tentar preencher formulário de contato sem preencher o campo nome
>
> CT-05 - Tentar preencher formulário de contato sem preencher o campo email
>
> CT-06 - Tentar preencher formulário de contato preenchendo o campo email com valor inválido
>
> CT-07 - Tentar preencher formulário de contato sem preencher o campo telefone
>
> CT-08 - Tentar preencher formulário de contato sem clicar em < aceitar receber mensagem >

## Relatório dos testes executados
> ✅ = teste passou
>
> ❌ = teste falhou

> cenário 01  
>
> CT-01 ❌ Motivo: A frase "Culture e Tech" não existe no site em português, no lugar delas está escrito "Design e Delivery", o mais próximo da frase solicitada pode ser encontrada em inglês da seguinte forma: "Culture and Tech"
>
> CT-02 ✅

> cenário 02 
>
> CT-03 ❌ Motivo: Ao final do teste, após clicar no botão de enviar, o sistema exibe um reCaptcha para validar o usuário. O teste manual passou.
>
> CT-04 ✅
>
> CT-05 ✅
>
> CT-06 ✅
>
> CT-07 ✅
>
> CT-08 ✅

## Como instalar as dependências

```
npm install
```

## Como executar o cypress cli

```
npx cypress open
```

## Como executar o cypress headless

```
npx cypress run
```
