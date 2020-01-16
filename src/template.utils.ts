/**
 * check if message has SSML or audio balise 
 * @param msg : message to check
 */
export const isAudio = (msg: string): boolean => {
    return msg.includes('/>') || msg.includes('</audio>');
}

/**
 * Add speak balise to a speech message.
 * @param speech 
 */
export const addSpeakBalise = (speech: string) => {
    return `<speak>${speech}</speak>`;
}

/**
 * Format audio as ssml w3C wanted.
 * @param url 
 * @param display 
 */
export const audioFormat = (url: string, display?) => {
    if (!display) {
        return `<audio src="${url}"></audio>`;
    }
    return `<audio src="${url}"><desc>${display}</desc></audio>`;
}

/**
 * Alexa does NOT implement all ssml audio TAG
 * This is a sanitizer.
 */
export const adaptAudioTagSSMLToAlexa = (ssml): string => {
    return ssml.replace(/<desc>(.*?)<\/desc>/gm, '')
}