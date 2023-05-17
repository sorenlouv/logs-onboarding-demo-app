# Logs onboarding demo app

A simple application that creates log entries.

## Usage

### Local
#### Prerequisities

In order to this app locally you'll need [node](https://nodejs.org/en/download).

#### Run app

Install app dependencies

```shell
npm install
```

run the application

```shell
npm run start
```

### Docker
#### Prerequisities

In order to run this container you'll need docker.

* [Windows](https://docs.docker.com/windows/started)
* [OS X](https://docs.docker.com/mac/started/)
* [Linux](https://docs.docker.com/linux/started/)

#### Run app

In order to run the app using a docker container, we should first build the image

```shell
docker build . -t logs-onboarding-demo-app
```

then run the container

```shell
docker run -d logs-onboarding-demo-app
```
