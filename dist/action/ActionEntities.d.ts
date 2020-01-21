import { DynamicEntities, Entity } from '../DynamicEntities';
import { DialogflowConversation } from 'actions-on-google';
export declare class ActionEntities implements DynamicEntities {
    input: DialogflowConversation;
    constructor(input: DialogflowConversation);
    private mapEntity;
    /**
     * WARNING: Always end with this.
     * If you add stuff in your conversation next, it won't work.
     * @param entities
     */
    updateEntities(entities: Array<Entity>): void;
    deleteEntity(entity: any): void;
}
