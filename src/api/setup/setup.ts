import HttpClient from './base-client';
import KitsService from 'api/kits-service';

let kitService: KitsService;
export const configureClients = () => {
  // this should
  const client = new HttpClient(
    process.env.REACT_APP_PROXY_BASE_URL || 'http://localhost:5000',
  );
  kitService = new KitsService(client);
};

export const GetKitsService = () => kitService;
