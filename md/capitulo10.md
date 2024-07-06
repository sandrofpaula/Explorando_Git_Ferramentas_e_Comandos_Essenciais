# Capítulo 10: Trabalhando com Tags e Releases

# Capítulo 10: Trabalhando com Tags e Releases

## Introdução às Tags

Tags são usadas no Git para marcar pontos específicos no histórico de commits. Elas são frequentemente usadas para marcar versões de releases, facilitando o rastreamento e a recuperação de versões específicas do projeto.

### Criando Tags

Existem dois tipos principais de tags no Git: tags anotadas e tags leves.

Tag Anotada:
git tag -a v1.0 -m "Versão 1.0"
As tags anotadas são armazenadas como objetos completos no banco de dados do Git. Elas podem incluir uma mensagem, o nome do autor, data e outras informações.

```
git tag -a v1.0 -m "Versão 1.0"
```

`git tag -a v1.0 -m "Versão 1.0"`
As tags anotadas são armazenadas como objetos completos no banco de dados do Git. Elas podem incluir uma mensagem, o nome do autor, data e outras informações.

Tag Leve:
git tag v1.0-lw
As tags leves são essencialmente um ponteiro para um commit específico, sem nenhuma metadata extra.

```
git tag v1.0-lw
```

`git tag v1.0-lw`
As tags leves são essencialmente um ponteiro para um commit específico, sem nenhuma metadata extra.

### Listando Tags

Para listar todas as tags no repositório, use:

```
git tag
```

`git tag`
### Visualizando Informações da Tag

Para visualizar informações detalhadas de uma tag anotada, use:

```
git show v1.0
```

`git show v1.0`
### Compartilhando Tags

Por padrão, as tags não são enviadas para o repositório remoto com o comando git push. Para enviar todas as tags, use:

`git push`
```
git push origin --tags
```

`git push origin --tags`
Para enviar uma tag específica, use:

```
git push origin v1.0
```

`git push origin v1.0`
## Trabalhando com Releases

Releases são versões publicadas do seu projeto, geralmente associadas a tags específicas. Ferramentas como GitHub, GitLab e Bitbucket oferecem suporte para criar releases baseadas em tags, permitindo a distribuição de binários e changelogs associados.

### Criando um Release no GitHub

1. Acesse a Página do Repositório:
Navegue até o repositório no GitHub.
2. Criar uma Nova Release:
Vá para a seção de releases e clique em "Draft a new release".
3. Preencher os Detalhes da Release:
Escolha uma tag existente ou crie uma nova.
Preencha o título e a descrição da release.
Opcionalmente, anexe binários ou outros arquivos.
4. Publicar a Release:
Clique em "Publish release" para tornar a release disponível.
Acesse a Página do Repositório:
Navegue até o repositório no GitHub.

Navegue até o repositório no GitHub.

Criar uma Nova Release:
Vá para a seção de releases e clique em "Draft a new release".

Vá para a seção de releases e clique em "Draft a new release".

Preencher os Detalhes da Release:
Escolha uma tag existente ou crie uma nova.
Preencha o título e a descrição da release.
Opcionalmente, anexe binários ou outros arquivos.

Escolha uma tag existente ou crie uma nova.

Preencha o título e a descrição da release.

Opcionalmente, anexe binários ou outros arquivos.

Publicar a Release:
Clique em "Publish release" para tornar a release disponível.

Clique em "Publish release" para tornar a release disponível.

## Exemplo Prático

### Criando e Compartilhando uma Tag

1. Criar uma Tag Anotada:
Suponha que você queira marcar a versão 1.0 do seu projeto:
git tag -a v1.0 -m "Versão 1.0"
2. Verificar a Tag Criada:
Liste as tags no repositório:
git tag
3. Visualizar Detalhes da Tag:
Exiba informações detalhadas sobre a tag:
git show v1.0
4. Enviar a Tag para o Repositório Remoto:
Envie a tag v1.0 para o repositório remoto:
git push origin v1.0
Criar uma Tag Anotada:
Suponha que você queira marcar a versão 1.0 do seu projeto:
git tag -a v1.0 -m "Versão 1.0"

Suponha que você queira marcar a versão 1.0 do seu projeto:

```
git tag -a v1.0 -m "Versão 1.0"
```

`git tag -a v1.0 -m "Versão 1.0"`
Verificar a Tag Criada:
Liste as tags no repositório:
git tag

Liste as tags no repositório:

```
git tag
```

`git tag`
Visualizar Detalhes da Tag:
Exiba informações detalhadas sobre a tag:
git show v1.0

Exiba informações detalhadas sobre a tag:

```
git show v1.0
```

`git show v1.0`
Enviar a Tag para o Repositório Remoto:
Envie a tag v1.0 para o repositório remoto:
git push origin v1.0

Envie a tag v1.0 para o repositório remoto:

`v1.0`
```
git push origin v1.0
```

`git push origin v1.0`
## Conclusão

Trabalhar com tags e releases no Git facilita o gerenciamento de versões do seu projeto e a distribuição de versões estáveis para os usuários. As tags permitem marcar pontos específicos no histórico de commits, enquanto as releases oferecem uma maneira estruturada de comunicar e distribuir novas versões.

No próximo capítulo, exploraremos como utilizar o Git Stash para trabalho temporário e gerenciar mudanças não concluídas.
