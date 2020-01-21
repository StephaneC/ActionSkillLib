"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Alexa = require('ask-sdk-core');
const SkillInputUtils_1 = require("./SkillInputUtils");
const template_utils_1 = require("../template.utils");
class SkillTemplate {
    constructor(input) {
        this.input = input;
        this.hasDisplay = new SkillInputUtils_1.SkillInputUtils(input).supportsDisplay();
        this.hasApl = input.requestEnvelope.context.System.device.supportedInterfaces['Alexa.Presentation.APL'] ? true : false;
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
    list(title, tokenTouch, items) {
        if (this.hasDisplay) {
            const myTemplate = {
                type: 'ListTemplate1',
                token: tokenTouch,
                title: title,
                backButton: 'HIDDEN',
                /*backgroundImage: {
                    contentDescription: 'rfm',
                    sources: [{
                        url: 'https://resize-rfm.lanmedia.fr/r/,/img/var/rfm/storage/images/news/rfm-1ere-radio-musicale-adulte-en-ile-de-france-13778/195080-1-fre-FR/RFM-1ere-radio-musicale-adulte-en-Ile-de-France.jpg'
                    }]
                },*/
                listItems: items.map(this.mapItems)
            };
            // add repeat option
            myTemplate.listItems.push({
                token: 'REPEAT',
                textContent: new Alexa.RichTextContentHelper()
                    .withPrimaryText("Ré-écouter")
                    .getTextContent()
            });
            this.input.responseBuilder.addRenderTemplateDirective(myTemplate);
        }
    }
    error() {
        this.input.responseBuilder
            .speak('error')
            .withShouldEndSession(true);
    }
    mapItems(response) {
        return {
            token: response.key,
            textContent: new Alexa.RichTextContentHelper()
                .withPrimaryText(response.value)
                .getTextContent()
        };
    }
}
exports.SkillTemplate = SkillTemplate;
//# sourceMappingURL=SkillTemplate.js.map