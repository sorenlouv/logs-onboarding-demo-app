FROM amd64/ubuntu:latest

# Install sudo
RUN apt-get update && \
    apt-get -y install sudo && \
    apt-get -y install nano

# Install git
RUN apt-get install -y git

# Install Node.js
RUN apt-get install -y curl
RUN curl --silent --location https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y build-essential

# Clone app and install dependencies
RUN git clone https://github.com/sqren/logs-onboarding-demo-app.git
WORKDIR /logs-onboarding-demo-app
RUN npm install

CMD ["npm" , "run" ,"start"]
