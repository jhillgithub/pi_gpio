# pi_sockets
Testing Socket.io on the Raspberry Pi

## Install

```shell
cd client
npm install

cd ../server
npm install
```

## Usage

The express server is setup to use the build directory for create-react-app.

Run `npm run build` to update the client.

To start the app:

```shell
cd server
nodemon server.js
```

visit [localhost:3000](http://localhost:3000) in the browser

## Docker Usage

```
docker run -d --rm --name test -p 3000:3000 -e apiKey="YOUR DARKSKY API KEY" piapp
```

Find ip address of pi using `if config`

Visit the address in the browser: `ip.address:3000`

Stop the container
```
docker stop piapp
```

Remove the container
```
docker rm piapp
```

Remove the iamge
```
docker rmi piapp
```

## Building a new docker image

Clone the repo on the pi board
```
git clone https://github.com/jhillgithub/pi_sockets.git
```

Build the docker file
```
docker build -t piapp .
```

Test the image
```
docker run -d --rm --name test -p 3000:3000 -e apiKey="YOUR DARKSKY API KEY" piapp
```

Stop the image
```
docker stop piapp
```

Login to docker hub
```
docker login
```

Find the image id
```
docker images
```

Tag the image id
```
docker tag df58cb500b33 jhilldata/piapp:latest
```

Push the image
```
docker push jhilldata/piapp
```
