import axios from 'axios';
import HttpClient from './base-client';


export const configureClients = () => {
  // const omniClient = new HttpClient(config.omniocularsBaseUrl);
  // const subjectReconciliationClient = new HttpClient(
  //   config.subjectReconciliationBaseUrl,
  // );

  // alarmService = new AlarmsService(omniClient);
};

// export const GetKitsService = () => kitsService;

export const getUser = async (baseUrl: string) => {
  try {
    const res = await axios.get(`${baseUrl}/users`, { withCredentials: true });
    return res.data;
  } catch {
    return undefined;
  }
};
