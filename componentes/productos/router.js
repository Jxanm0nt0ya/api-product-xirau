const express = require("express");
const router = express.Router();
const controller = require("./controler")
const reponse = require("../../reponse/index");

router.get("/", (req, res) => {
    controller.getProducts()
        .then((productsList) => response.sucess(req, res, productsList))
        .catch((error) => response.error(req, res, " Internal Error", 500))
    //res.send("list products");
});


router.post("/", (req, res) => {
    controller.addProduct(res.body)
        .then((product) => response.sucess(req, res, product, 201))
        .catch((error) => response.error(req, res, "Internal error", 500))
    //res.send("create products");
})

router.patch("/:id", (req, res) => {
    const id = req.params.id;
    const change = req.body;
    controller.updateProduct(id, change)
        .then((changedProduct) => response.sucess(req, res, changedProduct))
        .catch((error) => response.error(req, res, "Internal error", 500))

    // res.send("delete product");
})

router.delete("/id", (req, res) => {
    const id = req.params.id;
    controller.deleteProduct(id)
        .then((deleted) => response.succes(req, res, deleted, 200))
        .catch(() => response.error(req, res, "Internal error", 500))

})


module.exports = router;