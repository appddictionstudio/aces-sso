pipeline {
    agent { docker {
            image 'docker.io/3.6.3-openjdk-11-slim'
            registryUrl 'https://docker.io/'
            alwaysPull false
            registryCredentialsId 'd0faee3e-65b0-4ab7-83a1-b1709af66014'
    }
}
    environment {
        environment = 'tst'
    }
    stages {
        stage('Compile Code') {
            steps {
                sh 'mvn clean package'
            }
        }
        stage('Build Image') {
            echo 'Build Image After Compile Successfully'
        }
    }
}
