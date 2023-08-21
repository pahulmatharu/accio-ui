import HttpClient from 'api/setup/base-client';
import { FilterType } from 'models/filter-type';
import { Kit } from 'models/kit';

export default class KitsService {
  controller: string = 'kits';
  httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  searchKits = async (filterType: FilterType, value: string) => {
    const url = `${this.controller}/${filterType}/${value}`;
    const res = await this.httpClient.get<Kit[]>(url);
    if (res.isSuccessful && res.data) {
      return res.data;
    }
    return [];
  };
}
