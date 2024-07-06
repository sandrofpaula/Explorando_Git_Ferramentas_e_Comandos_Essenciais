# Capítulo 8: Revertendo Alterações: git reset, git revert e git checkout

# Capítulo 8: Revertendo Alterações: git reset, git revert e git checkout

`git reset`
`git revert`
`git checkout`
## Introdução aos Comandos de Reversão

Em algum momento, você pode precisar reverter alterações no seu repositório Git. Existem várias maneiras de fazer isso, dependendo do que você deseja alcançar. Os comandos git reset, git revert e git checkout são essenciais para gerenciar essas reversões.

`git reset`
`git revert`
`git checkout`
## git reset

`git reset`
O comando git reset é usado para desfazer commits ou alterações no índice (staging area).

`git reset`
Resetar o Índice e o Working Directory:
git reset --hard <commit>
Esta operação move a HEAD para o commit especificado e redefine o índice e o diretório de trabalho para corresponder a esse commit. Todas as alterações são perdidas.

```
git reset --hard <commit>
```

`git reset --hard <commit>`
Esta operação move a HEAD para o commit especificado e redefine o índice e o diretório de trabalho para corresponder a esse commit. Todas as alterações são perdidas.

Resetar Apenas o Índice:
git reset --soft <commit>
Move a HEAD para o commit especificado, mas mantém as alterações no índice e no diretório de trabalho.

```
git reset --soft <commit>
```

`git reset --soft <commit>`
Move a HEAD para o commit especificado, mas mantém as alterações no índice e no diretório de trabalho.

## git revert

`git revert`
O comando git revert cria um novo commit que desfaz as alterações de um commit específico. Este comando é útil para manter o histórico do repositório enquanto desfaz alterações indesejadas.

`git revert`
Reverter um Commit:
git revert <commit>

```
git revert <commit>
```

`git revert <commit>`
## git checkout

`git checkout`
O comando git checkout é usado para mudar de branch ou restaurar arquivos.

`git checkout`
Restaurar um Arquivo para um Estado Anterior:
git checkout <commit> -- <arquivo>

```
git checkout <commit> -- <arquivo>
```

`git checkout <commit> -- <arquivo>`
Mudar para Outra Branch:
git checkout <branch>

```
git checkout <branch>
```

`git checkout <branch>`
## Exemplos Práticos

### Usando git reset

`git reset`
1. Verificar o Histórico de Commits:
Use git log para ver os commits recentes:
git log
2. Resetar para um Commit Anterior:
Suponha que você deseja desfazer o commit mais recente:
git reset --hard HEAD~1
Verificar o Histórico de Commits:
Use git log para ver os commits recentes:
git log

Use git log para ver os commits recentes:

`git log`
```
git log
```

`git log`
Resetar para um Commit Anterior:
Suponha que você deseja desfazer o commit mais recente:
git reset --hard HEAD~1

Suponha que você deseja desfazer o commit mais recente:

```
git reset --hard HEAD~1
```

`git reset --hard HEAD~1`
### Usando git revert

`git revert`
1. Verificar o Histórico de Commits:
Use git log para identificar o commit que você deseja reverter.
2. Reverter um Commit Específico:
Suponha que você deseja reverter um commit com o hash abc123:
git revert abc123
Verificar o Histórico de Commits:
Use git log para identificar o commit que você deseja reverter.

Use git log para identificar o commit que você deseja reverter.

`git log`
Reverter um Commit Específico:
Suponha que você deseja reverter um commit com o hash abc123:
git revert abc123

Suponha que você deseja reverter um commit com o hash abc123:

`abc123`
```
git revert abc123
```

`git revert abc123`
### Usando git checkout

`git checkout`
1. Restaurar um Arquivo para um Estado Anterior:
Suponha que você deseja restaurar o arquivo index.html para o estado do commit abc123:
git checkout abc123 -- index.html
2. Mudar para Outra Branch:
Suponha que você deseja mudar para a branch feature-x:
git checkout feature-x
Restaurar um Arquivo para um Estado Anterior:
Suponha que você deseja restaurar o arquivo index.html para o estado do commit abc123:
git checkout abc123 -- index.html

Suponha que você deseja restaurar o arquivo index.html para o estado do commit abc123:

`index.html`
`abc123`
```
git checkout abc123 -- index.html
```

`git checkout abc123 -- index.html`
Mudar para Outra Branch:
Suponha que você deseja mudar para a branch feature-x:
git checkout feature-x

Suponha que você deseja mudar para a branch feature-x:

`feature-x`
```
git checkout feature-x
```

`git checkout feature-x`
## Conclusão

Os comandos git reset, git revert e git checkout oferecem flexibilidade para gerenciar e reverter alterações em um repositório Git. Cada comando tem seu propósito específico e pode ser usado para diferentes cenários de reversão.

`git reset`
`git revert`
`git checkout`
No próximo capítulo, exploraremos como trabalhar com repositórios remotos usando os comandos git remote, git fetch, git pull e git push.

`git remote`
`git fetch`
`git pull`
`git push`