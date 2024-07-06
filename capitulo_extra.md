# Capítulo Extra: Git: Boas Práticas para Escrita das Mensagens de Commits

# Capítulo Extra: Git: Boas Práticas para Escrita das Mensagens de Commits

## Importância das Mensagens de Commits

Mensagens de commits bem escritas são essenciais para a manutenção de um histórico de projeto claro e útil. Elas ajudam os desenvolvedores a entender o contexto das mudanças, facilitam a revisão de código e melhoram a colaboração na equipe.

## Estrutura de uma Boa Mensagem de Commit

Uma mensagem de commit bem escrita geralmente segue uma estrutura padrão:

Resumo: Uma linha curta que descreve a mudança de forma concisa (50 caracteres ou menos).
Descrição: Uma explicação mais detalhada da mudança, incluindo o motivo e o contexto (opcional, mas recomendada).
### Exemplo de Estrutura

```
Resumo da mudança (imperativo, em 50 caracteres ou menos)

Descrição detalhada explicando o que foi alterado e por quê.
Inclua qualquer contexto adicional que possa ser útil para
os revisores ou futuros desenvolvedores.

```

`Resumo da mudança (imperativo, em 50 caracteres ou menos)

Descrição detalhada explicando o que foi alterado e por quê.
Inclua qualquer contexto adicional que possa ser útil para
os revisores ou futuros desenvolvedores.
`
## Melhores Práticas

Use o Modo Imperativo: Escreva o resumo da mensagem de commit como um comando, por exemplo, "Corrigir bug na função de login".
Mantenha o Resumo Curto: Limite o resumo a 50 caracteres ou menos. Se precisar de mais espaço, use a descrição detalhada.
Inclua Contexto: Adicione uma descrição detalhada para explicar o motivo da mudança e qualquer contexto relevante.
Referencie Problemas ou Tarefas: Inclua referências a issues, tickets ou tarefas relevantes, usando IDs ou links.
Escreva Mensagens Claras e Objetivas: Evite jargões, abreviações ou termos ambíguos. Seja claro e direto.
Use Linhas Curta na Descrição: Quebre linhas longas em parágrafos menores, limitando a largura a 72 caracteres para melhorar a legibilidade.
## Commits Semânticos

Mensagens de commit semânticas seguem uma convenção específica para descrever as alterações realizadas de uma maneira padronizada. Cada mensagem consiste em um cabeçalho obrigatório e um corpo e rodapé opcionais:

```
<tipo>[escopo opcional]: <descrição>
[corpo opcional]
[rodapé opcional]

```

`<tipo>[escopo opcional]: <descrição>
[corpo opcional]
[rodapé opcional]
`
Exemplos de tipos de commit:

feat: Adição de um novo recurso.
fix: Correção de um bug.
docs: Alterações na documentação.
style: Mudanças de formatação, semicolons, etc.
refactor: Refatoração do código sem mudanças de funcionalidade.
test: Adição ou alteração de testes.
chore: Atualizações de tarefas de build ou configurações administrativas.
### Exemplos de Mensagens de Commit Semânticos

```
feat(auth): adicionar autenticação via OAuth2
fix(database): corrigir erro na consulta de dados
docs(readme): atualizar instruções de instalação

```

`feat(auth): adicionar autenticação via OAuth2
fix(database): corrigir erro na consulta de dados
docs(readme): atualizar instruções de instalação
`
## Ferramentas para Ajudar na Escrita de Commits

Commitizen: Uma ferramenta que ajuda a escrever mensagens de commit seguindo convenções específicas.
Husky: Permite adicionar hooks ao Git, como validar mensagens de commit antes de permitir que elas sejam aplicadas.
Lint de Commit: Ferramentas como Commitlint podem ser usadas para garantir que todas as mensagens de commit sigam um padrão definido.
## Conclusão

Mensagens de commit bem escritas são uma parte essencial do fluxo de trabalho com Git. Elas melhoram a clareza do histórico de mudanças e facilitam a colaboração entre os desenvolvedores. Ao seguir essas boas práticas, você pode garantir que suas mensagens de commit sejam claras, concisas e úteis para toda a equipe.
