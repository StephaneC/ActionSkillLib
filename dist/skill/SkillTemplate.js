"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Alexa = require('ask-sdk-core');
const SkillInputUtils_1 = require("./SkillInputUtils");
const template_utils_1 = require("../template.utils");
const UrlUtils_1 = require("../UrlUtils");
class SkillTemplate {
    constructor(input) {
        this.addApl = (directive) => {
            if (this.hasApl) {
                this.input.responseBuilder.addDirective(directive);
            }
        };
        this.input = input;
        this.hasDisplay = new SkillInputUtils_1.SkillInputUtils(input).supportsDisplay();
        this.hasApl = input.requestEnvelope.context.System.device.supportedInterfaces['Alexa.Presentation.APL'] ? true : false;
    }
    addBackground(title, subtitle, img, backgroundImg) {
        const directive = this.input.responseBuilder.getResponse().directives[0];
        directive.audioItem['metadata'] = {
            title: title,
            subtitle: subtitle
        };
        if (img) {
            directive.audioItem['metadata'].art = {
                contentDescription: title,
                sources: [{
                        url: UrlUtils_1.formatUrlHttps(img)
                    }]
            };
        }
        if (backgroundImg) {
            directive.audioItem['metadata'].backgroundImage = {
                contentDescription: title,
                sources: [{
                        url: UrlUtils_1.formatUrlHttps(img)
                    }]
            };
        }
    }
    playAudio(url, title, subtitle, img, backgroundImg, token, offset) {
        this.input.responseBuilder
            .addAudioPlayerPlayDirective('REPLACE_ALL', UrlUtils_1.formatUrlHttps(url), token, offset)
            .withShouldEndSession(true);
        if (this.hasDisplay) {
            this.addBackground(title, subtitle, img, backgroundImg);
        }
    }
    playLater(url, title, subtitle, img, backgroundImg, token, offset) {
        this.input.responseBuilder
            .addAudioPlayerPlayDirective('REPLACE_ENQUEUED', UrlUtils_1.formatUrlHttps(url), token, offset)
            .withShouldEndSession(true);
        if (this.hasDisplay) {
            this.addBackground(title, subtitle, img, backgroundImg);
        }
    }
    stopAudio(close) {
        this.input.responseBuilder
            .addAudioPlayerStopDirective()
            .withShouldEndSession(close);
    }
    suggestions(suggestions) {
        //TODO
    }
    card(title, message, image) {
        this.input.responseBuilder.withStandardCard(title, message, image);
    }
    simpleMessage(message, reprompt, close) {
        message = template_utils_1.adaptAudioTagSSMLToAlexa(message.trim());
        if (template_utils_1.isAudio(message) && !message.startsWith('<speak')) {
            message = template_utils_1.addSpeakBalise(message);
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
    list(title, tokenTouch, items, backgroundImage) {
        if (this.hasDisplay) {
            const myTemplate = {
                type: 'ListTemplate1',
                token: tokenTouch,
                title: title,
                backButton: 'HIDDEN',
                listItems: items.map(this.mapItems)
            };
            if (backgroundImage) {
                myTemplate.backgroundImage = {
                    contentDescription: backgroundImage.desc,
                    sources: [{
                            url: backgroundImage.url
                        }]
                };
            }
            this.input.responseBuilder.addRenderTemplateDirective(myTemplate);
        }
    }
    error() {
        this.input.responseBuilder
            .speak('error')
            .withShouldEndSession(true);
    }
    mapItems(response) {
        let item = {
            token: response.key,
            textContent: new Alexa.RichTextContentHelper()
                .withPrimaryText(response.value)
                .withSecondaryText(response.value2)
                .getTextContent()
        };
        if (response.icon) {
            item['image'] = new Alexa.ImageHelper()
                .addImageInstance(response.icon);
        }
        return item;
    }
}
exports.SkillTemplate = SkillTemplate;
//# sourceMappingURL=SkillTemplate.js.map