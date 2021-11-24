/**
 * 1. const, letなどの変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能

// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可能
// val3 = "const変数を上書き";

// const変数は再宣言不可能
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が変更可能
// const val4 = {
//   name: "Musashi",
//   age: 21
// };
// // console.log(val4);

// val4.name = "武蔵";
// // console.log(val4);

// // プロパティを追加可能
// val4.addres = "Saitama";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// 基本的にはconstを用いる

/**
 * 2. テンプレート文字列
 */

// const name = "武蔵";
// const age = 21;
// // 「私の名前は武蔵です。年齢は21歳です。」と表示させたい。

// // 従来の方法
// const massage1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(massage1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です!`;
// console.log(message2);

/**
 * 3. アロー関数
 */

// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

// // アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 4. 分割代入
 */

// const myProfile = {
//   name: "武蔵",
//   age: 21
// };

// オブジェクトの場合
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です!`;
// console.log(message2);

//配列の場合
// const myProfile = ["武蔵", 21];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です!`;
// console.log(message4);

/**
 * 5. デフォルト値、引数など
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん！`);
// sayHello("武蔵");

/**
 * 6. スプレッド構文 ...
 */

// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1); // 配列の中身を順番に処理

// const sumFanc = (num1, num2) => console.log(num1 + num2);
// sumFanc(arr1[0], arr1[1]);
// sumFanc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// イコールだと片方の値を変更するともう片方の値も変更されてしまう。
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 * 7. mapやfilterを使った配列の処理
 */

// const nameArr = ["田中", "山田", "山本"];

// forを用いた方法
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(`${index}番目は${nameArr[index]}です。`);
// }

// mapを用いた新しい配列の生成
// const nameArr2 = nameArr.map((name) => {
//     return name;
// });
// console.log(nameArr2);

// mapを用いた配列のパリティの表示
// mapは要素、インデックスを返す。
// nameArr.map((name, index) => console.log(`${index}番目は${name}です。`));

// filterを用いた条件に適した配列の生成
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//     return num % 2 === 1;
// });
// console.log(newNumArr);

// 自分の名前以外の名前に「さん」をつけた新しい配列を生成。
// const newNameArr = nameArr.map((name) => {
//     if (name === "山本") {
//         return name;
//     } else {
//         return `${name}さん`;
//     }
// });
// console.log(newNameArr);

/**
 * 8. 三項演算子
 */

// ある条件 ？　条件がtrueの時：条件がfalseの時 が返される
// const val1 = 1 < 0 ? "treuです。" : "falseです。";
// console.log(val1);

// const num = 1300;
// 金額のような3桁区切りのような表示をする。
// console.log(num.toLocaleString());

// numの型によって動作を変える。
// const formattedNum =
//     typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//     return num1 + num2 > 100 ? "100を超えています。" : "許容範囲内です。";
// };

// console.log(checkSum(50, 60));

/**
 * 9. 論理演算子の本当の意味を知ろう &&, \\
 */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//     console.log("1か2はtrueになる。");
// }
// if (flag1 && flag2) {
//     console.log("1も2もtrueになる。");
// }

// || は左側がfalseなら右側を返す。trueなら左側を返す。
// const num = 100;
// const fee = num || "金額未設定です。";
// console.log(fee);

// && は左側がtrueなら右側を返す。falseなら左側を返す。
// const num2 = null;
// const fee2 = num2 && "何か設定されました。";
// console.log(fee2);
