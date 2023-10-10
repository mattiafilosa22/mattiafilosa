# Usa un'immagine di base con Node.js
FROM node:14

# Imposta la directory di lavoro all'interno del container
WORKDIR /app

# Copia i file di configurazione e le dipendenze del progetto
COPY package*.json ./
RUN npm install

# Copia il codice sorgente dell'applicazione
COPY . .

# Comando di avvio dell'applicazione React
CMD ["npm", "start"]
