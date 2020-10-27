"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptAudioTagSSMLToAlexa = exports.audioFormat = exports.addSpeakBalise = exports.isAudio = void 0;
/**
 * check if message has SSML or audio balise
 * @param msg : message to check
 */
exports.isAudio = (msg) => {
    return msg.includes('/>') || msg.includes('</audio>');
};
/**
 * Add speak balise to a speech message.
 * @param speech
 */
exports.addSpeakBalise = (speech) => {
    return `<speak>${speech}</speak>`;
};
/**
 * Format audio as ssml w3C wanted.
 * @param url
 * @param display
 */
exports.audioFormat = (url, display) => {
    if (!display) {
        return `<audio src="${url}"></audio>`;
    }
    return `<audio src="${url}"><desc>${display}</desc></audio>`;
};
/**
 * Alexa does NOT implement all ssml audio TAG
 * This is a sanitizer.
 */
exports.adaptAudioTagSSMLToAlexa = (ssml) => {
    return ssml.replace(/<desc>(.*?)<\/desc>/gm, '');
};
//# sourceMappingURL=template.utils.js.map