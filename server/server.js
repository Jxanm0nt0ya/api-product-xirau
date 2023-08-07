const express = require("express");
//const routerApi = require("./router/index")
const app = express();


//app.use("/", (req, res) => {
//res.send("Todo Bien")
//})

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Ready!!");
})

routerApp(app);

app.listen(3100, () => {
    console.log("server running");
})



//listen on http://localhost:3100