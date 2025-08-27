# Gestor de Condomínio SaaS

Bem-vindo ao Gestor de Condomínio, uma plataforma completa para facilitar a comunicação e a administração de condomínios, construída como um serviço (SaaS).

Este projeto utiliza um painel web para síndicos e administradores e um bot de WhatsApp para interação direta com os moradores, focando em funcionalidades como quadro de avisos, reserva de áreas comuns e notificação de encomendas.

# 🚀 Tecnologias Principais

Este projeto foi construído utilizando uma stack moderna e robusta, visando alta performance e escalabilidade.

Frontend - Next.js (React) & Tailwind CSS
Backend - NestJS (Node.js) & TypeScript
Banco de Dados - PostgreSQL
Gerenciador de Pacotes - Yarn

# 📋 Pré-requisitos

Antes de começar, certifique-se de que você tem as seguintes ferramentas instaladas na sua máquina:

Git: Para clonar e versionar o código.

Node.js: Versão 20.x ou superior.

Yarn: Gerenciador de pacotes para os projetos frontend e backend. (npm install -g yarn)

Docker Desktop: Essencial para rodar o ambiente de desenvolvimento.

# 🔥 Começando (Ambiente de Desenvolvimento)

Siga estes passos para configurar e rodar o projeto localmente pela primeira vez. Todo o ambiente de desenvolvimento é orquestrado pelo Docker, então você não precisa instalar o PostgreSQL manualmente.

1. Clonar o Repositório

git clone https://github.com/CodeMesh-BR/Gestor-Condominio.git
cd Gestor-Condominio

2. Configurar Variáveis de Ambiente
   As variáveis de ambiente são usadas para armazenar informações sensíveis, como senhas de banco de dados e chaves de API. Crie uma cópia do arquivo de exemplo para configurar suas variáveis

cp .env.example .env
Após copiar, abra o arquivo .env e preencha os valores para as senhas do banco de dados e outras chaves que forem necessárias.

3. Instalar as Dependências
   Precisamos instalar as dependências de node_modules tanto para o frontend quanto para o backend. O Docker irá usá-las para construir as imagens.

Instalar dependências do Backend
cd backend
yarn install
cd ..

Instalar dependências do Frontend
cd frontend
yarn install
cd ..

4. Subir os Containers com Docker
   Este é o comando principal. Ele vai construir as imagens do frontend, do backend e baixar a imagem do PostgreSQL, criando e iniciando os containers de forma orquestrada.

docker-compose up --build
A flag --build é importante na primeira vez ou sempre que você alterar um Dockerfile.

Aguarde o processo ser finalizado. A primeira execução pode demorar alguns minutos.

5. Pronto!
   Se tudo correu bem, o ambiente estará no ar:

🖥️ Frontend (Next.js): http://localhost:3000

⚙️ Backend (NestJS): http://localhost:3001

🐘 Banco de Dados (PostgreSQL): Acessível na porta 5432 da sua máquina (localhost).
