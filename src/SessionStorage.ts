import { HandlerInput } from "ask-sdk";
import { DialogflowConversation } from "actions-on-google";

/**
 * Use to store data during this conversation.
 */
export interface SessionStorage {

    input: HandlerInput | DialogflowConversation;

    /**
     * 
     * @param key 
     * @param def default value returned
     */
    getItem(key: string, def?: any): any;
    setItem(key: string, value: any);

    /*setRecommendContext(topics: Array<string>, token: string);
    getRecommendContext(): {topics: Array<string>,podcastId: string};

    getPodcastListOffset(): number;
    setPodcastListOffset(offset: number);
    clearPodcastListOffset();
    getRecommendContext();
    setRecommendContext(topics: Array<string>, podcastId: String);*/

}