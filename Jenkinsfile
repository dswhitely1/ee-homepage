node {
    checkout scm
    def apiImage = docker.build('api', './api')
    def clientImage = docker.build('client', './client')
}
