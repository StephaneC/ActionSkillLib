import { DynamicEntities, Entities, Entity } from '../DynamicEntities';
import { HandlerInput } from 'ask-sdk';
import { Directive } from 'ask-sdk-model';
import { IntentRequest } from "ask-sdk-model";

export class SkillEntities implements DynamicEntities, Entities {

    input: HandlerInput;

    constructor(input: HandlerInput) {
        this.input = input;
    }

    /** retrieve Entity Id, If no Id, get value */
    public get(slotName: string) {
        const event = this.input.requestEnvelope.request as IntentRequest;
        if (event.intent && event.intent.slots &&
            event.intent.slots[slotName]) {
            let value = this.checkResolutionsValue(event.intent.slots[slotName]);
            if (value) {
                if (value.id) {
                    return value.id;
                } else {
                    return value.name
                }
            }
            return event.intent.slots[slotName].value;
        }
        return null;
    }

    private checkResolutionsValue = (slotNode): {name: string, id?: string} => {
        let value = null;
        if (slotNode && slotNode.resolutions && slotNode.resolutions.resolutionsPerAuthority) {
            for (let i = 0; i < slotNode.resolutions.resolutionsPerAuthority.length; i++) {
                if (value == null) {
                    let podcastSlot = slotNode.resolutions.resolutionsPerAuthority[i];
                    if (podcastSlot.status.code == 'ER_SUCCESS_MATCH') {
                        value = podcastSlot.values[0].value;
                        break;
                    }
                }
            }
        }
        return value;
    }

    public updateEntities(entities: Array<Entity>) {
        let replaceEntityDirective: Directive = {
            type: 'Dialog.UpdateDynamicEntities',
            updateBehavior: 'REPLACE',
            types: this.getTypes(entities)
        };
        this.input.responseBuilder.addDirective(replaceEntityDirective);
    }

    public deleteEntity(entity) {
        let replaceEntityDirective: Directive = {
            type: 'Dialog.UpdateDynamicEntities',
            updateBehavior: 'CLEAR',
        };
        this.input.responseBuilder.addDirective(replaceEntityDirective);

    }


    private getTypes(entities: Array<Entity>): any[] {
        const types = [];
        entities.forEach(a => {
            const type = {
                name: a.name,
                values: []
            }
            a.values.forEach(v => {
                type.values.push({
                    id: v.id,
                    name: {
                        value: v.name,
                        synonyms: v.synonyms
                    }
                });
            });
            types.push(type);
        });
        return types;
    }
}