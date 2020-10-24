export declare const version: string;
export declare const session: {
    "new": boolean;
    "sessionId": string;
    "application": {
        "applicationId": string;
    };
    "attributes": {
        "asked": string[];
    };
    "user": {
        "userId": string;
    };
};
export declare const context: {
    "Display": {
        "token": string;
    };
    "Alexa.Presentation.APL": {
        "token": string;
        "version": string;
        "componentsVisibleOnScreen": {
            "uid": string;
            "id": string;
            "position": string;
            "type": string;
            "tags": {
                "viewport": {};
            };
            "children": {
                "uid": string;
                "id": string;
                "position": string;
                "type": string;
                "tags": {
                    "focused": boolean;
                    "listItem": {
                        "index": number;
                    };
                    "clickable": boolean;
                    "ordinal": number;
                };
                "entities": any[];
            }[];
            "entities": any[];
        }[];
    };
    "System": {
        "application": {
            "applicationId": string;
        };
        "user": {
            "userId": string;
        };
        "device": {
            "deviceId": string;
            "supportedInterfaces": {
                "Display": {
                    "templateVersion": string;
                    "markupVersion": string;
                };
                "Alexa.Presentation.APL": {
                    "runtime": {
                        "maxVersion": string;
                    };
                };
            };
        };
        "apiEndpoint": string;
        "apiAccessToken": string;
    };
    "Viewport": {
        "experiences": {
            "arcMinuteWidth": number;
            "arcMinuteHeight": number;
            "canRotate": boolean;
            "canResize": boolean;
        }[];
        "mode": string;
        "shape": string;
        "pixelWidth": number;
        "pixelHeight": number;
        "dpi": number;
        "currentPixelWidth": number;
        "currentPixelHeight": number;
        "touch": string[];
        "keyboard": any[];
        "video": {
            "codecs": string[];
        };
    };
};
export declare const request: {
    "type": string;
    "requestId": string;
    "timestamp": string;
    "locale": string;
    "arguments": number[];
    "components": {};
    "source": {
        "type": string;
        "handler": string;
        "id": string;
        "value": boolean;
    };
    "token": string;
};
