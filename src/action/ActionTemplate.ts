import { Template } from "../Template";
import { DialogflowConversation, MediaObject, Image, List } from "actions-on-google";
import { BasicCard, Suggestions, HtmlResponse } from "actions-on-google/dist/service/actionssdk";
import { addSpeakBalise, isAudio } from "../template.utils";
import { formatUrlHttps } from "../UrlUtils";


export class ActionTemplate implements Template {

    input: DialogflowConversation;
    readonly hasDisplay: boolean;
    readonly hasRoundScreen: boolean = false;

    constructor(input: DialogflowConversation) {
        this.input = input;
        this.hasDisplay = this.input.screen;
    }    

    playAudio(url: string, title: string, subtitle: string, img: string, backgroundImg: string, token: string, offset: number) {
        this.input.ask(new MediaObject({
            name: title,
            url: formatUrlHttps(url),
            description: subtitle,
            icon: new Image({
              url: img,
              alt: title,
            }),
          }));
    }

    playLater(url: string, title: string, subtitle: string, img: string, backgroundImg: string, token: string, offset: number) {
        //TODO
    }

    stopAudio(close: boolean) {
        //TODO
        this.input.close();
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

    list(title: string, touchToken: string, items: Array<{key: string, value: string, value2?: string, synonyms?: Array<string>, icon?: string}>): void {
        const list = new List({
            title: title,
            items: this.getItems(items)
          });
        this.input.ask(list);
    }

    interactiveCanvas(url: string, closeMic: boolean = false, data?: any): void {
        this.input.ask(new HtmlResponse({url:url, suppress: closeMic, data: data}))
    }

    private getItems(items: Array<{key: string, value: string, value2?: string, synonyms?: Array<string>, icon?: string}>) {
        const it = {};
        items.forEach(i => {
            const syn = (i.synonyms && i.synonyms.length > 0)? i.synonyms : [i.key, i.value];
            it[i.key] = {
                synonyms: Array.from(new Set(syn)),
                title: i.value,
                description: i.value2,
                icon: i.icon
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
}