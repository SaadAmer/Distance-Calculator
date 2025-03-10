FROM node:18-alpine

WORKDIR /app

# Remove lines 10 through 13 in case you don't have a global npmrc
# unlike me on my machine
# Remove the global npmrc file (prevents override from ~/.npmrc)
RUN rm -f /root/.npmrc

# Force npm to use the correct public registry
RUN npm config set registry https://registry.npmjs.org/

COPY package*.json ./


RUN npm install --omit=dev

COPY . .

EXPOSE 3000

ENV NODE_ENV=production

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD curl --fail http://localhost:3000/health || exit 1

CMD ["npm", "run", "start"]