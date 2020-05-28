// Modules
import io from 'socket.io-client';

// Constants
import { ServerActions } from '../constants/socket.constants';

// Utils
import { getItem, setItem } from '../utils/local-storage.utils';


const host = process.env.API_HOST || 'http://localhost:3000';

const clientId = getItem('clientId');

const socket = io(host, {
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
