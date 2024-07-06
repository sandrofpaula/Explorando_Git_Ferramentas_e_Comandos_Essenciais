# Capítulo 11: Utilizando o Git Stash para Trabalho Temporário

# Capítulo 11: Utilizando o Git Stash para Trabalho Temporário

## Introdução ao Git Stash

O comando git stash é usado para salvar temporariamente as mudanças não commitadas em um repositório, permitindo que você trabalhe em outra tarefa sem perder seu progresso. Isso é útil quando você precisa mudar de branch rapidamente ou preparar seu repositório para um merge ou pull sem perder o trabalho em andamento.

`git stash`
## Comandos Básicos do Git Stash

Salvar as Mudanças no Stash:
git stash
Este comando salva todas as mudanças não commitadas no stash e limpa o diretório de trabalho.

```
git stash
```

`git stash`
Este comando salva todas as mudanças não commitadas no stash e limpa o diretório de trabalho.

Listar Stashes:
git stash list
Lista todos os stashes criados, mostrando um identificador único para cada um.

```
git stash list
```

`git stash list`
Lista todos os stashes criados, mostrando um identificador único para cada um.

Aplicar um Stash:
git stash apply
Aplica as mudanças do stash mais recente ao diretório de trabalho.

```
git stash apply
```

`git stash apply`
Aplica as mudanças do stash mais recente ao diretório de trabalho.

Aplicar um Stash Específico:
git stash apply stash@{n}
Aplica as mudanças de um stash específico, onde n é o índice do stash na lista.

```
git stash apply stash@{n}
```

`git stash apply stash@{n}`
Aplica as mudanças de um stash específico, onde n é o índice do stash na lista.

`n`
Remover um Stash:
git stash drop stash@{n}
Remove um stash específico da lista.

```
git stash drop stash@{n}
```

`git stash drop stash@{n}`
Remove um stash específico da lista.

Limpar Todos os Stashes:
git stash clear
Remove todos os stashes.

```
git stash clear
```

`git stash clear`
Remove todos os stashes.

## Exemplo Prático

### Salvando e Recuperando Mudanças com Git Stash

1. Fazer Alterações no Projeto:
Suponha que você tenha feito algumas mudanças no arquivo index.html.
2. Salvar as Mudanças no Stash:
Salve as mudanças não commitadas:
git stash
3. Verificar o Status do Repositório:
O diretório de trabalho deve estar limpo agora:
git status
4. Listar os Stashes:
Liste os stashes para ver o stash salvo:
git stash list
5. Aplicar as Mudanças do Stash:
Applique o stash mais recente:
git stash apply
6. Aplicar e Remover o Stash:
Applique o stash e remova-o da lista:
git stash pop
Fazer Alterações no Projeto:
Suponha que você tenha feito algumas mudanças no arquivo index.html.

Suponha que você tenha feito algumas mudanças no arquivo index.html.

`index.html`
Salvar as Mudanças no Stash:
Salve as mudanças não commitadas:
git stash

Salve as mudanças não commitadas:

```
git stash
```

`git stash`
Verificar o Status do Repositório:
O diretório de trabalho deve estar limpo agora:
git status

O diretório de trabalho deve estar limpo agora:

```
git status
```

`git status`
Listar os Stashes:
Liste os stashes para ver o stash salvo:
git stash list

Liste os stashes para ver o stash salvo:

```
git stash list
```

`git stash list`
Aplicar as Mudanças do Stash:
Applique o stash mais recente:
git stash apply

Applique o stash mais recente:

```
git stash apply
```

`git stash apply`
Aplicar e Remover o Stash:
Applique o stash e remova-o da lista:
git stash pop

Applique o stash e remova-o da lista:

```
git stash pop
```

`git stash pop`
## Usos Comuns do Git Stash

Mudança Rápida de Contexto:
Se você precisar mudar de branch para resolver um bug urgente, pode usar git stash para salvar seu trabalho em andamento, mudar de branch e, em seguida, retornar ao seu trabalho anterior aplicando o stash.

Se você precisar mudar de branch para resolver um bug urgente, pode usar git stash para salvar seu trabalho em andamento, mudar de branch e, em seguida, retornar ao seu trabalho anterior aplicando o stash.

`git stash`
Preparação para Pull/Merge:
Se você precisar atualizar sua branch com mudanças do repositório remoto, pode stashear suas mudanças locais, executar git pull ou git merge, e depois aplicar o stash para continuar seu trabalho.

Se você precisar atualizar sua branch com mudanças do repositório remoto, pode stashear suas mudanças locais, executar git pull ou git merge, e depois aplicar o stash para continuar seu trabalho.

`git pull`
`git merge`
Experimentos Temporários:
Se você deseja testar algo rapidamente sem comprometer seu trabalho atual, use git stash para salvar seu estado atual, realize seus experimentos e, depois, aplique o stash para voltar ao estado original.

Se você deseja testar algo rapidamente sem comprometer seu trabalho atual, use git stash para salvar seu estado atual, realize seus experimentos e, depois, aplique o stash para voltar ao estado original.

`git stash`
## Conclusão

O Git Stash é uma ferramenta poderosa para gerenciar mudanças temporárias e manter seu fluxo de trabalho flexível e organizado. Com ele, você pode facilmente alternar entre tarefas e garantir que seu progresso não seja perdido.

No próximo capítulo, exploraremos o Git Rebase e como usá-lo para refinar o histórico de commits.
