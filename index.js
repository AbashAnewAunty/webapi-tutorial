const express = require("express");
const app = express();

app.listen(3000, console.log("サーバーが開始されました"));

app.get("/", (req, res) => {
    res.send("プログラミングチュートリアルへようこそ");
});

// お客様情報をサーバーに置いておく
const customers = [
    {title: "田中", id : 1},
    {title: "鈴木", id : 2},
    {title: "橋本", id : 3},
    {title: "安田", id : 4},
    {title: "森田", id : 5},
];

// データを取得できるようにしよう(GETメソッド)
app.get("/api/customers/", (req, res) =>{
    res.send(customers);
});