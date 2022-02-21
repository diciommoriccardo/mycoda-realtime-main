import { createServer } from "http";
import { Server } from "socket.io";
import { SERVER } from './src/config/config';
import { SOCKET_EVENTS } from './src/config/constants';
import authMiddleware from './src/middlewares/auth';

const httpServer = createServer();
const io = new Server(httpServer);

io.use(authMiddleware);

io.on('connection', socket => {
    socket.join(socket.jwt.id);
    
    socket.on('privateMessage', (payload, acknowledge) => {
        io.to(payload.to).emit('privateMessage', { 
            from: socket.jwt.id, 
            message: payload.message 
        });
        if (typeof acknowledge === "function") acknowledge();
    });

    socket.on('messageReaded', (payload, acknowledge) => {
        io.to(payload.to).emit('messageReaded', {
            from: socket.jwt.id,
            message: payload.message
        });
        if (typeof acknowledge === "function") acknowledge();
    });
});

httpServer.listen(SERVER.PORT);

console.log(`Listening on port ${SERVER.PORT}`);

