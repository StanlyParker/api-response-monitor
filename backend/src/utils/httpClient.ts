import axios, { AxiosResponse } from 'axios';

type TimedResponse<T = unknown> = {
  response: AxiosResponse<T>;
  duration: number;
};

export async function timedGet<T = unknown>(url: string): Promise<TimedResponse<T>> {
  const start = Date.now();
  const response = await axios.get<T>(url);
  const duration = Date.now() - start;
  return { response, duration };
}
