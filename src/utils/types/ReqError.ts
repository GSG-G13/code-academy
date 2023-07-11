import { AxiosResponse } from 'axios';

interface ReqError extends AxiosResponse {
  response: {
    data: {
      error: boolean;
      data: {
        message: string;
      };
    };
  };
}

export default ReqError;
