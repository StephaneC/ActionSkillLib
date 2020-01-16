"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SkillInAppPurchase {
    constructor(input) {
        this.input = input;
    }
    async getProducts() {
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
    async getAllBoughtProducts() {
        const inSkillProductList = await this.getProducts();
        if (!inSkillProductList)
            return null;
        const entitledProductList = inSkillProductList.filter(record => record.activeEntitlementCount > 0);
        return entitledProductList;
    }
    /**
     * Get list of product bought
     * @param inSkillProductList
     */
    async getAllAvailabeProducts() {
        const inSkillProductList = await this.getProducts();
        if (!inSkillProductList)
            return null;
        const entitledProductList = inSkillProductList.filter(record => record.entitled === 'NOT_ENTITLED' && record.purchasable === 'PURCHASABLE');
        return entitledProductList;
    }
}
exports.SkillInAppPurchase = SkillInAppPurchase;
//# sourceMappingURL=InAppPurchase.js.map