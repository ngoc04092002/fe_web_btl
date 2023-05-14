import ISocketClient from '@/config/ISocketClient';
import socketClient from '@/config/SocketClient';
import { CreateMessageRequest } from '@/types/components/ChatMessage/type';

class ChatMessageClient {
	#socketClient: ISocketClient;
	constructor(socketClient: ISocketClient) {
		this.#socketClient = socketClient;
	}

	postMessage(request: CreateMessageRequest): void {
		this.#socketClient.send('/send/message', request, {});
	}
}

const chatMessageClient = new ChatMessageClient(socketClient);

export default chatMessageClient;
