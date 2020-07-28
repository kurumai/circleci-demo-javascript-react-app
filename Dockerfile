FROM node:12.16.2-stretch
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
EXPOSE 3000
ENTRYPOINT ["npm", "run", "start"]
