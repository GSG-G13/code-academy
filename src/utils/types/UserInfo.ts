import { AxiosResponse } from 'axios';

interface DataApi extends AxiosResponse {
  response: {
    data: {
      error: boolean;
      data: {
        message: string;
      };
    };
  };
}
interface UserInfo extends DataApi {
  full_name: string;
  id: number;
  role: string;
  gender: string;
  dob: string;
  username: string;
  avatar: string;
}

export type { DataApi, UserInfo };
