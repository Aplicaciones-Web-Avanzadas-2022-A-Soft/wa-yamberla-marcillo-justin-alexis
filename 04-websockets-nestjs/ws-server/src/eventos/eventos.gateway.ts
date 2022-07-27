import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";
import {Server, Socket} from 'socket.io';

@WebSocketGateway(
    8585,
    {
        cors:{
            origin: '*',
        }
    }
)

export class EventosGateway{
    @SubscribeMessage('hola')
    devolverHola(
        @MessageBody()
            message:{nombre:string},
        @ConnectedSocket()
            socket: Socket
    ){
        console.log('message', message)
        socket.broadcast
            .emit(
                'escucharEventoHola',
                {
                    mensaje: 'Bienvenido' + message.nombre
                }
            );
        return 'ok';
    }
}