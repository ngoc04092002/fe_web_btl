import { CompatClient, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

import ISocketClient from './ISocketClient';

class SocketClient implements ISocketClient {
	private readonly client: CompatClient;
	constructor() {
		const url = 'http://localhost:8080';
		const socket = new SockJS(url + '/websocket');
		this.client = Stomp.over(() => socket);
	}

	public send(path: string, body: object, headers: Record<string, string>): void {
		this.client.send(path, headers, JSON.stringify(body));
	}

	getClient(): CompatClient {
		return this.client;
	}

	subscribe(destination: string, callback: Function): void {
		this.client.subscribe(destination, (response) => callback(response));
	}
}

export default SocketClient;
