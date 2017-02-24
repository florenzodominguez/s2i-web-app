### S2I Web App

A simple express based web app that uses the S2i command line tools to build a docker image

* s2i build . bucharestgold/centos7-s2i-nodejs:7.5.0  s2i-web-app

* docker run -p 8080:8080 s2i-web-app

* [http://localhost:8080](http://localhost:8080)
