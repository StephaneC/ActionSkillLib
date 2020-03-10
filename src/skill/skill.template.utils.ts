export const supportsDisplay = (input): boolean => {
    const event = input.requestEnvelope;
    const hasDisplay =
        event &&
        event.context &&
        event.context.System &&
        event.context.System.device &&
        event.context.System.device.supportedInterfaces &&
        "Display" in event.context.System.device.supportedInterfaces;
    console.log(`peripherique has display = ${hasDisplay}`);
    return hasDisplay;
}

/**
 * @deprecated
 * use template
 */
export const checkHasRoundScreen = (input) => {
    const event = input.requestEnvelope;
    const hasRoundScreen =
        event &&
        event.context &&
        event.context.Viewport &&
        event.context.Viewport.shape &&
        event.context.Viewport.shape === 'ROUND';
    console.log(`peripherique has hasRoundScreen = ${hasRoundScreen}`);
    return hasRoundScreen;
}