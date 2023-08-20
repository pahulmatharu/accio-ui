export interface StandardAPIResponse<TResponse> {
  isSuccessful: boolean;
  data?: TResponse;
  error?: StandardAPIError;
}

export interface StandardAPIError {
  errorMessage?: string;
  errorType?: ErrorType;
  statusCode?: number;
}

export enum ErrorType {
  UNKNOWN,
  BAD_REQUEST,
  CONFLICT,
}

export interface IHeader {
  [sessionId: string]: string;
}

export interface IQueryParam {
  name: string;
  value: string;
}
