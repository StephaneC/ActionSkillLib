"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SkillSessionStorage_1 = require("./SkillSessionStorage");
exports.PersistenceSavingResponseInterceptor = {
    process(handlerInput) {
        console.log('PersistenceSavingResponseInterceptor');
        return handlerInput.attributesManager.savePersistentAttributes();
    },
};
exports.LastResponseSavingResponseInterceptor = {
    process(handlerInput) {
        console.log('LastResponseSavingResponseInterceptor', JSON.stringify(handlerInput.responseBuilder.getResponse()));
        const response = handlerInput.responseBuilder.getResponse();
        const saved = response && Object.keys(response).length > 0;
        const storage = new SkillSessionStorage_1.SkillSessionStorage(handlerInput);
        if (saved) {
            storage.setItem('lastResponse', response);
            console.log('set Last Response', JSON.stringify(response));
        }
        console.log('LastResponseSavingResponseInterceptor - nothing to save');
        return Promise.resolve();
    },
};
//# sourceMappingURL=SkillResponseInterceptor.js.map