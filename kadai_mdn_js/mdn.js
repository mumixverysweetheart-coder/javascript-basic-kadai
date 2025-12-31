//日付の箱(オブジェクト)を作る
const today = new Date();
//MDNで調べた年,月,日,をバラバラに取り出す
const year = today . getFullYear();
const month = today . getMonth() + 1;
const date = today . getDate();

//コンソールへの出力する
console.log(year + '年' + month + '月' + date + '日');