# Capítulo 5: Comandos Básicos: git add, git commit e git status

# Capítulo 5: Comandos Básicos: git add, git commit e git status

`git add`
`git commit`
`git status`
## Introdução aos Comandos Básicos

Os comandos git add, git commit e git status são fundamentais para o uso diário do Git. Esses comandos permitem que você adicione alterações ao índice, confirme essas alterações no repositório e verifique o status atual do seu projeto.

`git add`
`git commit`
`git status`
## git add

`git add`
O comando git add é usado para adicionar alterações ao índice (staging area). Este comando informa ao Git quais alterações você deseja incluir no próximo commit.

`git add`
Adicionar um Arquivo Específico:
git add arquivo.txt

```
git add arquivo.txt
```

`git add arquivo.txt`
Adicionar Todos os Arquivos Modificados:
git add .

```
git add .
```

`git add .`
## git commit

`git commit`
O comando git commit confirma as alterações adicionadas ao índice, criando um snapshot permanente no histórico do repositório.

`git commit`
Commit com Mensagem:
git commit -m "Sua mensagem de commit"

```
git commit -m "Sua mensagem de commit"
```

`git commit -m "Sua mensagem de commit"`
Commit com Mensagem Abrindo o Editor Padrão:
git commit

```
git commit
```

`git commit`
## git status

`git status`
O comando git status exibe o estado atual do repositório, mostrando quais arquivos foram modificados, quais estão preparados para commit e quais não estão sendo rastreados.

`git status`
Verificar o Status:
git status

```
git status
```

`git status`
## Exemplo Prático

Vamos usar um exemplo prático para demonstrar esses comandos básicos:

### Criar ou Modificar um Arquivo

Suponha que você tenha feito algumas mudanças no arquivo index.html:

`index.html`
```
<html>
<head>
  <title>Página de Exemplo</title>
</head>
<body>
  <h1>Olá, mundo!</h1>
</body>
</html>
```

`<html>
<head>
  <title>Página de Exemplo</title>
</head>
<body>
  <h1>Olá, mundo!</h1>
</body>
</html>`
### Verificar o Status

No Terminal, execute:

```
git status
```

`git status`
O Git deve mostrar que index.html é um arquivo não rastreado.

`index.html`
### Adicionar o Arquivo ao Índice

Adicione index.html ao índice:

`index.html`
```
git add index.html
```

`git add index.html`
### Verificar o Status Novamente

Execute git status novamente para verificar que index.html está agora no índice.

`git status`
`index.html`
### Fazer um Commit

Confirme as alterações com uma mensagem descritiva:

```
git commit -m "Adicionar arquivo index.html"
```

`git commit -m "Adicionar arquivo index.html"`
### Verificar o Histórico de Commits

Para ver o histórico de commits, execute:

```
git log
```

`git log`
## Conclusão

Dominar os comandos git add, git commit e git status é essencial para gerenciar seu fluxo de trabalho com Git. Estes comandos são a base para a maioria das operações no Git e entender seu uso correto é crucial para um gerenciamento eficaz de versões.

`git add`
`git commit`
`git status`
No próximo capítulo, exploraremos como trabalhar com branches usando os comandos git branch, git checkout e git merge.

`git branch`
`git checkout`
`git merge`