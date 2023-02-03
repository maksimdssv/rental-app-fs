import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

const apiAxios = axios.create({
  baseURL: 'http://localhost:3001',
});

export async function requestApi<T = any, D = any>(
  method: Method,
  url: string,
  config?: AxiosRequestConfig<D>,
): Promise<AxiosResponse<T>> {
  return await apiAxios<T, AxiosResponse<T, D>, D>({ ...config, method, url });
}
