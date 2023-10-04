class CartController {
    contructor (){
        this.CartService = new CartService ();
    }

    newCart = async (req, res) => {
        const cart = await CM.newCart();
    
        if (cart) {
            res.send({status:"ok", message:"El Carrito se creó correctamente!", id:cart._id});
        } else {
            res.status(500).send({status:"error", message:"Error! No se pudo crear el Carrito!"});
        }
    }

    getCart = async (req, res) => {
        const cid = req.params.cid;
        const cart = await CM.getCart(cid);
    
        if (cart) {
            res.send({products:cart.products});
        } else {
            res.status(400).send({status:"error", message:"Error! No se encuentra el ID de Carrito!"});
        }
    }

    addProduct = async (req, res) => {
        const cid = req.params.cid;
        const pid = req.params.pid;
        const result = await CM.addProduct(cid, pid);
    
        if (result) {
            res.send({status:"ok", message:"El producto se agregó correctamente!"});
        } else {
            res.status(400).send({status:"error", message:"Error! No se pudo agregar el Producto al Carrito!"});
        }
    }

    updateCart = async (req, res) => {
        const cid = req.params.cid;
        const products = req.body.products;
        const result = await CM.updateProducts(cid, products);
    
        if (result) {
            res.send({status:"ok", message:"El producto se agregó correctamente!"});
        } else {
            res.status(400).send({status:"error", message:"Error! No se pudo agregar el Producto al Carrito!"});
        }
    }

    updateQuantity = async (req, res) => {
        const cid = req.params.cid;
        const pid = req.params.pid;
        const quantity = req.body.quantity;
        const result = await CM.updateQuantity(cid, pid, quantity);
    
        if (result) {
            res.send({status:"ok", message:"El producto se actualizó correctamente!"});
        } else {
            res.status(400).send({status:"error", message:"Error! No se pudo actualizar el Producto del Carrito!"});
        }
    }

    deleteProduct = async (req, res) => {
        const cid = req.params.cid;
        const pid = req.params.pid;
        const result = await CM.deleteProduct(cid, pid);
    
        if (result) {
            res.send({status:"ok", message:"El producto se eliminó correctamente!"});
        } else {
            res.status(400).send({status:"error", message:"Error! No se pudo eliminar el Producto del Carrito!"});
        }
    }

    deleteProducts = async (req, res) => {
        const cid = req.params.cid;
        const result = await CM.deleteProducts(cid);
    
        if (result) {
            res.send({status:"ok", message:"El carrito se vació correctamente!"});
        } else {
            res.status(400).send({status:"error", message:"Error! No se pudo vaciar el Carrito!"});
        }
    }
}