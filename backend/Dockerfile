# --- Estágio 1: Build da Aplicação ---
FROM node:20-alpine AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia os arquivos de dependência e instala (isso aproveita o cache do Docker)
COPY package*.json ./
RUN npm install

# Copia o resto do código da aplicação
COPY . .

# Roda o comando de build do NestJS
RUN npm run build

# --- Estágio 2: Imagem Final de Produção ---
FROM node:20-alpine

WORKDIR /usr/src/app

# Copia apenas os artefatos necessários do estágio 'builder'
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist

# Expõe a porta que a aplicação vai usar (padrão do NestJS é 3000, mas vamos usar 3001)
EXPOSE 3001

# Comando para iniciar a aplicação quando o container rodar
CMD ["node", "dist/main"]
