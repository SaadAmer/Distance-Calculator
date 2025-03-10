FROM node:18

WORKDIR /app

# Remove lines 10 through 13 in case you don't have a global npmrc
# unlike me on my machine
# Remove the global npmrc file (prevents override from ~/.npmrc)
RUN rm -f /root/.npmrc

# Force npm to use the correct public registry
RUN npm config set registry https://registry.npmjs.org/

COPY package*.json ./

RUN rm -rf package-lock.json node_modules

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
