node {
    stage('Checkout Repository') {
        checkout scm
    }
    stage('Build API Image and Push') {
        def apiImage = docker.build("dswhitely1/ee-api:${env.BUILD_ID}", "./api")
        docker.withRegistry("https://index.docker.io/v1/", "docker-hub-credentials") {
            apiImage.push()
            apiImage.push('latest')
        }
    }
    stage('Build Client Image and Push') {
        def clientImage = docker.build("dswhitely1/ee-client:${env.BUILD_ID}", "./client")
        docker.withRegistry("https://index.docker.io/v1/", "docker-hub-credentials") {
            clientImage.push()
            clientImage.push("latest")
        }
    }
}
