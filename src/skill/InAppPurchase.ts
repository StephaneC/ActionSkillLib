import { InAppPurchase } from "../InAppPurchase";
import { Product } from "../product";
import { HandlerInput } from "ask-sdk";

export class SkillInAppPurchase implements InAppPurchase {

    input: HandlerInput;
    products;

    constructor(input: HandlerInput) {
        this.input = input;
    }

    async getProducts(): Promise<Array<Product>> {
        const locale = this.input.requestEnvelope.request.locale;
        const ms = this.input.serviceClientFactory.getMonetizationServiceClient();
        if (!this.products) {
            this.products = await ms.getInSkillProducts(locale);
        }

        console.log('getInSkillProducts ', JSON.stringify(this.products));
        // TODO manage if result contains not all product list
        return this.products.inSkillProducts;
    }

    /**
     * Get list of product bought
     * @param inSkillProductList 
     */
    async getAllBoughtProducts(): Promise<Array<Product>> {
        const inSkillProductList = await this.getProducts();
        if (!inSkillProductList) return null;
        const entitledProductList = inSkillProductList.filter(record => record.activeEntitlementCount > 0);
        return entitledProductList;
    }

    /**
     * Get list of product bought
     * @param inSkillProductList 
     */
    async getAllAvailabeProducts() {
        const inSkillProductList = await this.getProducts();
        if (!inSkillProductList) return null;
        const entitledProductList = inSkillProductList.filter(record => record.entitled === 'NOT_ENTITLED' && record.purchasable === 'PURCHASABLE');
        return entitledProductList;
    }
}