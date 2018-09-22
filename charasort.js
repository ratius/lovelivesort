var MemberGroup = [
	["μ's",["Muse"]],
	["┣ラブライブ!",["Muse","Muse2"]],
	["┗μ'sカップリング",["MuseCP"]],
	["Aqours",["Aqours"]],
	["┣ラブライブ!サンシャイン!!",["Aqours","Aqours2"]],
	["┗Aqoursカップリング",["AqoursCP"]],
	["μ's＆Aqorus",["Muse","Aqours"]],
	["虹ヶ咲スクールアイドル同好会",["Niji"]],
	["スクフェスAll Stars",["Muse","Aqours","Niji"]],
	["モブライブ!",["Seiran","Shino","Chitose","Touoh","Shion","YG"]],
	["┣青藍高校",["Seiran"]],
	["┣東雲学院",["Shino"]],
	["┣千歳橋高校",["Chitose"]],
	["┣藤黄学園",["Touoh"]],
	["┣紫苑女学院",["Shion"]],
	["┗Y.G国際学園",["YG"]]
];
var CharList = [
	{name:"高坂穂乃果",     color:"#ffd6a5", group:{"Muse":1}},
	{name:"絢瀬絵里",       color:"#c4edfa", group:{"Muse":1}},
	{name:"南ことり",       color:"#e7dada", group:{"Muse":1}},
	{name:"園田海未",       color:"#cddffc", group:{"Muse":1}},
	{name:"星空凛",         color:"#fffdb1", group:{"Muse":1}},
	{name:"西木野真姫",     color:"#ffc3b7", group:{"Muse":1}},
	{name:"東條希",         color:"#e4d6f2", group:{"Muse":1}},
	{name:"小泉花陽",       color:"#cbf5ce", group:{"Muse":1}},
	{name:"矢澤にこ",       color:"#ffb9e9", group:{"Muse":1}},

	{name:"穂乃果の母",     color:"#fff", group:{"Muse2":1}},
	{name:"穂乃果の父",     color:"#fff", group:{"Muse2":1}},
	{name:"ことりの母",     color:"#fff", group:{"Muse2":1}},
	{name:"真姫の母",       color:"#fff", group:{"Muse2":1}},
	{name:"にこの母",       color:"#fff", group:{"Muse2":1}},
	{name:"高坂雪穂",       color:"#fff", group:{"Muse2":1}},
	{name:"絢瀬亜里沙",     color:"#fff", group:{"Muse2":1}},
	{name:"矢澤ここあ",     color:"#fff", group:{"Muse2":1}},
	{name:"矢澤こころ",     color:"#fff", group:{"Muse2":1}},
	{name:"矢澤虎太郎",     color:"#fff", group:{"Muse2":1}},
	{name:"ヒデコ",         color:"#fff", group:{"Muse2":1}},
	{name:"フミコ",         color:"#fff", group:{"Muse2":1}},
	{name:"ミカ",           color:"#fff", group:{"Muse2":1}},
	{name:"綺羅ツバサ",     color:"#fff", group:{"Muse2":1}},
	{name:"優木あんじゅ",   color:"#fff", group:{"Muse2":1}},
	{name:"統堂英玲奈",     color:"#fff", group:{"Muse2":1}},
	{name:"アルパカ",       color:"#fff", group:{"Muse2":1}},
	{name:"女性シンガー",   color:"#fff", group:{"Muse2":1}},
	
	{name:"ほのえり",       color:"#ffd6a5", color2:"#c4edfa", group:{"MuseCP":1}},
	{name:"ことほの",       color:"#e7dada", color2:"#ffd6a5", group:{"MuseCP":1}},
	{name:"ほのうみ",       color:"#ffd6a5", color2:"#cddffc", group:{"MuseCP":1}},
	{name:"ほのりん",       color:"#ffd6a5", color2:"#fffdb1", group:{"MuseCP":1}},
	{name:"ほのまき",       color:"#ffd6a5", color2:"#ffc3b7", group:{"MuseCP":1}},
	{name:"ほののぞ",       color:"#ffd6a5", color2:"#e4d6f2", group:{"MuseCP":1}},
	{name:"ほのぱな",       color:"#ffd6a5", color2:"#cbf5ce", group:{"MuseCP":1}},
	{name:"ほのにこ",       color:"#ffd6a5", color2:"#ffb9e9", group:{"MuseCP":1}},
	{name:"ことえり",       color:"#e7dada", color2:"#c4edfa", group:{"MuseCP":1}},
	{name:"えりうみ",       color:"#c4edfa", color2:"#cddffc", group:{"MuseCP":1}},
	{name:"えりりん",       color:"#c4edfa", color2:"#fffdb1", group:{"MuseCP":1}},
	{name:"えりまき",       color:"#c4edfa", color2:"#ffc3b7", group:{"MuseCP":1}},
	{name:"のぞえり",       color:"#e4d6f2", color2:"#c4edfa", group:{"MuseCP":1}},
	{name:"えりぱな",       color:"#c4edfa", color2:"#cbf5ce", group:{"MuseCP":1}},
	{name:"にこえり",       color:"#ffb9e9", color2:"#c4edfa", group:{"MuseCP":1}},
	{name:"ことうみ",       color:"#e7dada", color2:"#cddffc", group:{"MuseCP":1}},
	{name:"ことりん",       color:"#e7dada", color2:"#fffdb1", group:{"MuseCP":1}},
	{name:"ことまき",       color:"#e7dada", color2:"#ffc3b7", group:{"MuseCP":1}},
	{name:"ことのぞ",       color:"#e7dada", color2:"#e4d6f2", group:{"MuseCP":1}},
	{name:"ことぱな",       color:"#e7dada", color2:"#cbf5ce", group:{"MuseCP":1}},
	{name:"ことにこ",       color:"#e7dada", color2:"#ffb9e9", group:{"MuseCP":1}},
	{name:"うみりん",       color:"#cddffc", color2:"#fffdb1", group:{"MuseCP":1}},
	{name:"うみまき",       color:"#cddffc", color2:"#ffc3b7", group:{"MuseCP":1}},
	{name:"のぞうみ",       color:"#e4d6f2", color2:"#cddffc", group:{"MuseCP":1}},
	{name:"うみぱな",       color:"#cddffc", color2:"#cbf5ce", group:{"MuseCP":1}},
	{name:"うみにこ",       color:"#cddffc", color2:"#ffb9e9", group:{"MuseCP":1}},
	{name:"りんまき",       color:"#fffdb1", color2:"#ffc3b7", group:{"MuseCP":1}},
	{name:"のぞりん",       color:"#e4d6f2", color2:"#fffdb1", group:{"MuseCP":1}},
	{name:"りんぱな",       color:"#fffdb1", color2:"#cbf5ce", group:{"MuseCP":1}},
	{name:"にこりん",       color:"#ffb9e9", color2:"#fffdb1", group:{"MuseCP":1}},
	{name:"のぞまき",       color:"#e4d6f2", color2:"#ffc3b7", group:{"MuseCP":1}},
	{name:"まきぱな",       color:"#ffc3b7", color2:"#cbf5ce", group:{"MuseCP":1}},
	{name:"にこまき",       color:"#ffb9e9", color2:"#ffc3b7", group:{"MuseCP":1}},
	{name:"のぞぱな",       color:"#e4d6f2", color2:"#cbf5ce", group:{"MuseCP":1}},
	{name:"のぞにこ",       color:"#e4d6f2", color2:"#ffb9e9", group:{"MuseCP":1}},
	{name:"にこぱな",       color:"#ffb9e9", color2:"#cbf5ce", group:{"MuseCP":1}},

	{name:"高海千歌",       color:"#ffcdb7", group:{"Aqours":1}},
	{name:"桜内梨子",       color:"#ffc8d2", group:{"Aqours":1}},
	{name:"松浦果南",       color:"#b6eae7", group:{"Aqours":1}},
	{name:"黒澤ダイヤ",     color:"#fdc2c7", group:{"Aqours":1}},
	{name:"渡辺曜",         color:"#c4e5fe", group:{"Aqours":1}},
	{name:"津島善子",       color:"#d9e9f0", group:{"Aqours":1}},
	{name:"国木田花丸",     color:"#f5eb9c", group:{"Aqours":1}},
	{name:"小原鞠莉",       color:"#ecd1f3", group:{"Aqours":1}},
	{name:"黒澤ルビィ",     color:"#fbceeb", group:{"Aqours":1}},

	{name:"千歌の母",       color:"#fff", group:{"Aqours2":1}},
	{name:"梨子の母",       color:"#fff", group:{"Aqours2":1}},
	{name:"善子の母",       color:"#fff", group:{"Aqours2":1}},
	{name:"高海美渡",       color:"#fff", group:{"Aqours2":1}},
	{name:"高海志満",       color:"#fff", group:{"Aqours2":1}},
	{name:"よしみ",         color:"#fff", group:{"Aqours2":1}},
	{name:"いつき",         color:"#fff", group:{"Aqours2":1}},
	{name:"むつ",           color:"#fff", group:{"Aqours2":1}},
	{name:"しいたけ",       color:"#fff", group:{"Aqours2":1}},
	{name:"わたあめ",       color:"#fff", group:{"Aqours2":1}},
	{name:"あんこ",         color:"#fff", group:{"Aqours2":1}},
	{name:"鹿角理亞",       color:"#fff", group:{"Aqours2":1}},
	{name:"鹿角聖良",       color:"#fff", group:{"Aqours2":1}},

	{name:"ちかりこ",       color:"#ffcdb7", color2:"#ffc8d2", group:{"AqoursCP":1}},
	{name:"ちかなん",       color:"#ffcdb7", color2:"#b6eae7", group:{"AqoursCP":1}},
	{name:"ちかダイ",       color:"#ffcdb7", color2:"#fdc2c7", group:{"AqoursCP":1}},
	{name:"ようちか",       color:"#c4e5fe", color2:"#ffcdb7", group:{"AqoursCP":1}},
	{name:"ちかよし",       color:"#ffcdb7", color2:"#d9e9f0", group:{"AqoursCP":1}},
	{name:"ちかまる",       color:"#ffcdb7", color2:"#f5eb9c", group:{"AqoursCP":1}},
	{name:"ちかまり",       color:"#ffcdb7", color2:"#ecd1f3", group:{"AqoursCP":1}},
	{name:"ちかルビ",       color:"#ffcdb7", color2:"#fbceeb", group:{"AqoursCP":1}},
	{name:"かなりこ",       color:"#b6eae7", color2:"#ffc8d2", group:{"AqoursCP":1}},
	{name:"ダイりこ",       color:"#fdc2c7", color2:"#ffc8d2", group:{"AqoursCP":1}},
	{name:"ようりこ",       color:"#c4e5fe", color2:"#ffc8d2", group:{"AqoursCP":1}},
	{name:"よしりこ",       color:"#d9e9f0", color2:"#ffc8d2", group:{"AqoursCP":1}},
	{name:"りこまる",       color:"#ffc8d2", color2:"#f5eb9c", group:{"AqoursCP":1}},
	{name:"りこまり",       color:"#ffc8d2", color2:"#ecd1f3", group:{"AqoursCP":1}},
	{name:"りこルビ",       color:"#ffc8d2", color2:"#fbceeb", group:{"AqoursCP":1}},
	{name:"かなダイ",       color:"#b6eae7", color2:"#fdc2c7", group:{"AqoursCP":1}},
	{name:"ようかな",       color:"#c4e5fe", color2:"#b6eae7", group:{"AqoursCP":1}},
	{name:"かなよし",       color:"#b6eae7", color2:"#d9e9f0", group:{"AqoursCP":1}},
	{name:"かなまる",       color:"#b6eae7", color2:"#f5eb9c", group:{"AqoursCP":1}},
	{name:"かなまり",       color:"#b6eae7", color2:"#ecd1f3", group:{"AqoursCP":1}},
	{name:"かなルビ",       color:"#b6eae7", color2:"#fbceeb", group:{"AqoursCP":1}},
	{name:"ようダイ",       color:"#c4e5fe", color2:"#fdc2c7", group:{"AqoursCP":1}},
	{name:"ダイよし",       color:"#fdc2c7", color2:"#d9e9f0", group:{"AqoursCP":1}},
	{name:"ダイまる",       color:"#fdc2c7", color2:"#f5eb9c", group:{"AqoursCP":1}},
	{name:"ダイマリ",       color:"#fdc2c7", color2:"#ecd1f3", group:{"AqoursCP":1}},
	{name:"ダイルビ",       color:"#fdc2c7", color2:"#fbceeb", group:{"AqoursCP":1}},
	{name:"ようよし",       color:"#c4e5fe", color2:"#d9e9f0", group:{"AqoursCP":1}},
	{name:"ようまる",       color:"#c4e5fe", color2:"#f5eb9c", group:{"AqoursCP":1}},
	{name:"ようまり",       color:"#c4e5fe", color2:"#ecd1f3", group:{"AqoursCP":1}},
	{name:"ようルビ",       color:"#c4e5fe", color2:"#fbceeb", group:{"AqoursCP":1}},
	{name:"よしまる",       color:"#d9e9f0", color2:"#f5eb9c", group:{"AqoursCP":1}},
	{name:"よしまり",       color:"#d9e9f0", color2:"#ecd1f3", group:{"AqoursCP":1}},
	{name:"よしルビ",       color:"#d9e9f0", color2:"#fbceeb", group:{"AqoursCP":1}},
	{name:"まるまり",       color:"#f5eb9c", color2:"#ecd1f3", group:{"AqoursCP":1}},
	{name:"ルビまる",       color:"#fbceeb", color2:"#f5eb9c", group:{"AqoursCP":1}},
	{name:"ルビまり",       color:"#fbceeb", color2:"#ecd1f3", group:{"AqoursCP":1}},

	{name:"上原歩夢",       color:"#edc5ce", group:{"Niji":1}},
	{name:"中須かすみ",     color:"#e8e089", group:{"Niji":1}},
	{name:"桜坂しずく",     color:"#bee0ed", group:{"Niji":1}},
	{name:"朝香果林",       color:"#c0cafa", group:{"Niji":1}},
	{name:"宮下愛",         color:"#fdb792", group:{"Niji":1}},
	{name:"近江彼方",       color:"#d3b8e5", group:{"Niji":1}},
	{name:"優木せつ菜",     color:"#f9a6aa", group:{"Niji":1}},
	{name:"エマ・ヴェルデ", color:"#c8edbe", group:{"Niji":1}},
	{name:"天王寺璃奈",     color:"#cfd0e3", group:{"Niji":1}},
	
	{name:"桜坂しずく",    color:"#acf", group:{"Seiran":1}},
	{name:"一之瀬マリカ",  color:"#acf", group:{"Seiran":1}},
	{name:"永山みなみ",    color:"#acf", group:{"Seiran":1}},
	{name:"杉崎亜矢",      color:"#acf", group:{"Seiran":1}},
	{name:"鳥居歩美",      color:"#acf", group:{"Seiran":1}},
	{name:"九条聖来",      color:"#acf", group:{"Seiran":1}},
	{name:"田中さち子",    color:"#acf", group:{"Seiran":1}},
	{name:"篠宮あきる",    color:"#acf", group:{"Seiran":1}},
	{name:"藤城悠弓",      color:"#acf", group:{"Seiran":1}},
	{name:"宮下ココ",      color:"#fbb", group:{"Shino":1}},
	{name:"結城紗菜",      color:"#fbb", group:{"Shino":1}},
	{name:"クリスティーナ",color:"#fbb", group:{"Shino":1}},
	{name:"御堂優理",      color:"#fbb", group:{"Shino":1}},
	{name:"神谷理華",      color:"#fbb", group:{"Shino":1}},
	{name:"近江彼方",      color:"#fbb", group:{"Shino":1}},
	{name:"近江遥",        color:"#fbb", group:{"Shino":1}},
	{name:"支倉かさね",    color:"#fbb", group:{"Shino":1}},
	{name:"吉川瑞希",      color:"#fbb", group:{"Shino":1}},
	{name:"逢沢遊宇",      color:"#bda", group:{"Chitose":1}},
	{name:"西村文絵",      color:"#bda", group:{"Chitose":1}},
	{name:"菊池朱美",      color:"#bda", group:{"Chitose":1}},
	{name:"須田いるか",    color:"#bda", group:{"Chitose":1}},
	{name:"佐伯麗音",      color:"#bda", group:{"Chitose":1}},
	{name:"森嶋ななか",    color:"#bda", group:{"Chitose":1}},
	{name:"下園咲",        color:"#bda", group:{"Chitose":1}},
	{name:"多々良るう",    color:"#bda", group:{"Chitose":1}},
	{name:"白木凪",        color:"#bda", group:{"Chitose":1}},
	{name:"黒崎隼",        color:"#eda", group:{"Touoh":1}},
	{name:"門田剣",        color:"#eda", group:{"Touoh":1}},
	{name:"設楽ふみ",      color:"#eda", group:{"Touoh":1}},
	{name:"桐原優香",      color:"#eda", group:{"Touoh":1}},
	{name:"斉木風",        color:"#eda", group:{"Touoh":1}},
	{name:"紫藤美咲",      color:"#eda", group:{"Touoh":1}},
	{name:"綾小路姫乃",    color:"#eda", group:{"Touoh":1}},
	{name:"白瀬小雪",      color:"#eda", group:{"Touoh":1}},
	{name:"相川涼",        color:"#eda", group:{"Touoh":1}},
	{name:"坂巻千鶴子",    color:"#cae", group:{"Shion":1}},
	{name:"志賀仁美",      color:"#cae", group:{"Shion":1}},
	{name:"福原命",        color:"#cae", group:{"Shion":1}},
	{name:"鬼崎アキラ",    color:"#cae", group:{"Shion":1}},
	{name:"月島結架",      color:"#cae", group:{"Shion":1}},
	{name:"兵藤さゆり",    color:"#cae", group:{"Shion":1}},
	{name:"黒羽咲良",      color:"#cae", group:{"Shion":1}},
	{name:"黒羽咲夜",      color:"#cae", group:{"Shion":1}},
	{name:"高天原睦月",    color:"#cae", group:{"Shion":1}},
	{name:"蘭花",          color:"#dfb", group:{"YG":1}},
	{name:"ラクシャータ",  color:"#dfb", group:{"YG":1}},
	{name:"レベッカ",      color:"#dfb", group:{"YG":1}},
	{name:"イザベラ",      color:"#dfb", group:{"YG":1}},
	{name:"エマ・ヴェルデ",color:"#dfb", group:{"YG":1}},
	{name:"ジェニファー",  color:"#dfb", group:{"YG":1}},
	{name:"マリア",        color:"#dfb", group:{"YG":1}},
	{name:"レオ",          color:"#dfb", group:{"YG":1}},
	{name:"早乙女紫",      color:"#dfa", group:{"YG":1}}
];

//■リストを変換する
var Member = [];
for(j=0; j<MemberGroup.length; j++){
	Member[j] = [];
}

for(i=0; i<CharList.length; i++){
	obj = CharList[i];
	for(j=0; j<MemberGroup.length; j++){
		for(k=0; k<MemberGroup[j][1].length; k++){
			if(MemberGroup[j][1][k] in obj.group){
				Member[j].push(i);
				break;
			}
		}
	}
}
//シャッフルもしておく
for(i=0; i<MemberGroup.length; i++){
	shuffle(Member[i]);
}

//*********************************************************

var lstMember = new Array();
var parent = new Array();
var equal = new Array();
var rec = new Array();
var cmp1,cmp2;
var head1,head2;
var nrec;

var numQuestion;
var totalSize;
var finishSize;
var finishFlag;
var SortingGroup;

//変数の初期化+++++++++++++++++++++++++++++++++++++++++++++
function initList(){
	if(document.starter.CharacterSelect.selectedIndex == 0){ return;} //「選択してください」の場合は無し
	
	SortingGroup = document.starter.CharacterSelect.selectedIndex-1;
	var n = 0;
	var mid;
	var i;
	
	lstMember = new Array();
	parent = new Array();
	equal = new Array();
	rec = new Array();
	cmp1,cmp2;
	head1,head2;
	nrec;

	numQuestion;
	totalSize;
	finishSize;
	finishFlag;

	//ソートすべき配列
	lstMember[n] = new Array();
	for (i=0; i<Member[SortingGroup].length; i++) {
		lstMember[n][i] = i;
	}
	
	parent[n] = -1;
	totalSize = 0;
	n++;

	for (i=0; i<lstMember.length; i++) {
		//要素数が２以上なら２分割し、
		//分割された配列をlstMemberの最後に加える
		if(lstMember[i].length>=2) {
			mid = Math.ceil(lstMember[i].length/2);
			lstMember[n] = new Array();
			lstMember[n] = lstMember[i].slice(0,mid);
			totalSize += lstMember[n].length;
			parent[n] = i;
			n++;
			lstMember[n] = new Array();
			lstMember[n] = lstMember[i].slice(mid,lstMember[i].length);
			totalSize += lstMember[n].length;
			parent[n] = i;
			n++;
		}
	}

	//保存用配列
	for (i=0; i<Member[SortingGroup].length; i++) {
		rec[i] = 0;
	}
	nrec = 0;

	//引き分けの結果を保存するリスト
	//キー：リンク始点の値
	// 値 ：リンク終点の値
	for (i=0; i<=Member[SortingGroup].length; i++) {
		equal[i] = -1;
	}

	cmp1 = lstMember.length-2;
	cmp2 = lstMember.length-1;
	head1 = 0;
	head2 = 0;
	numQuestion = 1;
	finishSize = 0;
	finishFlag = 0;

	showImage();
}

//リストのソート+++++++++++++++++++++++++++++++++++++++++++
//flag：比較結果
//  -1：左を選択
//   0：引き分け
//   1：右を選択
function sortList(flag){
	var i;
	var str;

	//recに保存
	if (flag<0) {
		rec[nrec] = lstMember[cmp1][head1];
		head1++;
		nrec++;
		finishSize++;
		while (equal[rec[nrec-1]]!=-1) {
			rec[nrec] = lstMember[cmp1][head1];
			head1++;
			nrec++;
			finishSize++;
		}
	}
	else if (flag>0) {
		rec[nrec] = lstMember[cmp2][head2];
		head2++;
		nrec++;
		finishSize++;
		while (equal[rec[nrec-1]]!=-1) {
			rec[nrec] = lstMember[cmp2][head2];
			head2++;
			nrec++;
			finishSize++;
		}
	}
	else {
		rec[nrec] = lstMember[cmp1][head1];
		head1++;
		nrec++;
		finishSize++;
		while (equal[rec[nrec-1]]!=-1) {
			rec[nrec] = lstMember[cmp1][head1];
			head1++;
			nrec++;
			finishSize++;
		}
		equal[rec[nrec-1]] = lstMember[cmp2][head2];
		rec[nrec] = lstMember[cmp2][head2];
		head2++;
		nrec++;
		finishSize++;
		while (equal[rec[nrec-1]]!=-1) {
			rec[nrec] = lstMember[cmp2][head2];
			head2++;
			nrec++;
			finishSize++;
		}
	}

	//片方のリストを走査し終えた後の処理
	if (head1<lstMember[cmp1].length && head2==lstMember[cmp2].length) {
		//リストcmp2が走査済 - リストcmp1の残りをコピー
		while (head1<lstMember[cmp1].length){
			rec[nrec] = lstMember[cmp1][head1];
			head1++;
			nrec++;
			finishSize++;
		}
	}
	else if (head1==lstMember[cmp1].length && head2<lstMember[cmp2].length) {
		//リストcmp1が走査済 - リストcmp2の残りをコピー
		while (head2<lstMember[cmp2].length){
			rec[nrec] = lstMember[cmp2][head2];
			head2++;
			nrec++;
			finishSize++;
		}
	}

	//両方のリストの最後に到達した場合は
	//親リストを更新する
	if (head1==lstMember[cmp1].length && head2==lstMember[cmp2].length) {
		for (i=0; i<lstMember[cmp1].length+lstMember[cmp2].length; i++) {
			lstMember[parent[cmp1]][i] = rec[i];
		}
		lstMember.pop();
		lstMember.pop();
		cmp1 = cmp1-2;
		cmp2 = cmp2-2;
		head1 = 0;
		head2 = 0;

		//新しい比較を行う前にrecを初期化
		if (head1==0 && head2==0) {
			for (i=0; i<Member.length; i++) {
				rec[i] = 0;
			}
			nrec = 0;
		}
	}

	if (cmp1<0) {
		str = "Battle No."+(numQuestion-1)+"<br>"+Math.floor(finishSize*100/totalSize)+"% sorted.";
		document.getElementById("battleNumber").innerHTML = str;

		showResult();
		finishFlag = 1;
	}
	else {
		showImage();
	}
}

//結果の表示+++++++++++++++++++++++++++++++++++++++++++++++
function showResult() {
	var ranking = 1;
	var sameRank = 1;
	var str = "";
	var num = 0;
	var i;
	//ヘッダー
	str += '<table class="resultTable" align="center"><tr>'
	+ '<td class="result"; style="text-align:center;">順位</td>'
	+ '<td class="result"; style="text-align:center;">名前</td></tr>';

	for (i=0; i<Member[SortingGroup].length; i++) {
		num = Member[SortingGroup][lstMember[0][i]];
		str += 
		'<tr><td class="result"; style="background-color:' + CharList[num].color
		+ '; text-align:right; padding-right:5px;">' +ranking+ '</td>'
		+ '<td class="result"; style="background-color:'
		+ ('color2' in CharList[num] ? CharList[num].color2 : CharList[num].color)
		+ '; padding-left:5px;">' + CharList[num].name + '</td></tr>';

		if (i<Member[SortingGroup].length-1) {
			if (equal[lstMember[0][i]]==lstMember[0][i+1]) {
				sameRank++;
			} else {
				ranking += sameRank;
				sameRank = 1;
			}
		}
	}
	str += "<\/table>";

	document.getElementById("resultField").innerHTML = str;
}

//比較する２つ要素の表示+++++++++++++++++++++++++++++++++++
function showImage() {
	var str0 = "Battle No."+numQuestion+"<br>"+Math.floor(finishSize*100/totalSize)+"% sorted.";
	var str1 = Member[SortingGroup][lstMember[cmp1][head1]];
	var str2 = Member[SortingGroup][lstMember[cmp2][head2]];
	
	document.getElementById("battleNumber").innerHTML = str0;
	document.getElementById("leftField2").innerHTML = CharList[str1].name;
	document.getElementById("rightField2").innerHTML = CharList[str2].name;
	
	document.getElementById("leftField").style.backgroundColor = CharList[str1].color;
	document.getElementById("rightField").style.backgroundColor= CharList[str2].color;

	document.getElementById("leftColor").style.backgroundColor =
	 ('color2' in CharList[str1] ? CharList[str1].color2 : CharList[str1].color);
	document.getElementById("rightColor").style.backgroundColor =
	 ('color2' in CharList[str2] ? CharList[str2].color2 : CharList[str2].color);

	
	numQuestion++;
}

//項目をシャッフル
function shuffle(array) {
  var n = array.length, t, i;

  while (n) {
    i = Math.floor(Math.random() * n--);
    t = array[n];
    array[n] = array[i];
    array[i] = t;
  }

  return array;
}