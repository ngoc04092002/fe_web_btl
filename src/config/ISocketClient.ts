import { CompatClient } from '@stomp/stompjs';

export default interface ISocketClient {
	send(path: string, body: object, headers: Record<string, string>): void;
	subscribe(destination: string, callback: Function): void;
	getClient(): CompatClient;
}
