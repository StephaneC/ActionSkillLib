import { InAppPurchase } from "../InAppPurchase";
import { Product } from "../product";
import { HandlerInput } from "ask-sdk";
export declare class SkillInAppPurchase implements InAppPurchase {
    input: HandlerInput;
    products: any;
    constructor(input: HandlerInput);
    getProducts(): Promise<Array<Product>>;
    /**
     * Get list of product bought
     * @param inSkillProductList
     */
    getAllBoughtProducts(): Promise<Array<Product>>;
    /**
     * Get list of product bought
     * @param inSkillProductList
     */
    getAllAvailabeProducts(): Promise<Product[]>;
}
