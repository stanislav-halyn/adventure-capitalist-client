// Socket
import { socket } from 'config/sockets';


export const subscribeTo = <T> (eventName: string, handler: (args: T) => void): void => {
  socket.on(eventName, handler);
};


export const unsubscribe = <T> (eventName: string, handler: (args: T) => void): void => {
  socket.removeListener(eventName, handler);
};


export const emit = <T> (eventName: string, payload?: T): void => {
  socket.emit(eventName, payload);
};
