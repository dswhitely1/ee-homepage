node('docker') {
    stage('Build API Image') {
        checkout scm
        def apiImage = docker.build('api', './api')
        apiImage.inside {
            sh 'node --version'
        }
    }
    stage('Build Client Image') {
        checkout scm
        def clientImage = docker.build('client', './client')
        clientImage.inside {
            sh 'node --version'
        }
    }
}
