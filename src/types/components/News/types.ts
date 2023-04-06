export interface ITopicNewsData {
	to: string;
	topic: string;
	child: { to: string; title: string }[] | [];
	[key: string]: any;
}

export interface IListSearchData {
	to: string;
	img: string;
	des: string;
	createdAt: string;
}
