import { Router } from "express";
import ProductManager from "../dao/ProductManager.js";
import ProductsController from "../controllers/products.controlers.js";

const productsRouter = Router();
const productController = new productController();

productsRouter.get("/", ProductsController.getProducts);

productsRouter.get("/:pid", ProductsController.getProductsById);

productsRouter.post("/", ProductsController.addProduct);

productsRouter.put("/:pid", ProductsController.updateProduct);

productsRouter.delete("/:pid", ProductsController.deleteProduct);

export default productsRouter;