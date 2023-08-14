import axios from 'axios';
let axiosInstance = null;
let headers: any = {
    'Cache-Control': 'no-cache',
};
function setHeaders(inputHeaders: Record<string, string>): void {
    headers = {...headers, ...inputHeaders};
    if (axiosInstance) {
        axiosInstance.defaults.headers.common = headers;
    }
}
function getHeaders(): any {
    return headers;
}

function getInstance(): any {
    if (axiosInstance !== null) {
        return axiosInstance;
    }

    const baseURL = import.meta.env.VITE_SOME_KEY as string;
    axiosInstance = axios.create({
        baseURL,
        headers: getHeaders(),
    });

    axiosInstance.interceptors.request.use((config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['x-api-token'] = token;
        }
        return config;
    });
    axiosInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error: any) => {
            console.log(error);
            if (error?.response?.data?.code === 1009) {
                localStorage.removeItem('token');
                window.location.href = '/';
            }
            return Promise.reject(error);
        }
    );

    return axiosInstance;
}
async function request<T = any>(
    method: 'get' | 'post' | 'put' | 'delete' | 'patch',
    endpointApiUrl: string,
    payload: Record<string, any> = {},
    config = {}
): Promise<any> {
    const instance = getInstance();
    switch (method) {
        case 'get':
            return instance.get(endpointApiUrl, {
                params: payload,
                ...config,
            });
        case 'post':
            return instance.post(endpointApiUrl, payload, config);
        case 'put':
            return instance.put(endpointApiUrl, payload, config);
        case 'delete':
            return instance.delete(endpointApiUrl, {data: payload, ...config});
        case 'patch':
            return instance.patch(endpointApiUrl, payload, config);
        default:
            throw new Error(`Unsupported request method: ${method}`);
    }
}
export const Axios = {
    axiosInstance,
    getHeaders,
    setHeaders,
    get: (url: string, payload?: Record<string, any>) =>
        request('get', url, payload),
    post: (url: string, payload?: Record<string, any>) =>
        request('post', url, payload),
    put: (url: string, payload?: Record<string, any>) =>
        request('put', url, payload),
    del: (url: string, payload?: Record<string, any>) =>
        request('delete', url, payload),
    patch: (url: string, payload?: Record<string, any>) =>
        request('patch', url, payload),
};
