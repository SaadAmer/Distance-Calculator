FROM node:18

WORKDIR /app


# Remove lines 9 through 12 in case you don't have a global npmrc
# unlike me on my machine
# Remove the global npmrc file (prevents override from ~/.npmrc)
RUN rm -f /root/.npmrc ~/.npmrc

# Force npm to use the correct public registry
RUN npm config set registry https://registry.npmjs.org/

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4173
CMD ["npm", "run", "preview"]