import apiClient from './apiClient';

interface Global {
  id: number;
}

interface User {
  id: number;
  username: string;
  avatar: string;
  isAdmin: boolean;
}

interface LoginResponse {
  error: boolean;
  data: {
    message: string;
    user: User;
  };
}

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async getAll<T>() {
    return apiClient.get<T[]>(this.endpoint);
  }

  async getOne<T>(id: number) {
    return apiClient.get<T>(`${this.endpoint}/${id}`);
  }

  async create<T>(body: T) {
    return apiClient.post(this.endpoint, body);
  }

  async update<T extends Global>(body: T) {
    return apiClient.put(`${this.endpoint}/${body.id}`, body);
  }

  async delete(id: number) {
    return apiClient.delete(`${this.endpoint}/${id}`);
  }

  async login<T>(body: T) {
    return apiClient.post<LoginResponse>(`${this.endpoint}/login`, body);
  }

  async logout() {
    return apiClient.post(`${this.endpoint}/logout`);
  }
}

const create = (endpoint: string) => new HttpService(endpoint);
export default create;
