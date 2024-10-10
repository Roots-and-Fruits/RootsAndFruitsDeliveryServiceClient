import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

export const adminInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T>(...args);
}

export function put<T>(...args: Parameters<typeof instance.put>) {
  return instance.put<T>(...args);
}

export function patch<T>(...args: Parameters<typeof instance.patch>) {
  return instance.patch<T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T>(...args);
}

export function adminPost<T>(...args: Parameters<typeof adminInstance.post>) {
  return adminInstance.post<T>(...args);
}

export function adminPut<T>(...args: Parameters<typeof adminInstance.put>) {
  return adminInstance.put<T>(...args);
}

export function adminPatch<T>(...args: Parameters<typeof adminInstance.patch>) {
  return adminInstance.patch<T>(...args);
}

export function adminDelete<T>(
  ...args: Parameters<typeof adminInstance.delete>
) {
  return adminInstance.delete<T>(...args);
}
