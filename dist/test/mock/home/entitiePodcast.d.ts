export declare const responseId: string;
export declare namespace queryResult {
    export const queryText: string;
    export namespace parameters {
        export const podcast: string;
    }
    export const allRequiredParamsPresent: boolean;
    export const fulfillmentMessages: {
        "text": {
            "text": string[];
        };
    }[];
    export const outputContexts: ({
        "name": string;
        "parameters": {
            "podcast": string;
            "podcast.original": string;
            "data"?: undefined;
            "no-input"?: undefined;
            "no-match"?: undefined;
        };
        "lifespanCount"?: undefined;
    } | {
        "name": string;
        "lifespanCount": number;
        "parameters": {
            "data": string;
            "podcast": string;
            "podcast.original": string;
            "no-input"?: undefined;
            "no-match"?: undefined;
        };
    } | {
        "name": string;
        "parameters": {
            "no-input": number;
            "no-match": number;
            "podcast": string;
            "podcast.original": string;
            "data"?: undefined;
        };
        "lifespanCount"?: undefined;
    })[];
    export namespace intent {
        export const name: string;
        export const displayName: string;
    }
    export const intentDetectionConfidence: number;
    export const languageCode: string;
}
export declare namespace originalDetectIntentRequest {
    export const source: string;
    export const version: string;
    export namespace payload {
        export namespace user {
            export const permissions: string[];
            export const locale: string;
            export const lastSeen: string;
            export const userStorage: string;
            export const userVerificationStatus: string;
        }
        export const conversation: {
            "conversationId": string;
            "type": string;
            "conversationToken": string;
        };
        export const inputs: {
            "intent": string;
            "rawInputs": {
                "inputType": string;
                "query": string;
            }[];
            "arguments": {
                "name": string;
                "rawText": string;
                "textValue": string;
            }[];
        }[];
        export namespace surface {
            export const capabilities: {
                "name": string;
            }[];
        }
        export const isInSandbox: boolean;
        export const availableSurfaces: {
            "capabilities": {
                "name": string;
            }[];
        }[];
        export const requestType: string;
    }
}
export declare const session: string;
