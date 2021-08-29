FROM node:14-alpine AS client

WORKDIR /app

COPY ./ /app/

RUN npm install --production 
RUN ng build --configuration production

FROM node:14-alpine AS server

WORKDIR /app 

COPY --from=client /app/dist/tutorial /app/dist
COPY --from=client /app/server /app/

RUN npm install --production

# FROM alpine

# WORKDIR /app

# RUN apk add --no-cache nodejs

# COPY --from=build0 /app ./

# EXPOSE 3005

CMD ["node" , "server"]
