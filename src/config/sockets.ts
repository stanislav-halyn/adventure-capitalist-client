// Modules
import io from 'socket.io-client';

// Constants
import { ServerActions } from '../constants/socket.constants';

// Utils
import { getItem, setItem } from '../utils/local-storage.utils';


const clientId = getItem('clientId');

const socket = io('http://localhost:3000', {
  transportOptions: {
    polling: {
      extraHeaders: {
        Authorization: `Auth ${clientId}`
      }
    }
  }
});


socket.on(ServerActions.AUTHORIZATION, ({ clientId }: any) => {
  setItem('clientId', clientId);
});


export { socket };
