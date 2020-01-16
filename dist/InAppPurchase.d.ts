import { Product } from "./product";
export interface InAppPurchase {
    getProducts(): Promise<Array<Product>>;
    getAllAvailabeProducts(): Promise<Array<Product>>;
    getAllBoughtProducts(): Promise<Array<Product>>;
}
