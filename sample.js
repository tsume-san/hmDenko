onload = sample;

/*
やる気のないサンプル
*/
function sample(){
	/*
	色々設定
	*/
	var obj = new hmDenko();

	obj.str         = "SAMPLE()"; // 表示文字列指定
	obj.fillElem    = "<span style=\"color:#0f0\">■</span>"; // 文字部分になる要素指定
	obj.spaceElem   = "<span style=\"color:#030\">■</span>"; // 背景になる要素指定
	obj.parentElem  = "<div class=\"sample\">"; // レコード全体の親要素指定
	obj.margin      = 1; // 文字間のカラム数指定
	obj.colLenLimit = 60; // 全体カラム数指定
	obj.leed = 1; // 左方向へのシフト数指定(負の値は左方向)

	/*
	実行
	*/
	var res = obj.lightUp(); // 処理結果の配列(要素5つ)が戻る

	var denkou = res[0];
	denkou += res[1];
	denkou += res[2];
	denkou += res[3];
	denkou += res[4];

	document.getElementById("sample").innerHTML = denkou;
	/*
	ここまで。
	*/

	/*
	ここからはムービー的な処理
	*/
	sample_movie(obj);

}

/*
ムービー的な処理
*/
function sample_movie(obj){

	var res = obj.lightUp();

	var denkou = res[0];
	denkou += res[1];
	denkou += res[2];
	denkou += res[3];
	denkou += res[4];

	document.getElementById("sample_movie").innerHTML = denkou;

	// タイマーで連続で処理するとシフト数分ずつ動く
	setTimeout(function(){
			sample_movie(obj);
		},
		100);
}
