/**
 * check if message has SSML or audio balise
 * @param msg : message to check
 */
export declare const isAudio: (msg: string) => boolean;
/**
 * Add speak balise to a speech message.
 * @param speech
 */
export declare const addSpeakBalise: (speech: string) => string;
/**
 * Format audio as ssml w3C wanted.
 * @param url
 * @param display
 */
export declare const audioFormat: (url: string, display?: any) => string;
/**
 * Alexa does NOT implement all ssml audio TAG
 * This is a sanitizer.
 */
export declare const adaptAudioTagSSMLToAlexa: (ssml: any) => string;
