# --- Estágio 1: Dependências e Build ---
FROM node:20-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependência e instala
COPY package*.json ./
RUN npm install

# Copia o resto do código
COPY . .

# Roda o comando de build do Next.js
RUN npm run build

# --- Estágio 2: Imagem Final de Produção ---
FROM node:20-alpine

WORKDIR /app

# Copia os arquivos de build do estágio anterior
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Expõe a porta que o Next.js usa
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
