export interface ITopicNewsData {
	to: string;
	topic: string;
	child: { to: string; title: string }[] | [];
}

export interface IListSearchData {
	to: string;
	img: string;
	des: string;
	createdAt: string;
}
