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

export interface INewsCard {
	title?: string;
	des?: string;
	styles?: string;
	styleImg?: string;
	styleTitle?: string;
	src: string;
	dateTime?: string;
}

export interface INewsHomeHot {
	styles?: string;
	href: string;
	src: string;
	title: string;
	dateTime?: string;
	styleTitle?: string;
}
