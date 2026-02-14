# Como Colocar seu Site no GitHub

Como o "GitHub CLI" não está instalado no seu computador, precisamos fazer o processo manual. Não se preocupe, é simples! Siga os passos abaixo:

## Passo 1: Criar o Repositório no GitHub

1.  Acesse o site do GitHub: [github.com](https://github.com/) e faça login.
2.  No canto superior direito, clique no ícone **+** e selecione **"New repository"** (Novo repositório).
3.  No campo **"Repository name"**, digite um nome para seu projeto, por exemplo: `claudia-abreu-perfumes`.
4.  Deixe a opção **"Public"** selecionada (para que todos possam ver) ou "Private" (se quiser manter fechado).
5.  **IMPORTANTE:** Não marque nenhuma das opções de "Initialize this repository with:" (README, .gitignore, License). Deixe tudo desmarcado.
6.  Clique no botão verde **"Create repository"**.

## Passo 2: Conectar seu Computador ao GitHub

Após criar o repositório, você verá uma tela com alguns comandos. Vamos usar a seção que diz **"…or push an existing repository from the command line"**.

1.  Copie o link do seu repositório. Ele deve se parecer com isso:
    `https://github.com/SEU_USUARIO/claudia-abreu-perfumes.git`

2.  Abra o seu **Terminal** (ou CMD/PowerShell) na pasta do projeto (onde você já está).

3.  Digite o seguinte comando e aperte Enter (substitua o link pelo que você copiou):
    ```bash
    git remote add origin https://github.com/SEU_USUARIO/claudia-abreu-perfumes.git
    ```

4.  Agora, vamos garantir que estamos no ramo principal:
    ```bash
    git branch -M main
    ```

5.  Por fim, enviamos os arquivos para o GitHub:
    ```bash
    git push -u origin main
    ```

## Passo 3: Autenticação (Se necessário)

Se for a primeira vez que você faz isso, o terminal pode pedir para você fazer login.
- Uma janela pode abrir pedindo suas credenciais do GitHub.
- Basta autorizar e pronto!

---

**Pronto!** Seus arquivos agora estão no GitHub. Se você quiser atualizar o site no futuro, basta usar:

1.  `git add .`
2.  `git commit -m "Descrição da mudança"`
3.  `git push`
