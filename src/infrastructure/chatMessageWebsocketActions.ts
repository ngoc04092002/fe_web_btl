import ISocketClient from '@/config/ISocketClient';
// import { CreateMessageRequest } from '@/types/components/ChatMessage/type';

class ChatMessageClient {
	private socketClient: ISocketClient;
	constructor(socketClient: ISocketClient) {
		this.socketClient = socketClient;
	}

	postMessage(request: object): void {
		this.socketClient.send('/send/message', request, {});
	}
}

export default ChatMessageClient;
