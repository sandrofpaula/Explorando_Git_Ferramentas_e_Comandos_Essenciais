# Capítulo 13: Automatizando Tarefas com Hooks do Git

# Capítulo 13: Automatizando Tarefas com Hooks do Git

## Introdução aos Hooks do Git

Hooks do Git são scripts que são executados automaticamente em determinados eventos do ciclo de vida do Git. Eles permitem automatizar tarefas como validação de commits, testes de código, formatação de arquivos e muito mais. Os hooks são armazenados no diretório .git/hooks de cada repositório.

`.git/hooks`
## Tipos de Hooks

Existem dois tipos principais de hooks no Git: hooks do lado do cliente e hooks do lado do servidor.

Hooks do Lado do Cliente:
Executados em eventos como commit, merge e push. Exemplos incluem pre-commit, prepare-commit-msg e pre-push.

Executados em eventos como commit, merge e push. Exemplos incluem pre-commit, prepare-commit-msg e pre-push.

`pre-commit`
`prepare-commit-msg`
`pre-push`
Hooks do Lado do Servidor:
Executados em eventos como recepção de push em um repositório remoto. Exemplos incluem pre-receive e post-receive.

Executados em eventos como recepção de push em um repositório remoto. Exemplos incluem pre-receive e post-receive.

`pre-receive`
`post-receive`
## Configurando Hooks do Git

Para configurar um hook, basta criar um arquivo de script no diretório .git/hooks com o nome do hook desejado e torná-lo executável.

`.git/hooks`
### Exemplo de Hook pre-commit

`pre-commit`
```
#! /bin/sh
# Verifica se há arquivos não formatados
unformatted_files=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.js$')

if [ -n "$unformatted_files" ]; then
  echo "Arquivos não formatados detectados:"
  echo "$unformatted_files"
  exit 1
fi

exit 0

```

`#! /bin/sh
# Verifica se há arquivos não formatados
unformatted_files=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.js$')

if [ -n "$unformatted_files" ]; then
  echo "Arquivos não formatados detectados:"
  echo "$unformatted_files"
  exit 1
fi

exit 0
`
Salve o script acima em .git/hooks/pre-commit e torne-o executável:

`.git/hooks/pre-commit`
```
chmod +x .git/hooks/pre-commit
```

`chmod +x .git/hooks/pre-commit`
## Usos Comuns dos Hooks

Validação de Commits:
Use hooks pre-commit ou commit-msg para validar mensagens de commit ou verificar a formatação do código.

Use hooks pre-commit ou commit-msg para validar mensagens de commit ou verificar a formatação do código.

`pre-commit`
`commit-msg`
Executar Testes Automatizados:
Use hooks pre-push para executar testes automatizados antes de enviar mudanças para o repositório remoto.

Use hooks pre-push para executar testes automatizados antes de enviar mudanças para o repositório remoto.

`pre-push`
Formatar Código:
Use hooks pre-commit para formatar automaticamente o código com ferramentas como Prettier ou ESLint.

Use hooks pre-commit para formatar automaticamente o código com ferramentas como Prettier ou ESLint.

`pre-commit`
Notificações e Deploys:
Use hooks post-receive no lado do servidor para enviar notificações ou iniciar processos de deploy após receber um push.

Use hooks post-receive no lado do servidor para enviar notificações ou iniciar processos de deploy após receber um push.

`post-receive`
## Exemplo Prático

### Criando um Hook commit-msg para Verificar Mensagens de Commit

`commit-msg`
1. Criar o Script do Hook:
Crie o arquivo .git/hooks/commit-msg com o seguinte conteúdo:
#! /bin/sh
# Verifica se a mensagem de commit é menor que 50 caracteres
commit_msg_file=$1
commit_msg=$(cat $commit_msg_file)

if [ ${#commit_msg} -gt 50 ]; then
  echo "A mensagem de commit deve ter menos de 50 caracteres."
  exit 1
fi

exit 0
2. Tornar o Hook Executável:
Torne o script executável:
chmod +x .git/hooks/commit-msg
3. Testar o Hook:
Tente fazer um commit com uma mensagem maior que 50 caracteres e verifique se o hook impede o commit:
git commit -m "Esta é uma mensagem de commit muito longa para passar pela verificação do hook."
Criar o Script do Hook:
Crie o arquivo .git/hooks/commit-msg com o seguinte conteúdo:
#! /bin/sh
# Verifica se a mensagem de commit é menor que 50 caracteres
commit_msg_file=$1
commit_msg=$(cat $commit_msg_file)

if [ ${#commit_msg} -gt 50 ]; then
  echo "A mensagem de commit deve ter menos de 50 caracteres."
  exit 1
fi

exit 0


Crie o arquivo .git/hooks/commit-msg com o seguinte conteúdo:

`.git/hooks/commit-msg`
```
#! /bin/sh
# Verifica se a mensagem de commit é menor que 50 caracteres
commit_msg_file=$1
commit_msg=$(cat $commit_msg_file)

if [ ${#commit_msg} -gt 50 ]; then
  echo "A mensagem de commit deve ter menos de 50 caracteres."
  exit 1
fi

exit 0

```

`#! /bin/sh
# Verifica se a mensagem de commit é menor que 50 caracteres
commit_msg_file=$1
commit_msg=$(cat $commit_msg_file)

if [ ${#commit_msg} -gt 50 ]; then
  echo "A mensagem de commit deve ter menos de 50 caracteres."
  exit 1
fi

exit 0
`
Tornar o Hook Executável:
Torne o script executável:
chmod +x .git/hooks/commit-msg

Torne o script executável:

```
chmod +x .git/hooks/commit-msg
```

`chmod +x .git/hooks/commit-msg`
Testar o Hook:
Tente fazer um commit com uma mensagem maior que 50 caracteres e verifique se o hook impede o commit:
git commit -m "Esta é uma mensagem de commit muito longa para passar pela verificação do hook."

Tente fazer um commit com uma mensagem maior que 50 caracteres e verifique se o hook impede o commit:

```
git commit -m "Esta é uma mensagem de commit muito longa para passar pela verificação do hook."
```

`git commit -m "Esta é uma mensagem de commit muito longa para passar pela verificação do hook."`
## Conclusão

Os hooks do Git são uma ferramenta poderosa para automatizar tarefas e garantir a qualidade do código em seu repositório. Com eles, você pode implementar verificações de código, executar testes automatizados e muito mais.

No próximo capítulo, exploraremos o Git e a colaboração, focando em pull requests e revisão de código.
