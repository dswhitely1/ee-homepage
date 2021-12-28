node {
    stage('Checkout Repository') {
        checkout scm
    }
    stage('Build API Image and Push') {
        def apiImage = docker.build("dswhitely1/ee-api:${env.BUILD_ID}", "./api")
        apiImage.push()
        apiImage.push("latest")
    }
    stage('Build Client Image and Push') {
        def clientImage = docker.build("dswhitely1/ee-client:${env.BUILD_ID}", "./client")
        clientImage.push()
        clientImage.push("latest")
    }
}
