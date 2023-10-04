import { Router } from "express";
import CartManager from "../dao/CartManager.js";
import CartController from "../controllers/cart.controller.js"

const cartsRouter = Router();
const CartController = new CartController();

cartsRouter.post("/", CartController.newCart);

cartsRouter.get("/:cid", CartController.getCart);

cartsRouter.post("/:cid/products/:pid", CartController.addProduct);

cartsRouter.put("/:cid", CartController.updateProduct);

cartsRouter.put("/:cid/products/:pid", CartController.updateQuantity);

cartsRouter.delete("/:cid/products/:pid", CartController.deleteProduct);

cartsRouter.delete("/:cid", CartController.deleteProducts);

export default cartsRouter;