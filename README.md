# ComparaAi

Projeto front-end simples para comparar dois valores numéricos. A regra principal foi preservada da versão antiga: o sistema valida se o número B é maior que o número A.

## Objetivo

Este projeto nasceu como um exercício básico de HTML, CSS e JavaScript. A nova versão mantém a mesma lógica, mas melhora a organização visual, os textos, a responsividade e a experiência de uso.

## Tecnologias

- HTML5 para estrutura semântica da página.
- CSS3 para layout responsivo, variáveis de tema e estados visuais.
- JavaScript puro para validação, comparação dos valores e alternância de tema.
- LocalStorage para manter a preferência entre modo claro e modo escuro.
- SVG para o ícone exibido na aba do navegador.

## Versão antiga

A versão inicial tinha uma estrutura direta:

- Um formulário com dois campos numéricos.
- Um botão de validação.
- Uma mensagem de sucesso quando B era maior que A.
- Uma mensagem de erro quando B era menor ou igual a A.
- Estilização básica com margens fixas e pouca adaptação para telas menores.

Ela cumpria a proposta do exercício, mas ainda tinha pontos para evoluir: textos genéricos, problema de acentuação, pouca hierarquia visual, ausência de responsividade refinada e nenhum controle de tema.

## Versão nova

A nova versão transforma a ideia em uma pequena ferramenta chamada **ComparaAi**.

Melhorias aplicadas:

- Interface reorganizada em cabeçalho, apresentação, área de comparação, resultado e contexto do projeto.
- Textos reais explicando a finalidade da aplicação.
- Layout responsivo para desktop e mobile.
- Modo claro e modo escuro com preferência salva no navegador.
- Ícone próprio na aba do navegador, reforçando a identidade da ferramenta.
- Resultado mais detalhado, exibindo a fórmula, os valores informados e a diferença entre eles.
- Uso de CSS variables para facilitar manutenção de cores e temas.
- JavaScript mais organizado, com funções para tema, formatação e estados de resultado.
- Correções de idioma e acentuação nos textos exibidos.

## Como usar

1. Abra o arquivo `index.html` no navegador.
2. Informe o valor do número A.
3. Informe o valor do número B.
4. Clique em **Validar comparação**.

Se B for maior que A, a comparação será aprovada. Caso contrário, a página exibirá que B ainda não superou o valor base.

## Estrutura

```text
.
|-- index.html
|-- favicon.svg
|-- main.css
|-- main.js
`-- README.md
```

## Processo de melhoria

O processo seguiu a mesma ideia usada em outros projetos antigos: preservar a lógica original, entender o que a primeira versão queria resolver e reconstruir a apresentação com mais cuidado.

Primeiro, a estrutura HTML foi reescrita com tags semânticas e conteúdo real. Depois, o CSS recebeu uma base visual mais flexível, com variáveis, responsividade e suporte a tema. Em seguida, foi criado um favicon em SVG para dar identidade ao projeto na aba do navegador. Por fim, o JavaScript foi ajustado para trabalhar com números de forma mais clara, atualizar o estado da tela e salvar a preferência de tema.
