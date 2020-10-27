import { InAppPurchase } from "../InAppPurchase";
import { Product } from "../product";
import { DialogflowConversation } from "actions-on-google";
export declare class ActionInAppPurchase implements InAppPurchase {
    input: DialogflowConversation;
    constructor(input: DialogflowConversation);
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
    getAllAvailabeProducts(): Promise<any>;
}
