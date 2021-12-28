node {
    stage('Build API Image') {
        checkout scm
        def apiImage = docker.build("dswhitely1/ee-api:${env.BUILD_ID}", './api')
        apiImage.push()
        apiImage.push('latest')
    }
    stage('Build Client Image') {
        checkout scm
        def clientImage = docker.build('dswhitely1/ee-client:${env.BUILD_ID}', './client')
        clientImage.inside {
            sh 'node --version'
        }
        clientImage.push()
        clientImage.push('latest')
    }
}
