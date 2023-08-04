//var = JavaScript'in eski sürümlerinde en yaygın olarak kullanılan anahtar kelime olan var, değişken tanımlamak için kullanılır.

var player1 = "Muhamet";
var player2 = "Alperen";

//let: ES6 (ECMAScript 2015) ile tanıtılan bir değişken tanımlama anahtar kelimesidir. "let" ile tanımlanan değişkenler block scope'a sahiptir, yani tanımlandığı blok içinde geçerlidir. Bu, değişkenin sadece tanımlandığı kod bloğu içinde erişilebilir olduğu anlamına gelir.

let playerScore1 = 3;
let playerScore2 = 12;
if (playerScore1 > playerScore2) {
    let totalScore = playerScore1 + playerScore2;
    console.log(totalScore); // 15
}


//const: ES6 sürümünde eklenen const anahtar kelimesi, değişken tanımlamak için kullanılır. Fakat const değişkenleri sadece tanımlandıkları anda değer atanabilir ve daha sonra değiştirilemez.

const PI = 3.14;
const gravity = 9.8;

//Sabit değiştirelemez şeylerdir.
//Örneğin: PI sayısı, Yer çekimi kuvveti.
