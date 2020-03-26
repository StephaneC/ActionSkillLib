import {
    HandlerInput,
    ResponseInterceptor,
} from 'ask-sdk-core';
import { SkillSessionStorage } from './SkillSessionStorage';

export const PersistenceSavingResponseInterceptor: ResponseInterceptor = {
    process(handlerInput: HandlerInput): Promise<void> {
        console.log('PersistenceSavingResponseInterceptor');
        return handlerInput.attributesManager.savePersistentAttributes();
    },
};

export const LastResponseSavingResponseInterceptor: ResponseInterceptor = {
    process(handlerInput: HandlerInput): Promise<void> {
        console.log('LastResponseSavingResponseInterceptor', JSON.stringify(handlerInput.responseBuilder.getResponse()));
        const response = handlerInput.responseBuilder.getResponse();
        const saved = response && Object.keys(response).length > 0;
        const storage = new SkillSessionStorage(handlerInput);
        if (saved) {
            storage.setItem('lastResponse', response);
            console.log('set Last Response', JSON.stringify(response));
        }
        console.log('LastResponseSavingResponseInterceptor - nothing to save');
        return Promise.resolve();
    },
};
