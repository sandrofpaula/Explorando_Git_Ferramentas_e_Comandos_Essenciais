# Capítulo 6: Trabalhando com Branches: git branch, git checkout e git merge

# Capítulo 6: Trabalhando com Branches: git branch, git checkout e git merge

`git branch`
`git checkout`
`git merge`
## Introdução às Branches

No Git, branches (ramificações) permitem que você isole seu trabalho em diferentes linhas de desenvolvimento. Você pode criar, listar, alternar e mesclar branches para organizar seu fluxo de trabalho de maneira eficiente.

## git branch

`git branch`
O comando git branch é usado para listar, criar e excluir branches.

`git branch`
Listar Branches:
git branch
A branch atual será marcada com um asterisco (*).

```
git branch
```

`git branch`
A branch atual será marcada com um asterisco (*).

Criar uma Nova Branch:
git branch nome-da-branch

```
git branch nome-da-branch
```

`git branch nome-da-branch`
Excluir uma Branch:
git branch -d nome-da-branch

```
git branch -d nome-da-branch
```

`git branch -d nome-da-branch`
## git checkout

`git checkout`
O comando git checkout permite que você mude para outra branch ou restaure arquivos em seu estado anterior.

`git checkout`
Mudar para Outra Branch:
git checkout nome-da-branch

```
git checkout nome-da-branch
```

`git checkout nome-da-branch`
Criar e Mudar para uma Nova Branch:
git checkout -b nova-branch

```
git checkout -b nova-branch
```

`git checkout -b nova-branch`
## git merge

`git merge`
O comando git merge é usado para combinar mudanças de uma branch em outra. Este comando integra as alterações de uma branch de origem para a branch atual.

`git merge`
Mesclar uma Branch na Branch Atual:
git merge nome-da-branch

```
git merge nome-da-branch
```

`git merge nome-da-branch`
## Exemplo Prático

Vamos usar um exemplo prático para demonstrar esses comandos básicos de branches:

### Criar e Mudar para uma Nova Branch

Suponha que você esteja na branch main e deseja criar uma nova branch chamada feature-x:

`main`
`feature-x`
```
git checkout -b feature-x
```

`git checkout -b feature-x`
### Fazer Alterações na Nova Branch

Faça as alterações necessárias nos arquivos do projeto e confirme-as:

```
git add .
git commit -m "Adicionar nova funcionalidade X"
```

`git add .
git commit -m "Adicionar nova funcionalidade X"`
### Mudar de Volta para a Branch Principal

Após finalizar o trabalho na feature-x, mude de volta para a branch main:

`feature-x`
`main`
```
git checkout main
```

`git checkout main`
### Mesclar as Alterações da Branch feature-x

`feature-x`
Mescle as alterações da feature-x na main:

`feature-x`
`main`
```
git merge feature-x
```

`git merge feature-x`
### Excluir a Branch feature-x (Opcional)

`feature-x`
Se você não precisar mais da branch feature-x, pode excluí-la:

`feature-x`
```
git branch -d feature-x
```

`git branch -d feature-x`
## Conclusão

Trabalhar com branches no Git é uma maneira poderosa de gerenciar diferentes linhas de desenvolvimento e colaborar com outros desenvolvedores. Com os comandos git branch, git checkout e git merge, você pode criar, alternar e mesclar branches de maneira eficaz.

`git branch`
`git checkout`
`git merge`
No próximo capítulo, exploraremos como resolver conflitos de merge, que podem ocorrer durante o processo de mesclagem.
