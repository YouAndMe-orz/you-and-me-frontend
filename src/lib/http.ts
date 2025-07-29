import axios from "axios";

export type ApiResponse<T> = {
  data: T;
};

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
