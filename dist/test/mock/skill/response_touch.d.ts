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
export declare namespace context {
    export namespace Display {
        export const token: string;
    }
    export namespace System {
        export namespace application {
            export const applicationId: string;
        }
        export namespace user {
            export const userId: string;
        }
        export namespace device {
            export const deviceId: string;
            export namespace supportedInterfaces {
                export namespace Display_1 {
                    export const templateVersion: string;
                    export const markupVersion: string;
                }
                export { Display_1 as Display };
            }
        }
        export const apiEndpoint: string;
        export const apiAccessToken: string;
    }
    export namespace Viewport {
        export const experiences: {
            "arcMinuteWidth": number;
            "arcMinuteHeight": number;
            "canRotate": boolean;
            "canResize": boolean;
        }[];
        export const mode: string;
        export const shape: string;
        export const pixelWidth: number;
        export const pixelHeight: number;
        export const dpi: number;
        export const currentPixelWidth: number;
        export const currentPixelHeight: number;
        export const touch: string[];
        export const keyboard: any[];
        export namespace video {
            export const codecs: string[];
        }
    }
}
export declare const request: {
    "type": string;
    "requestId": string;
    "timestamp": string;
    "locale": string;
    "token": string;
};
