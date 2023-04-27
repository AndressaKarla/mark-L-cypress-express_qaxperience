# Projeto de Testes Automatizados E2E (Ponta a Ponta) | Javascript | Cypress | GitHub Actions 
---
# Cursos da QAXperience
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
- Vealidar aplicação online
- Validar cadastro de uma tarefa com sucesso
- Validar que não deve cadastrar uma tarefa duplicada
- Validar campo obrigatório
- Validar conclusão de uma tarefa
- Validar exclusão de uma tarefa

---
# :information_source: Introdução 
Esse projeto "mark-L-cypress-express_qaxperience" é executado em um ambiente de desenvolvimento local nas aplicações de Gerenciamento de Tarefas Web e API "Mark L" desenvolvidas pelo [Fernando Papito](https://www.linkedin.com/in/papitoio/). 

Antes de cloná-lo ou baixá-lo, é necessário seguir as instruções abaixo :point_down:

## Janela do "Windows Explorer", criar uma pasta "tools"
- Abrir uma janela do "Windows Explorer"
- Acessar o diretório "C:"
- Criar uma pasta "tools"

## Cmder (Console Emulator)
- Baixar o [Console Emulator (cmder)](https://github.com/cmderdev/cmder/releases/download/v1.3.5/cmder.zip)
- Clicar com botão direito na pasta compactada > Extrair para "cmder"
- Mover a pasta descompactada "cmder" para o diretório "C:\tools" criado anteriormente
- Acessar o diretório "C:\tools\cmder"
- Clicar com botão direito no executável "cmder.exe" > Enviar para > Área de trabalho (criar atalho)
- Acessar a Área de Trabalho
- Clicar 2 vezes no atalho "Cmder - Atalho"
- Clicar na opção "Unblock and Continue"

## Desinstalar completamente Node.js e npm que já foram instalados em algum outro momento
- Seguir os passos apresentados nesse link ["COMO REMOVER COMPLETAMENTE O NODE.JS DO WINDOWS?"](https://acervolima.com/como-remover-completamente-o-node-js-do-windows/#:~:text=Pesquise%20por%20programa%20e%20recursos,js%20e%20desinstale-o.)

## Node versão 18.12.1
- Baixar e instalar o [node v18.12.1](https://nodejs.org/dist/v18.12.1/) > node-v18.12.1-x64.msi
- Abrir um novo cmder ou outro terminal de preferência, informar o comando abaixo para confirmar se o node realmente foi instalado
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
- Fechar esse terminal

## Habilitar as features adicionais do node que vem desabilitadas por padrão 
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
- Fechar esse terminal

##
Feito com ❤️ por Andressa Karla</a> :wave: 

[![Medium](https://img.shields.io/badge/-Medium-595D60?style=plastic&logo=Medium&logoColor=white&link=https://medium.com/@andressakarla)](https://medium.com/@andressakarla)
[![Linkedin](https://img.shields.io/badge/-LinkedIn-595D60?style=plastic&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/andressakarla//)](https://www.linkedin.com/in/andressakarla/)
