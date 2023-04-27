---
# :test_tube: Projeto de Testes Automatizados E2E (Ponta a Ponta) | Javascript | Cypress | GitHub Actions :test_tube:
---
# :information_source: Introdução 
Esse projeto "mark-L-cypress-express_qaxperience" é executado em um ambiente de desenvolvimento local nas aplicações "Mark L" de Gerenciamento de Tarefas Web e API  desenvolvidas pelo [Fernando Papito](https://www.linkedin.com/in/papitoio/) nos cursos da [QAXperience](qaxperience.com).


# :computer: Cursos da QAXperience
- [Cypress eXpress](https://qaxperience.com/cursos/cypress-express/) 
- [Workflow de testes contínuos em Cypress no Github Actions](https://play.qaxperience.com/89386-workflow-de-testes-continuos-em-cypress-no-github-actions) 


## :books: Conceitos apresentados nos módulos do curso "Cypress eXpress"
- Testes independentes;
- Testes E2E (ponta a ponta);
- Custom Commands;
- Organização por contexto;
- CLI (Interface de Linha de Comando) e Multi-Browser (Electron, Chrome, Firefox);
- Reusos e refatorações;
- Evidências das execuções dos testes automatizados em formato de videos e capturas de tela (screenshots);
- Entre outros conceitos


## :books: Conceitos apresentados nos módulos do curso "Workflow de testes contínuos em Cypress no Github Actions"
- Criando Workflows;
- Pipeline Multi-Browser;
- Continuous Testing;
- Entre outros conceitos


## :pushpin: Cenários implementados no projeto
- Validar aplicação online
- Validar cadastro de uma tarefa com sucesso
- Validar que não deve cadastrar uma tarefa duplicada
- Validar campo obrigatório
- Validar conclusão de uma tarefa
- Validar exclusão de uma tarefa


---
# :warning: Antes de baixar ou clonar esse projeto, é necessário seguir as instruções abaixo :point_down:

## :hammer_and_wrench: Janela do "Windows Explorer", criar uma pasta "tools"
- Abrir uma janela do "Windows Explorer"
- Acessar o diretório "C:"
- Criar uma pasta "tools"


## :hammer_and_wrench: Cmder (Console Emulator)
- Baixar o [Console Emulator (cmder)](https://github.com/cmderdev/cmder/releases/download/v1.3.5/cmder.zip)
- Clicar com botão direito na pasta compactada > Extrair para "cmder"
- Mover a pasta descompactada "cmder" para o diretório "C:\tools" criado anteriormente
- Acessar o diretório "C:\tools\cmder"
- Clicar com botão direito no executável "cmder.exe" > Enviar para > Área de trabalho (criar atalho)
- Acessar a Área de Trabalho
- Clicar 2 vezes no atalho "Cmder - Atalho"
- Clicar na opção "Unblock and Continue"


## :hammer_and_wrench: Desinstalar completamente Node.js e npm que já foram instalados em algum outro momento
- Seguir os passos apresentados nesse link ["COMO REMOVER COMPLETAMENTE O NODE.JS DO WINDOWS?"](https://acervolima.com/como-remover-completamente-o-node-js-do-windows/#:~:text=Pesquise%20por%20programa%20e%20recursos,js%20e%20desinstale-o.)


## :hammer_and_wrench: Node versão 18.12.1
- Baixar e instalar o [node v18.12.1](https://nodejs.org/dist/v18.12.1/) > node-v18.12.1-x64.msi
- Abrir um novo cmder ou outro terminal de preferência
- Informar o comando abaixo para confirmar se o node realmente foi instalado
```
node --version
```
- Verificar se foi retornada a mesma versão do node instalada anteriormente:
```
v18.12.1
```
- Informar o comando abaixo para confirmar se o npm realmente foi instalado
```
npm --version
```
- E verificar se foi retornada essa mesma versão do npm:
```
8.19.2
```
- Fechar esse cmder ou terminal


## :hammer_and_wrench: Habilitar as features adicionais do node que vem desabilitadas por padrão 
- Na ferramenta de pesquisa do Windows, informar "Prompt de Comando" 
- Clicar na opção "Executar como administrador"
- Informar o comando abaixo para habilitar as features adicionais do node que vem desabilitadas por padrão 
```
corepack enable
```
- Informar o comando abaixo para confirmar se o yarn realmente foi habilitado
```
yarn --version
```
- E verificar se foi retornada essa mesma versão do yarn:
```
1.22.19
```
- Fechar esse prompt de comando


## :hammer_and_wrench: Baixar, instalar e configurar o git
- Caso ainda não tenha o git baixado e instalado, acessar o site do [git](https://git-scm.com/download/win), baixar e instalar
- Caso ainda não tenha configurado o git, seguir os passos apresentados nesse link [Configure a ferramenta](https://training.github.com/downloads/pt_BR/github-git-cheat-sheet/#:~:text=Configure%20a%20ferramenta) e configurar


## :hammer_and_wrench: Clonar ou baixar o projeto
- Abrir uma janela do "Windows Explorer"
- Acessar o diretório onde será baixado ou clonado o projeto "mark-L-cypress-express_qaxperience"
- Copiar esse diretório 
- Abrir um novo cmder ou outro terminal de preferência
- Informar o comando abaixo para acessar onde será baixado ou clonado o projeto
```
cd "<diretório copiado anteriormente>"
```
Ex.: 
```
cd "C:\QAx\projects"
```
- Informar o comando abaixo para clonar este repositório via "HTTPS"
```
git clone https://github.com/AndressaKarla/mark-L-cypress-express_qaxperience.git
```
- Ou informar o comando abaixo para clonar este repositório via "SSH"

```
git clone git@github.com:AndressaKarla/mark-L-cypress-express_qaxperience.git
```


## :hammer_and_wrench: Instalar as dependências necessárias do Mark L (apps > api) 
- No cmder aberto anteriormente, informar o comando abaixo para acessar o projeto “mark-L-cypress-express_qaxperience”
```
cd "mark-L-cypress-express_qaxperience"
```
Ex.: 
```
C:\QAx\projects\mark-L-cypress-express_qaxperience
```
- Informar o comando abaixo para instalar as dependências necessárias do Mark L (apps > api)  
```
yarn --cwd ./apps/api install
```


## :checkered_flag: Executar Mark L (apps > api e apps > web) em um ambiente de desenvolvimento local
- No cmder aberto anteriormente, ainda no projeto “mark-L-cypress-express_qaxperience”, informar o comando abaixo para executar Mark L (apps > api) em um ambiente de desenvolvimento local
Ex.: 
```
yarn --cwd ./apps/api dev
```
- NÃO fechar esse cmder


## :hammer_and_wrench: Instalar as dependências necessárias do Mark L (apps > web) 
- Abrir uma janela do "Windows Explorer"
- Acessar o diretório onde foi clonado o projeto “mark-L-cypress-express_qaxperience”
- Copiar esse diretório 
- Abrir um novo cmder
- Informar o comando abaixo para acessar o projeto “mark-L-cypress-express_qaxperience”
```
cd "<diretório copiado anteriormente>"
```
Ex.: 
```
cd "C:\QAx\projects\mark-L-cypress-express_qaxperience"
```
- Informar o comando abaixo para instalar as dependências necessárias do Mark L (apps > web)  
```
yarn --cwd ./apps/web install
```


## :checkered_flag: Executar Mark L (apps > api e apps > web) em um ambiente de desenvolvimento local
- No cmder aberto anteriormente, ainda no projeto “mark-L-cypress-express_qaxperience”, informar o comando abaixo para executar Mark L (apps > web) em um ambiente de desenvolvimento local
Ex.: 
```
yarn --cwd ./apps/web dev
```
- NÃO fechar esse cmder


## :hammer_and_wrench: Instalar as dependências necessárias do Cypress 
- Abrir uma janela do "Windows Explorer"
- Acessar o diretório onde foi clonado o projeto “mark-L-cypress-express_qaxperience”
- Copiar esse diretório 
- Abrir um novo cmder
- Informar o comando abaixo para acessar o projeto “mark-L-cypress-express_qaxperience”
```
cd "<diretório copiado anteriormente>"
```
Ex.: 
```
cd "C:\QAx\projects\mark-L-cypress-express_qaxperience"
```
- Informar o comando abaixo para instalar as dependências necessárias do Cypress 
```
yarn install
```


## :checkered_flag: Executar os testes automatizados e2e (ponta a ponta) no navegador chrome na interface gráfica do Cypress
- No cmder aberto anteriormente, ainda no projeto “mark-L-cypress-express_qaxperience”, informar o comando abaixo para abrir a interface gráfica do Cypress
```
yarn cypress open
```
- Na interface gráfica do Cypress, em "Welcome to Cypress!", clicar em "E2E Testing"
- Em "Choose a browser", clicar em "Chrome"
- Clicar em "Start E2E Testing in Chrome"
- Em "cypress-express-mark" > "Specs", clicar em "home"
- Em "cypress-express-mark" > "Specs", clicar em "tasks"


## :checkered_flag: Ou executar os testes automatizados e2e (ponta a ponta) no navegador chrome em modo headless (2° plano)
- Abrir uma janela do "Windows Explorer"
- Acessar o diretório onde foi baixado ou clonado o projeto “mark-L-cypress-express_qaxperience”
- Copiar esse diretório 
- Abrir um novo cmder 
- Informar o comando abaixo para acessar o projeto “mark-L-cypress-express_qaxperience”
```
cd "<diretório copiado anteriormente>"
```
Ex.: 
```
cd "C:\QAx\projects\mark-L-cypress-express_qaxperience"
```
- Informar o comando abaixo para executar os testes automatizados em modo headless (2° plano), mesmo modo que é utilizado no "workflow-testes-automatizados-e2e-cypress.yml" no GitHub Actions:
```
yarn cypress run --browser chrome
```


## :hammer_and_wrench: Visual Studio Code (VS Code)
- Caso ainda não tenha o VS Code baixado e instalado, acessar o site do [Visual Studio Code](https://code.visualstudio.com/download), baixar e instalar
- Com o Visual Studio Code aberto, se for apresentado alguma mensagem de "Instalar pacote de idiomas ...", clicar no ícone de configurações > "Don't Show Again" 


## :hammer_and_wrench: Instalar as extensões no VS Code
- Com o VS Code aberto, clicar na opção "Extensions", informar e instalar as extensões abaixo:
  - Material Icon Theme
    - Philipp Kief
      - Nas opções apresentadas, clicar na opção "Material Icon Theme" para habilitar a extensão
  - One Dark Pro 
    - binaryify
      - Nas opções apresentadas, clicar na opção "One Dark Pro Darker" para habilitar a extensão
- Fechar o VS Code


## :hammer_and_wrench: Abrir o VS Code diretamente na pasta do projeto "mark-L-cypress-express_qaxperience"
- No cmder aberto anteriormente, informar o comando abaixo para abrir o VS Code diretamente na pasta do projeto "mark-L-cypress-express_qaxperience"
```
code .
```
- No VS Code aberto, caso seja apresentado "Do you trust the authors on the files in this folder?", marcar a opção "Trust the authors of all files in the parent folder ...."
	- Clicar no botão "Yes, I trust the authors ...."


## :heavy_check_mark: Em caso de sucesso, verificar os vídeos com os resultados das execuções dos testes automatizados e2e (ponta a ponta)
- No VS Code aberto anteriormente, acessar a pasta cypress > vídeos

Ex.:
```
home.cy.js.mp4
tasks.cy.js.mp4
```  


## :x: Em caso de falha, verificar os screenshots com os resultados das execuções dos testes automatizados e2e (ponta a ponta)
- No VS Code aberto anteriormente, acessar a pasta cypress > screenshots

Ex.:
```
home -- webapp deve estar online (failed).png
. . .
tarefas -- atualização -- deve concluir uma tarefa (failed).png
. . .
tarefas -- exclusão -- deve excluir uma tarefa (failed)
```  

---
### Feito com ❤️ por Andressa Karla :wave: 

### [![Medium](https://img.shields.io/badge/-Medium-595D60?style=plastic&logo=Medium&logoColor=white&link=https://medium.com/@andressakarla)](https://medium.com/@andressakarla) [![Linkedin](https://img.shields.io/badge/-LinkedIn-595D60?style=plastic&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/andressakarla//)](https://www.linkedin.com/in/andressakarla/)

---
