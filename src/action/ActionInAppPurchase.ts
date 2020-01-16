import { InAppPurchase } from "../InAppPurchase";
import { Product } from "../product";
import { DialogflowConversation } from "actions-on-google";

export class ActionInAppPurchase implements InAppPurchase {

    input: DialogflowConversation;

    constructor(input: DialogflowConversation) {
        this.input = input;
    }

    async getProducts(): Promise<Array<Product>> {
        //TODO
        return null;
    }

    /**
     * Get list of product bought
     * @param inSkillProductList 
     */
    async getAllBoughtProducts(): Promise<Array<Product>> {
        //TODO
        return null;
    }

    /**
     * Get list of product bought
     * @param inSkillProductList 
     */
    async getAllAvailabeProducts() {
        //TODO
        return null;
    }
}