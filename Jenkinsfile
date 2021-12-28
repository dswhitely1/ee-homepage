node {
    stage('Build API Image') {
        checkout scm
        def apiImage = docker.build('api:${env.BUILD_ID}', './api')
        apiImage.push()
        apiImage.push('latest')
    }
    stage('Build Client Image') {
        checkout scm
        def clientImage = docker.build('client', './client')
        clientImage.inside {
            sh 'node --version'
        }
        clientImage.push()
        clientImage.push('latest')
    }
}
