const Alexa = require('ask-sdk-core');
import { Directive } from 'ask-sdk-model';
import { interfaces } from 'ask-sdk-model';
import { HandlerInput } from 'ask-sdk';
import { Template } from '../Template';
import { addSpeakBalise, isAudio, adaptAudioTagSSMLToAlexa } from '../template.utils';
import { formatUrlHttps } from '../UrlUtils';
import { supportsDisplay, checkHasRoundScreen } from './skill.template.utils';

export class SkillTemplate implements Template {

    input: HandlerInput;
    hasApl: boolean;
    readonly hasDisplay: boolean;
    readonly hasRoundScreen: boolean;


    constructor(input: HandlerInput) {
        this.input = input;
        this.hasApl = input.requestEnvelope.context.System.device.supportedInterfaces['Alexa.Presentation.APL'] ? true : false;
        this.hasDisplay = supportsDisplay(input);
        this.hasRoundScreen = checkHasRoundScreen(input);
    }

    private addBackground(title: string, subtitle: string, img: string, backgroundImg: string) {
        const directive = <interfaces.audioplayer.PlayDirective>this.input.responseBuilder.getResponse().directives[0]
        directive.audioItem['metadata'] = {
            title: title,
            subtitle: subtitle
        };
        if (img) {
            directive.audioItem['metadata'].art = {
                contentDescription: title,
                sources: [{
                    url: formatUrlHttps(img)
                }]
            }
        }
        if (backgroundImg) {
            directive.audioItem['metadata'].backgroundImage = {
                contentDescription: title,
                sources: [{
                    url: formatUrlHttps(img)
                }]
            }
        }
    }

    askNotification() {
        const permissions = ['alexa::devices:all:notifications:write'];
        this.input.responseBuilder.withAskForPermissionsConsentCard(permissions);
    }

    playAudio(url: string, title: string, subtitle: string, img: string, backgroundImg: string, token: string, offset: number) {
        this.input.responseBuilder
            .addAudioPlayerPlayDirective('REPLACE_ALL', formatUrlHttps(url), token, offset)
            .withShouldEndSession(true);
        if (this.hasDisplay) {
            this.addBackground(title, subtitle, img, backgroundImg);
        }
    }

    playLater(url: string, title: string, subtitle: string, img: string, backgroundImg: string, token: string, offset: number) {
        this.input.responseBuilder
            .addAudioPlayerPlayDirective('REPLACE_ENQUEUED', formatUrlHttps(url), token, offset)
            .withShouldEndSession(true);
        if (this.hasDisplay) {
            this.addBackground(title, subtitle, img, backgroundImg);
        }
    }

    stopAudio(close: boolean) {
        this.input.responseBuilder
            .addAudioPlayerStopDirective()
            .withShouldEndSession(close);

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
    list(title: string, tokenTouch: string, items: Array<{ key: string, value: string, value2?: string, icon?: string }>, backgroundImage?: { url: string, desc: string }): void {
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

    addApl = (directive: Directive) => {
        if (this.hasApl) {
            this.input.responseBuilder.addDirective(directive);
        }
    }

    error() {
        this.input.responseBuilder
            .speak('error')
            .withShouldEndSession(true);
    }

    private mapItems(response: { key: string, value: string, value2?: string, icon?: string }): interfaces.display.ListItem {
        let item = {
            token: response.key,
            textContent: new Alexa.RichTextContentHelper()
                .withPrimaryText(response.value)
                .withSecondaryText(response.value2)
                .getTextContent()
        }
        if (response.icon) {
            item['image'] = new Alexa.ImageHelper()
                .addImageInstance(response.icon)
        }

        return item;
    }

}
