"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_on_google_1 = require("actions-on-google");
const ActionInputUtils_1 = require("./ActionInputUtils");
const actionssdk_1 = require("actions-on-google/dist/service/actionssdk");
const template_utils_1 = require("../template.utils");
class ActionTemplate {
    constructor(input) {
        this.input = input;
        this.hasDisplay = new ActionInputUtils_1.ActionInputUtils(input).supportsDisplay();
    }
    card(title, message, image) {
        this.input.ask(this.basicCard(title, message, image));
    }
    suggestions(suggestions) {
        if (suggestions && suggestions.length > 0) {
            this.input.ask(new actionssdk_1.Suggestions(suggestions));
        }
        else {
            console.log('No suggestions supplied');
        }
    }
    simpleMessage(message, reprompt, close) {
        // simple check if have to add speak balise
        message = message.trim();
        if (template_utils_1.isAudio(message) && !message.startsWith('<speak')) {
            message = template_utils_1.addSpeakBalise(message);
        }
        if (close) {
            this.input
                .close(message);
        }
        else {
            console.log('Add message to response ' + message);
            this.input
                .ask(message);
        }
        if (reprompt) {
            this.input.data['reprompt'] = reprompt;
        }
    }
    error(msg) {
        this.input
            .close(msg);
    }
    help(msg, actionsList) {
        this.input
            .ask(msg);
        if (this.hasDisplay && actionsList && actionsList.length > 0) {
            this.input.ask(new actionssdk_1.Suggestions(actionsList));
        }
    }
    list(title, touchToken, items) {
        const list = new actions_on_google_1.List({
            title: title,
            items: this.getItems(items)
        });
        this.input.ask(list);
    }
    interactiveCanvas(url, closeMic = false, data) {
        this.input.ask(new actionssdk_1.HtmlResponse({ url: url, suppress: closeMic, data: data }));
    }
    getItems(items) {
        const it = {};
        items.forEach(i => {
            it[i.key] = {
                synonyms: [
                    i.key,
                    i.value,
                ],
                title: i.value,
                description: i.value2
            };
        });
        return it;
    }
    basicCard(title, text, imgUrl) {
        const card = new actionssdk_1.BasicCard({
            text: text,
            title: title,
            display: 'CROPPED',
        });
        if (imgUrl) {
            card.image = new actions_on_google_1.Image({
                url: imgUrl,
                alt: title,
            });
        }
        return card;
    }
    getMediaObject(title, url, description, imgUrl) {
        const mo = new actions_on_google_1.MediaObject({
            name: title,
            url: url,
            description: description
        });
        if (imgUrl) {
            mo.icon = new actions_on_google_1.Image({
                url: imgUrl,
                alt: title,
            });
        }
        return mo;
    }
}
exports.ActionTemplate = ActionTemplate;
//# sourceMappingURL=ActionTemplate.js.map