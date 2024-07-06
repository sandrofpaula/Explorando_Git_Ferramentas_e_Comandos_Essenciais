# Capítulo 4: Entendendo o Ciclo de Vida dos Arquivos no Git

# Capítulo 4: Entendendo o Ciclo de Vida dos Arquivos no Git

## O Ciclo de Vida dos Arquivos

No Git, os arquivos passam por diferentes estados no seu ciclo de vida. Compreender esses estados é fundamental para gerenciar suas alterações e saber como cada comando do Git afeta seus arquivos. Os principais estados dos arquivos no Git são:

Untracked (Não Rastreado): Arquivos que não estão sendo rastreados pelo Git. Eles são novos e ainda não foram adicionados ao índice.
Unmodified (Não Modificado): Arquivos que estão rastreados pelo Git e não sofreram alterações desde o último commit.
Modified (Modificado): Arquivos que foram alterados mas ainda não foram adicionados ao índice.
Staged (Preparado): Arquivos que foram modificados e adicionados ao índice, prontos para serem confirmados no próximo commit.
## Comandos Básicos do Ciclo de Vida

### git status

`git status`
O comando git status exibe o status dos arquivos no repositório, mostrando quais arquivos estão modificados, quais estão preparados para commit e quais não estão sendo rastreados.

```
git status
```

### git add

`git add`
O comando git add adiciona arquivos ao índice (stage), mudando seu estado para "staged". Você pode adicionar arquivos específicos ou todos os arquivos modificados.

`git add`
```
git add arquivo.txt
git add .
```

`git add arquivo.txt
git add .`
### git commit

`git commit`
O comando git commit confirma as mudanças preparadas no índice, criando um novo snapshot no histórico do repositório.

`git commit`
```
git commit -m "Sua mensagem de commit"
git commit
```

`git commit -m "Sua mensagem de commit"
git commit`
### git diff

`git diff`
O comando git diff mostra as diferenças entre o estado atual do repositório e o índice. Ele é útil para revisar alterações antes de preparar ou confirmar.

`git diff`
```
git diff
```

`git diff`
## Exemplos Práticos

### Adicionando e Confirmando Arquivos

1. Criar ou Modificar Arquivos: Crie ou modifique arquivos no diretório do projeto.
2. Verificar o Status: Use git status para ver o estado dos arquivos.
3. Adicionar Arquivos ao Índice: Adicione os arquivos modificados ao índice:
            git add .
4. Confirmar as Alterações: Confirme as mudanças preparadas:
            git commit -m "Adicionar ou modificar arquivos"
Criar ou Modificar Arquivos: Crie ou modifique arquivos no diretório do projeto.
Verificar o Status: Use git status para ver o estado dos arquivos.
`git status`
Adicionar Arquivos ao Índice: Adicione os arquivos modificados ao índice:
            git add .

```
git add .
```

`git add .`
Confirmar as Alterações: Confirme as mudanças preparadas:
            git commit -m "Adicionar ou modificar arquivos"

```
git commit -m "Adicionar ou modificar arquivos"
```

`git commit -m "Adicionar ou modificar arquivos"`
### Revisando Alterações

Antes de adicionar as mudanças ao índice, você pode revisar as alterações feitas nos arquivos:

1. Verificar Diferenças: Use git diff para ver as mudanças não preparadas:
            git diff
2. Verificar o Índice: Use git diff --staged para ver as mudanças preparadas:
            git diff --staged
Verificar Diferenças: Use git diff para ver as mudanças não preparadas:
            git diff

`git diff`
```
git diff
```

`git diff`
Verificar o Índice: Use git diff --staged para ver as mudanças preparadas:
            git diff --staged

`git diff --staged`
```
git diff --staged
```

`git diff --staged`
## Conclusão

Compreender o ciclo de vida dos arquivos no Git e os comandos associados é essencial para gerenciar eficazmente suas alterações. No próximo capítulo, exploraremos em detalhes os comandos básicos git add, git commit e git status.

`git add`
`git commit`
`git status`