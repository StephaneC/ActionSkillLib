import { Template } from "../Template";
import { DialogflowConversation, MediaObject, Image, List } from "actions-on-google";
import { ActionInputUtils } from "./ActionInputUtils";
import { BasicCard, Suggestions, HtmlResponse } from "actions-on-google/dist/service/actionssdk";
import { addSpeakBalise, isAudio } from "../template.utils";


export class ActionTemplate implements Template {

    input: DialogflowConversation;
    hasDisplay: boolean;

    constructor(input: DialogflowConversation) {
        this.input = input;
        this.hasDisplay = new ActionInputUtils(input).supportsDisplay();
    }

    card(title: string, message: string, image: string) {
        this.input.ask(this.basicCard(title, message, image));
    }

    suggestions(suggestions: Array<string>) {
        if (suggestions && suggestions.length > 0) {
            this.input.ask(new Suggestions(suggestions));
        } else {
            console.log('No suggestions supplied');
        }
    }

    simpleMessage(message: string, reprompt: string, close: boolean) {
        // simple check if have to add speak balise
        message = message.trim();
        if (isAudio(message) && !message.startsWith('<speak')) {
            message = addSpeakBalise(message);
        }
        if (close) {
            this.input
                .close(message)
        } else {
            console.log('Add message to response ' + message);
            this.input
                .ask(message)
        }
        if (reprompt) {
            this.input.data['reprompt'] = reprompt;
        }
    }

    error(msg: string) {
        this.input
            .close(msg)
    }


    help (msg: string, actionsList: Array<string>): void {
        this.input
            .ask(msg)
        if (this.hasDisplay && actionsList && actionsList.length > 0) {
            this.input.ask(new Suggestions(actionsList));
        }
    }

    list(title: string, touchToken: string, items: Array<{key: string, value: string}>): void {
        const list = new List({
            title: title,
            items: this.getItems(items)
          });
        this.input.ask(list);
    }

    interactiveCanvas(url: string, closeMic: boolean = false, data?: any): void {
        this.input.ask(new HtmlResponse({url:url, suppress: closeMic, data: data}))
    }

    private getItems(items: Array<{key: string, value: string}>) {
        const it = {};
        items.forEach(i => {
            it[i.key] = {
                synonyms: [
                  i.key,
                  i.value,
                ],
                title: i.value,
              }
        });
        return it;
    } 

    private basicCard(title: string, text: string, imgUrl?: string): BasicCard {
        const card = new BasicCard({
            text: text,
            title: title,
            display: 'CROPPED',
        });
        if (imgUrl) {
            card.image = new Image({
                url: imgUrl,
                alt: title,
            });
        }
        return card;
    }

    getMediaObject(title, url: string, description: string, imgUrl?: string): MediaObject {
        const mo: MediaObject = new MediaObject({
            name: title,
            url: url,
            description: description

        });
        if (imgUrl) {
            mo.icon = new Image({
                url: imgUrl,
                alt: title,
            });
        }
        return mo;
    }
}