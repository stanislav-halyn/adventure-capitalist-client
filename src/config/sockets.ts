// Modules
import io from 'socket.io-client';

// Constants
import { DefaultSocketActions, ServerActions } from 'constants/socket.constants';

// Utils
import { getItem, setItem } from 'utils/local-storage.utils';


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


socket.on(DefaultSocketActions.CONNECT_FAILED, () => {
  alert('Connection tothe server failed');
});


socket.on(DefaultSocketActions.ERROR, () => {
  alert('Internal server error');
});


socket.on(ServerActions.AUTHORIZATION, ({ clientId }: any) => {
  setItem('clientId', clientId);
});


export { socket };
