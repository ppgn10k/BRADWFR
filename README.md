### 📍 Consulta de CEP - BRADWFR

Uma aplicação web moderna e responsiva para consulta automática de endereços brasileiros utilizando a API pública do ViaCEP. Desenvolvido com React, Vite e Axios, o projeto conta com uma interface estilizada no padrão Dark Mode e tratamento completo para erros de digitação, CEPs inexistentes e falhas de conexão. 

### 🚀 Tecnologias e Bibliotecas Utilizadas

O projeto foi construído utilizando a stack e as dependências listadas abaixo: 

* **React**: Biblioteca JavaScript para a construção da interface de usuário baseada em componentes estruturados.
* **Vite**: Ferramenta de build ultra-rápida utilizada como ambiente de desenvolvimento e empacotamento do ecossistema React.
* **Axios**: Biblioteca cliente HTTP baseada em Promises instalada para realizar as requisições de forma limpa, segura e assíncrona para a API externa da ViaCEP, contornando limitações de sintaxe nativas.
* **JavaScript (JSX)**: Linguagem padrão utilizada na lógica, estruturação e componentização da aplicação.

### 🛠️ Como Executar o Projeto Localmente

Siga o passo a passo abaixo para clonar o repositório, instalar as dependências necessárias e rodar o servidor de desenvolvimento em sua máquina local: 

### Prerrequisitos

Certifique-se de ter o **Node.js** e o gerenciador de pacotes **npm** instalados em seu computador. 

### 1. Clonar o Repositório

Abra o seu terminal e clone o projeto com o comando: 

bash

git clone https://github.com/ppgn10k/BRADWFR.git

Use o código com cuidado.

### 2. Acessar a Pasta do Projeto

Navegue até o diretório do projeto clonado: 

bash

cd BRADWFR

Use o código com cuidado.

### 3. Instalar as Dependências

Instale todas as bibliotecas configuradas (incluindo o Axios e pacotes do ecossistema Vite): 

bash

npm install

Use o código com cuidado.

### 4. Rodar o Servidor de Desenvolvimento

Inicie o servidor de testes local da aplicação: 

bash

npm run dev

Use o código com cuidado.

Após rodar o comando, o Vite disponibilizará um link local. Abra o seu navegador e acesse o endereço padrão:
http://localhost:5173/ 

### 🎯 Instruções de Uso da Aplicação

1. Na tela inicial do sistema, localize o campo de texto centralizado com a indicação **"Ex: 01001000"**.
2. Digite um número de CEP ativo composto estritamente por **8 dígitos numéricos** (exemplo prático: 01001000).
3. Clique no botão verde **"Buscar"** (ou aperte a tecla Enter do seu teclado).
4. O sistema processará a requisição em tempo real e exibirá um painel estruturado logo abaixo contendo: 

  * **Logradouro** (Rua, Avenida, etc.)
  * **Bairro**
  * **Cidade**
  * **Estado (UF)**

### 🛑 Tratamento de Erros Integrado

A aplicação está programada para blindar a interface contra travamentos caso o usuário faça entradas inválidas: 

* **Formato Inválido:** Caso o usuário digite menos ou mais de 8 dígitos, o sistema emitirá um aviso pedindo um formato válido.
* **CEP Inexistente:** Se o número enviado possuir 8 dígitos mas não constar nos registros nacionais, o aplicativo identificará a propriedade de erro do ViaCEP e exibirá um alerta informativo de não encontrado.
* **Erros de Rede:** Caso o computador perca o sinal de internet ou o servidor de APIs sofra instabilidades, uma mensagem destacada em vermelho indicará falha de conexão sem quebrar o fluxo da aplicação.

### 🌐 Deploy na Vercel

Esta aplicação conta com integração contínua para publicação em nuvem hospedada na plataforma Vercel através de compilação automatizada a partir do branch principal main.
