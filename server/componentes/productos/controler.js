const store = require("./store");

function addProduct(product) {
    return new Promise((resolve, reject) => {
        if (Object.entries(product).length === 0) {
            console.log("[Productscontroller]: Product doen t have content empty");
        }
        store.add(product)
        resolve(product)
    });
};

function getproducts() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
};

function updateProduct(id, ChangeProduct) {
    return new Promise(async (resolve, reject) => {
        if (id || !ChangeProduct) {
            console.log("[updateProduct] Error Data");
            reject("Data invalid in method patch")
        };

        const result = await store.update(id, ChangeProduct);
        resolve(result);
    });
};

function deleteProduct(id) {
    return new Promise(async (resolve, reject) => {

    })
}