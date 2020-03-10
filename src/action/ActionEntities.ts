import { DynamicEntities, Entities, Entity } from '../DynamicEntities';
import { DialogflowConversation, GoogleCloudDialogflowV2WebhookResponse } from 'actions-on-google';

interface SessionEntityType {
    name: string
    entities: {
        value: string
        synonyms: string[]
    }[]
}

interface ResponseBody extends GoogleCloudDialogflowV2WebhookResponse {
    sessionEntityTypes: SessionEntityType[]
}


export class ActionEntities implements DynamicEntities, Entities {

    input: DialogflowConversation;

    constructor(input: DialogflowConversation) {
        this.input = input;
    }

    private mapEntity(entity: Entity): { name: string, entities: Array<{ value: string, synonyms: Array<string> }>, entityOverrideMode: string } {
        const mappedEntity = {
            name: this.input.body['session'] + '/entityTypes/' + entity.id,
            entities: [],
            entityOverrideMode: 'ENTITY_OVERRIDE_MODE_OVERRIDE'
        };
        entity.values.forEach(a => {
            let synonyms;
            if (a.synonyms)
                synonyms = [a.name].concat(a.synonyms);
            else
                synonyms = [a.name];
            mappedEntity.entities.push({
                synonyms: synonyms,
                value: a.id
            });
        });
        console.log('Session Entities:' + JSON.stringify(mappedEntity))
        return mappedEntity;
    }

    get(slotName: string): string {
        const params = this.input.parameters;
        const entity = params[slotName];
        return (entity)? entity as string : null;
    }

    /**
     * WARNING: Always end with this.
     * If you add stuff in your conversation next, it won't work.
     * @param entities 
     */
    public updateEntities(entities: Array<Entity>) {
        try {
            const responseBody = this.input.serialize() as ResponseBody;
            responseBody['sessionEntityTypes'] = [];
            entities.forEach(entity => {
                responseBody['sessionEntityTypes'].push(this.mapEntity(entity))
            });
            this.input.json(responseBody);
        } catch (e) {
            console.log('Error setting session entities for Actions', e);
        }
    }

    public deleteEntity(entity) {
        //TODO
    }
}