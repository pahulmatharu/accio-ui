import { handleUnauthorized } from 'api/helpers';
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  isAxiosError,
} from 'axios';
import { ErrorType, IHeader, StandardAPIResponse } from 'models/api/helpers';

export interface IHttpClient {
  get<TResponse>(
    path: string,
    customHeaders: IHeader,
  ): Promise<StandardAPIResponse<TResponse>>;
  post<TRequest, TResponse>(
    path: string,
    object: TRequest,
    customHeaders: IHeader,
  ): Promise<StandardAPIResponse<TResponse>>;
  put<TRequest, TResponse>(
    path: string,
    object: TRequest,
    customHeaders: IHeader,
  ): Promise<StandardAPIResponse<TResponse>>;
}

let dispatch: any;
export const injectDispatch = (_dispatch: any) => {
  dispatch = _dispatch;
};

export default class HttpClient implements IHttpClient {
  private client: AxiosInstance;
  constructor(baseUrl: string) {
    this.client = axios.create({
      withCredentials: true,
      baseURL: baseUrl,
      headers: {
        'Content-type': 'application/json',
      },
    });

    this.client.interceptors.response.use(
      (response) => response,
      (error) => handleUnauthorized(error, dispatch),
    );
  }

  async post<TRequest, TResponse>(
    path: string,
    payload: TRequest,
    headers: IHeader = {},
    useArrayBuffer = false,
  ): Promise<StandardAPIResponse<TResponse>> {
    try {
      const conf: AxiosRequestConfig<TRequest> = {
        headers,
      };
      const response = await this.client.post<TResponse>(path, payload, conf);
      return this.handleResponse<TResponse>(response);
    } catch (error) {
      return this.handleError<TResponse>(error);
    }
  }

  async put<TRequest, TResponse>(
    path: string,
    payload: TRequest,
    headers: IHeader = {},
  ): Promise<StandardAPIResponse<TResponse>> {
    try {
      const response = await this.client.put<TResponse>(path, payload, {
        headers,
      });
      return this.handleResponse<TResponse>(response);
    } catch (error) {
      return this.handleError<TResponse>(error);
    }
  }

  async get<TResponse>(
    path: string,
    headers: IHeader = {},
  ): Promise<StandardAPIResponse<TResponse>> {
    try {
      const response = await this.client.get<TResponse>(path, { headers });
      return this.handleResponse<TResponse>(response);
    } catch (error) {
      return this.handleError<TResponse>(error);
    }
  }

  private handleResponse<TResponse>(
    response: AxiosResponse<TResponse>,
  ): StandardAPIResponse<TResponse> {
    return {
      isSuccessful: true,
      data: response.data,
    };
  }

  private handleError<TResponse>(error: any): StandardAPIResponse<TResponse> {
    if (isAxiosError(error)) {
      switch (error.response?.status) {
        case 400:
          return {
            isSuccessful: false,
            error: {
              errorMessage: error.message,
              errorType: ErrorType.BAD_REQUEST,
              statusCode: error.response?.status,
            },
          };
        case 409:
          return {
            isSuccessful: false,
            error: {
              errorMessage: error.message,
              errorType: ErrorType.CONFLICT,
              statusCode: error.response?.status,
            },
          };
      }
    }
    return {
      isSuccessful: false,
      error: {
        errorType: ErrorType.UNKNOWN,
      },
    };
  }
}
