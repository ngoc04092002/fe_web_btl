export interface ITopicNewsData {
	to: string;
	topic: string;
	child: { to: string; title: string }[] | [];
}
