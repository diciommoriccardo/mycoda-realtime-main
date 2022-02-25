import dotenv from 'dotenv';
dotenv.config();

const environment = process.env.NODE_ENV || 'production';
console.log(`Server environment is ${environment}.`);

const SERVER = {
    HOST: process.env.SOCKET_HOST || '0.0.0.0',
    PORT: process.env.SOCKET_PORT || '3000',
    HOST_SECURE: process.env.HOST_SECURE || '0.0.0.0',
    PORT_SECURE: process.env.PORT_SECURE || '3443',
};

export {
    SERVER,
};