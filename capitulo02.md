# Capítulo 2: Instalação e Configuração do Git

# Capítulo 2: Instalação e Configuração do Git

## Instalando o Git

A instalação do Git é um processo simples e direto, variando ligeiramente dependendo do sistema operacional que você está usando. Aqui estão as instruções para os três sistemas operacionais mais comuns: Windows, macOS e Linux.

### Windows

1. Baixe o Instalador: Acesse git-scm.com e baixe o instalador do Git para Windows.
2. Execute o Instalador: Execute o arquivo baixado e siga as instruções na tela. Durante a instalação, você pode selecionar opções padrão ou personalizar de acordo com suas necessidades.
3. Verifique a Instalação: Após a instalação, abra o Prompt de Comando ou o Git Bash e execute o comando:
            git --version
            Isso deve exibir a versão do Git instalada, confirmando que o Git está pronto para uso.
Baixe o Instalador: Acesse git-scm.com e baixe o instalador do Git para Windows.
[git-scm.com](https://git-scm.com)
Execute o Instalador: Execute o arquivo baixado e siga as instruções na tela. Durante a instalação, você pode selecionar opções padrão ou personalizar de acordo com suas necessidades.
Verifique a Instalação: Após a instalação, abra o Prompt de Comando ou o Git Bash e execute o comando:
            git --version
            Isso deve exibir a versão do Git instalada, confirmando que o Git está pronto para uso.
        
```
git --version
```

`git --version`
### macOS

1. Usando Homebrew: Se você tiver o Homebrew instalado, basta executar o seguinte comando no Terminal:
            brew install git
2. Baixar e Instalar Manualmente: Acesse git-scm.com e baixe o instalador para macOS. Siga as instruções fornecidas.
3. Verifique a Instalação: No Terminal, execute:
            git --version
Usando Homebrew: Se você tiver o Homebrew instalado, basta executar o seguinte comando no Terminal:
            brew install git

```
brew install git
```

`brew install git`
Baixar e Instalar Manualmente: Acesse git-scm.com e baixe o instalador para macOS. Siga as instruções fornecidas.
[git-scm.com](https://git-scm.com)
Verifique a Instalação: No Terminal, execute:
            git --version

```
git --version
```

`git --version`
### Linux

1. Debian/Ubuntu: Abra o Terminal e execute:
            sudo apt-get update
sudo apt-get install git
2. Fedora: No Terminal, execute:
            sudo dnf install git
3. Verifique a Instalação: Execute:
            git --version
Debian/Ubuntu: Abra o Terminal e execute:
            sudo apt-get update
sudo apt-get install git

```
sudo apt-get update
sudo apt-get install git
```

`sudo apt-get update
sudo apt-get install git`
Fedora: No Terminal, execute:
            sudo dnf install git

```
sudo dnf install git
```

`sudo dnf install git`
Verifique a Instalação: Execute:
            git --version

```
git --version
```

`git --version`
## Configurando o Git

Depois de instalar o Git, você precisará configurá-lo para usar suas informações de usuário para commits.

1. Defina Seu Nome de Usuário: No Terminal ou Git Bash, execute:
            git config --global user.name "Seu Nome"
2. Defina Seu E-mail: Execute:
            git config --global user.email "seu.email@exemplo.com"
3. Verifique Suas Configurações: Para verificar suas configurações, execute:
            git config --list
            Isso exibirá todas as configurações definidas para o Git.
4. Configuração do Editor Padrão: Você também pode definir o editor de texto padrão para o Git, caso precise editar mensagens de commit. Por exemplo, para definir o Vim como editor padrão, execute:
            git config --global core.editor "vim"
5. Arquivo de Configuração do Git: As configurações globais são armazenadas no arquivo .gitconfig em seu diretório home. Você pode editar esse arquivo diretamente para fazer ajustes adicionais.
Defina Seu Nome de Usuário: No Terminal ou Git Bash, execute:
            git config --global user.name "Seu Nome"

```
git config --global user.name "Seu Nome"
```

`git config --global user.name "Seu Nome"`
Defina Seu E-mail: Execute:
            git config --global user.email "seu.email@exemplo.com"

```
git config --global user.email "seu.email@exemplo.com"
```

`git config --global user.email "seu.email@exemplo.com"`
Verifique Suas Configurações: Para verificar suas configurações, execute:
            git config --list
            Isso exibirá todas as configurações definidas para o Git.
        
```
git config --list
```

`git config --list`
Configuração do Editor Padrão: Você também pode definir o editor de texto padrão para o Git, caso precise editar mensagens de commit. Por exemplo, para definir o Vim como editor padrão, execute:
            git config --global core.editor "vim"

```
git config --global core.editor "vim"
```

`git config --global core.editor "vim"`
Arquivo de Configuração do Git: As configurações globais são armazenadas no arquivo .gitconfig em seu diretório home. Você pode editar esse arquivo diretamente para fazer ajustes adicionais.
        
`.gitconfig`
## Conclusão

Com o Git instalado e configurado, você está pronto para começar a usar essa poderosa ferramenta de controle de versão. No próximo capítulo, veremos como criar e clonar repositórios para iniciar seu trabalho com Git.
