node {
    stage('Checkout Repository') {
        checkout scm
    }
    stage('Build API Image and Push') {
        def apiImage = docker.build("dswhitely1/ee-api:${env.BUILD_ID}", "./api")
        docker.withRegistry("https://index.docker.io/v1/", "8d5ea089-22c9-4d49-8708-ff6817209ec5") {
            apiImage.push()
            apiImage.push('latest')
        }
    }
    stage('Build Client Image and Push') {
        def clientImage = docker.build("dswhitely1/ee-client:${env.BUILD_ID}", "./client")
        docker.withRegistry("https://index.docker.io/v1/", "8d5ea089-22c9-4d49-8708-ff6817209ec5") {
            clientImage.push()
            clientImage.push("latest")
        }
    }
}
