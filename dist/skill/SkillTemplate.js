"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillTemplate = void 0;
const Alexa = require('ask-sdk-core');
const template_utils_1 = require("../template.utils");
const UrlUtils_1 = require("../UrlUtils");
const skill_template_utils_1 = require("./skill.template.utils");
class SkillTemplate {
    constructor(input) {
        this.addApl = (directive) => {
            if (this.hasApl) {
                this.input.responseBuilder.addDirective(directive);
            }
        };
        this.input = input;
        this.hasDisplay = skill_template_utils_1.supportsDisplay(input);
        this.hasApl = skill_template_utils_1.hasApl(input);
        this.hasRoundScreen = skill_template_utils_1.checkHasRoundScreen(input);
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
    askNotification() {
        const permissions = ['alexa::devices:all:notifications:write'];
        this.input.responseBuilder.withAskForPermissionsConsentCard(permissions);
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
     * Add list only if hasAPL or hasDisplay
     * First, try APL, then display which is deprecated
     * @param title
     * @param tokenTouch
     * @param items
     */
    list(title, tokenTouch, items, backgroundImage, backgroundColor) {
        if (this.hasApl) {
            let bgUrl = null;
            if (backgroundImage)
                bgUrl = backgroundImage.url;
            this.addApl({
                "type": "Alexa.Presentation.APL.RenderDocument",
                "token": "token",
                "datasources": {
                    dataForApl: {
                        "items": items.map(this.mapAplItems)
                    }
                },
                "document": {
                    "type": "APL",
                    "version": "1.5",
                    "import": [
                        {
                            "name": "alexa-layouts",
                            "version": "1.2.0"
                        }
                    ],
                    "mainTemplate": {
                        "parameters": [
                            "dataForApl"
                        ],
                        "items": [
                            {
                                "type": "AlexaTextList",
                                "theme": "${viewport.theme}",
                                "headerTitle": title,
                                // "headerSubtitle": "${textListData.headerSubtitle}",
                                //"headerAttributionImage": "${textListData.headerAttributionImage}",
                                "headerDivider": true,
                                "headerBackButton": true,
                                "headerBackButtonAccessibilityLabel": "back",
                                "headerBackgroundColor": "transparent",
                                /*"headerBackButtonCommand": {
                                  "type": "SendEvent",
                                  "arguments": [
                                    "goBack"
                                  ]
                                },*/
                                "backgroundColor": backgroundColor,
                                "backgroundImageSource": bgUrl,
                                "backgroundScale": "best-fill",
                                "backgroundAlign": "center",
                                "backgroundBlur": false,
                                "hideOrdinal": false,
                                "primaryAction": {
                                    "type": "SendEvent",
                                    "arguments": [
                                        "ListItemSelected",
                                        "${ordinal}",
                                        tokenTouch
                                    ]
                                },
                                "listItems": "${dataForApl.items}"
                            }
                        ]
                    }
                }
            });
        }
        else if (this.hasDisplay) {
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
    mapAplItems(response) {
        let item = {
            primaryText: response.value,
            secondaryText: response.value2,
            secondaryTextPosition: "bottom",
            imageThumbnailSource: response.icon,
        };
        return item;
    }
}
exports.SkillTemplate = SkillTemplate;
//# sourceMappingURL=SkillTemplate.js.map