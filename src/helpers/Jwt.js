import jwt from 'jsonwebtoken';
import { JWT } from '../config/constants';

const jwtHelper = {
    verify: (token) => {
        return new Promise((resolve, reject) => {
            jwt.verify(token, JWT.SECRET_KEY, (error, verified) => {
                error ? reject(error) : resolve(verified);
            });
        });
    },
};

export default jwtHelper;