const express = require("express");
const app = express();
const routerApi = require("./router/index")


//app.use("/", (req, res) => {
//res.send("Todo Bien")
//})

app.use(express.json());

app.listen(3100, () => {
    console.log("listen on http://localhost:3100");
})