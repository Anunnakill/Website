import _axios from "./interceptor";

// GET请求
const $GET = (path: string, params: object = {}): Promise<any> => {
  return _axios.get(path, { params });
};

// PUT请求
const $PUT = (path: string, params: object): Promise<any> => {
  return _axios.put(path, params);
};

// POST请求
const $POST = (path: string, params: object, option: object = {}): Promise<any> => {
  return _axios.post(path, params, option);
};

// DELETE请求
const $DELETE = (path: string, data: object): Promise<any> => {
  return _axios.delete(path, { data });
};

export { $GET, $PUT, $POST, $DELETE };
