FROM node:18

WORKDIR /app

# Remove any existing npm configurations
RUN rm -f /root/.npmrc ~/.npmrc

# Force npm to use the official registry
RUN npm config set registry https://registry.npmjs.org/

# Delete old lock file and install dependencies
COPY package*.json ./
RUN rm -rf package-lock.json node_modules
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev"]