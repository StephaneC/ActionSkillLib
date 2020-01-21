const Alexa = require('ask-sdk-core');
import { interfaces } from 'ask-sdk-model';
import { HandlerInput } from 'ask-sdk';
import { Template } from '../Template';
import { SkillInputUtils } from './SkillInputUtils';
import { addSpeakBalise, isAudio, adaptAudioTagSSMLToAlexa } from '../template.utils';

export class SkillTemplate implements Template {

    input: HandlerInput;
    hasDisplay: boolean;
    hasApl: boolean;

    constructor(input: HandlerInput) {
        this.input = input;
        this.hasDisplay = new SkillInputUtils(input).supportsDisplay();
        this.hasApl = input.requestEnvelope.context.System.device.supportedInterfaces['Alexa.Presentation.APL']? true: false;
    }

    suggestions(suggestions: Array<string>) {
        //TODO
    }

    card(title: string, message: string, image: string) {
        this.input.responseBuilder.withStandardCard(title, message, image);
    }

    simpleMessage(message: string, reprompt: string, close: boolean) {
        message = adaptAudioTagSSMLToAlexa(message.trim());
        if (isAudio(message) && !message.startsWith('<speak')) {
            message = addSpeakBalise(message);
        }
        this.input.responseBuilder
            .speak(message)
            .reprompt(reprompt)
            .withShouldEndSession(close);
    }

    /**
     * Add list only if hasDisplay
     * @param title 
     * @param tokenTouch 
     * @param items 
     */
    list(title: string, tokenTouch: string, items: Array<{ key: string, value: string, value2?: string }>, backgroundImage?: {url: string, desc: string}): void {
        if (this.hasDisplay) {
            const myTemplate: interfaces.display.Template = {
                type: 'ListTemplate1',
                token: tokenTouch,
                title: title,
                backButton: 'HIDDEN',
                listItems: items.map(this.mapItems)
            }
            if (backgroundImage) {
                myTemplate.backgroundImage = {
                    contentDescription: backgroundImage.desc,
                    sources: [{
                        url: backgroundImage.url
                    }]
                }
            }

            this.input.responseBuilder.addRenderTemplateDirective(myTemplate)
        }
    }

    error() {
        this.input.responseBuilder
            .speak('error')
            .withShouldEndSession(true);
    }

    private mapItems(response: { key: string, value: string, value2?: string }): interfaces.display.ListItem {
        return {
            token: response.key,
            textContent: new Alexa.RichTextContentHelper()
                .withPrimaryText(response.value)
                .withSecondaryText(response.value2)
                .getTextContent()
        }
    }

}
