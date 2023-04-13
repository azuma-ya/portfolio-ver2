export const skillsData = [
	{
		title: "言語",
		skills: [
			{
				skill: "JavaScript",
				level: 4,
				breadcrumbs: ["skills", "言語", "JavaScript"],
				modal: {
					text: "高校生の時から独学をはじめ、ゲーム制作を通してJavaScriptの構文への理解を深めてきました。その知識を生かし、現在ではUIフレームワークであるReactを使ったWebアプリケーションの開発、勉強を行っております。",
					image: "assets/img/project2.png",
				},
			},
			{
				skill: "Python",
				level: 3,
				breadcrumbs: ["skills", "言語", "Python"],
				modal: {
					text: "直近では、TensorFlowなどを使った自然言語のモデル生成などを行いました。また、Beautiful soupやSeleniumを使ったWebスクレイピングを勉強しました。基本的なことはできます。",
					image: "#",
				},
			},
			{ skill: "C#", level: 2, breadcrumbs: ["skills", "言語", "Python"] },
		],
	},
	{
		title: "ライブラリ・フレームワーク",
		skills: [
			{
				skill: "React",
				level: 3,
				breadcrumbs: ["skills", "ライブラリ・フレームワーク", "React"],
				modal: {
					text: "直近では、NotionやTwitterのクローンサイトを一からコーディングしました。また、現在ではMaterialUIやBootstrap5を使ったUIの構築を行っております。",
					image: "assets/img/project4.png",
				},
			},
			{
				skill: "Node.js",
				level: 3,
				breadcrumbs: ["skills", "ライブラリ・フレームワーク", "Node.js"],
				modal: {
					text: "現在ではNode.jsを使って、バックエンドの構築にも力を入れております。expressを使いmongoDBと接続した、簡単なToDoAppを製作しました。またフロントエンドにReactを用いた、 MERN(mongoDB,express,React,Nodejs)と呼ばれるフルスタックで開発をしています。",
					image: "assets/img/project3.png",
				},
			},
			{
				skill: "Django",
				level: 2,
				breadcrumbs: ["skills", "ライブラリ・フレームワーク", "Django"],
				modal: {
					text: "バックエンド開発として、Node.js、PHPのほかDjangoを使った構築も勉強しております。直近では、Djangoを使い、マイクロブログの開発を行いました。",
					image: "assets/img/project5.png",
				},
			},
			{
				skill: "Bootstrap5",
				level: 2,
				breadcrumbs: ["skills", "ライブラリ・フレームワーク", "Bootstrap5"],
			},
			{
				skill: "Material UI",
				level: 3,
				breadcrumbs: ["skills", "ライブラリ・フレームワーク", "Material UI"],
			},
		],
	},
	{
		title: "その他",
		skills: [
			{
				skill: "Github",
				level: 3,
				breadcrumbs: ["skills", "その他", "Github"],
			},
			{
				skill: "heroku",
				level: 3,
				breadcrumbs: ["skills", "その他", "heroku"],
			},
			{
				skill: "mongoDB",
				level: 3,
				breadcrumbs: ["skills", "その他", "mongoDB"],
			},
		],
	},
];

export const worksData = [
	{
		image: "assets/img/project1.png",
		desc: "このポートフォリオサイトです。",
		url: "/",
	},
	{
		image: "assets/img/project2.png",
		desc: "インベーダーゲームを作りました。",
		url: "https://space-invaders-with-reflect.herokuapp.com/index.html",
	},
	{
		image: "assets/img/project3.png",
		desc: "Node.jsとmongoDBを使ったアプリです。",
		url: "https://nodejs-mongodb-tutorial.herokuapp.com/",
	},
	{ image: "", desc: "coming soon", url: "#" },
	{ image: "", desc: "coming soon", url: "#" },
];
