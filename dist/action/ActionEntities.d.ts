import { DynamicEntities, Entity } from '../DynamicEntities';
import { DialogflowConversation } from 'actions-on-google';
export declare class ActionEntities implements DynamicEntities {
    input: DialogflowConversation;
    constructor(input: DialogflowConversation);
    private mapEntity;
    updateEntities(entities: Array<Entity>): void;
    deleteEntity(entity: any): void;
}
