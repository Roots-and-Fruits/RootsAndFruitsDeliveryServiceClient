export interface MutateResponseType {
  status: number;
  message: string;
}

export interface ErrorResponse {
  response: {
    data: {
      status: number;
      message: string;
    };
  };
}

export interface ApiResponseType<T> {
  status: number;
  message: string;
  data: T;
}
