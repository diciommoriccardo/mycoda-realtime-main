import jwt from '../helpers/Jwt';
import { ERRORS } from '../config/constants';

const authMiddleware = (socket, next) => {
    if (!socket.handshake.query['authentication'] || 
         socket.handshake.query['authentication'].split(' ')[0] !== 'Bearer') {
        return next(new Error('403 - Forbidden'));
    }
    const bearer = socket.handshake.query['authentication'].split(' ')[1];
    jwt.verify(bearer)
        .then((verified) => {
            socket.jwt = verified;
            next();
        })
        .catch((error) => {
            const message = error.name === 'TokenExpiredError' ? ERRORS.TOKEN_EXPIRED : ERRORS.INVALID_ACCESS_TOKEN;
            return next(new Error(message));
        });
};

export default authMiddleware;