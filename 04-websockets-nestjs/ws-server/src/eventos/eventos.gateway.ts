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
            message: { mensaje: string },
        @ConnectedSocket()
            socket: Socket
    ){
        console.log('message', message)
        socket.broadcast
            .emit(
                'escucharEventoHola',
                {
                    mensaje: 'Bienvenido ' + message.mensaje
                }
            );
        return {mensaje: 'ok'};
    }

    @SubscribeMessage('unirseSala')
        unirseSala(
            @MessageBody()
                message: {salaId: string, nombre: string},
            @ConnectedSocket()
            socket: Socket
        ){
            socket.join(message.salaId);
            const mensajeBienvenidaSala = {mensaje: 'Bienvenido ' + message.nombre};
            socket.broadcast.to(message.salaId)
                .emit('escucharEventoUnirseSala', mensajeBienvenidaSala)
            return{message: 'ok'}
        }

    @SubscribeMessage('enviarMensaje')
    enviarMensaje(
        @MessageBody()
            message: {salaId: string, nombre: string, mensaje: string},
        @ConnectedSocket()
            socket: Socket
    ){
        const mensajeSala = {
            nombre: message.nombre,
            mensaje: message.mensaje,
            salaId: message.salaId
        };
        socket.broadcast.to(message.salaId)
            .emit('escucharEventoMensajeSala', mensajeSala)
        return{message: 'ok'}
    }

    //Eventos de Deber 03: Web sockets

}