FROM nikolaik/python-nodejs:python3.10-nodejs16-alpine

RUN apk add --update --no-cache \
    make \
    g++ \
    jpeg-dev \
    cairo-dev \
    giflib-dev \
    pango-dev \
    libtool \
    autoconf \
    automake

COPY package* .

RUN npm install --only=production --omit=dev

COPY . .

CMD npm run start