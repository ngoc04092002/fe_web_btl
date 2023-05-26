import axios, { AxiosInstance } from 'axios';

import IAxiosConfigure from './IAxiosConfigure';

class HttpClient implements IAxiosConfigure {
	private axiosInstance: AxiosInstance;

	constructor(pathname: string) {
		const accessToken = localStorage.getItem('accessToken') || '';
		const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:8080/api/v1/';
		this.axiosInstance = axios.create({
			baseURL,
			timeout: process.env.REACT_APP_TIMEOUT ? Number(process.env.REACT_APP_TIMEOUT) : 90000,
			headers: {
				'Content-Type': 'application/json',
				'access-token': accessToken,
			},
		});
		this.setRequestConfig();
	}

	public getConfigure(): AxiosInstance {
		return this.axiosInstance;
	}

	private setRequestConfig(): void {
		this.axiosInstance.interceptors.request.use((config) => {
			config.withCredentials = true;
			return config;
		});
	}
}

const http: AxiosInstance = new HttpClient('').getConfigure();

export { http };
