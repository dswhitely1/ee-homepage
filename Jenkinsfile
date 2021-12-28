node {
    stage('Checkout Repository') {
        checkout scm
    }
    stage('Build API Image') {
        def apiImage = docker.build("dswhitely1/ee-api:${env.BUILD_ID}", './api')
    }
    stage('Build Client Image') {
        def clientImage = docker.build('dswhitely1/ee-client:${env.BUILD_ID}', './client')
    }
    stage('Push API Image to docker hub') {
        apiImage.push()
        apiImage.push('latest')
    }
    stage('Push Client Image to docker hub') {
        clientImage.push()
        clientImage.push('latest')
    }
}
