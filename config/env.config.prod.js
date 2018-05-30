module.exports = {
    port: '' || '4000',
    upload: {
        local: {
            mainDir: '',
        },
        s3: {
            accessKeyId: '',
            secretAccessKey: '',
            bucket: '',
        }
    },
    db: {
        mysql: {
            host: '',
            port: '',
            user: '',
            database: '',
            password: '',
            connectionLimit: '',
            connectionLeast: '',
        },
    },
    jwt: {
        access: {
            algorithm: '',
            param: '',
            secret: '',
            expire: '',
        },
        refresh: {
            algorithm: '',
            param: '',
            secret: '',
            expire: '',
        }
    },
    send: {
        android: {
            serverKey: '',
        },
        ios: {

        },
        mail: {
            service: '',
            user: '',
            passwd: '',
            from: '',
        }
    },
    logger: {
        local: {
            level: '',
            fileName: '',
            filePath: '',
        },
        fluentd: {
            level: '',
            host: '',
            port: '',
            timeout: '',
            tag: '',
        }
    },

}
