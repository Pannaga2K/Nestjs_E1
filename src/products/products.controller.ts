import {Controller, Get, Post, Patch, Delete, Body, Param, Render, Res} from "@nestjs/common";
import {ProductsService} from "./products.service";

@Controller("products")
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {

    }

    // ADD
    @Get("add")
    @Render("crud/addProduct")
    renderFormPage() {
        return ;
    }

    @Post()
    addProduct(@Body("title") prodTitle: string, @Body("description") prodDesc: string, @Body("price") prodPrice: number, @Res() res) {
        console.log(prodTitle);
        console.log(res);
        const generatedId = this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
        return res.redirect("/products");
    }

    // FETCH
    @Get()
    @Render("crud/products")
    getAllProducts() {
        const allProducts = this.productsService.getProducts();
        return {products: allProducts};
    }

    // FETCH SINGLE ITEM
    @Get(":id")
    getProduct(@Param("id") prodId: string) {
        return this.productsService.getSingleProduct(prodId);
    }

    // UPDATE
    @Patch(":id")
    updateProduct(@Param("id") prodId: string, @Body("title") prodTitle: string, @Body("description") prodDesc: string, @Body("price") prodPrice: number) {
        this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
        return null;
    }

    // DELETE
    @Delete(":id")
    removeProduct(@Param("id") prodId: string) {
       this.productsService.deleteProduct(prodId);
       return null; 
    }

}