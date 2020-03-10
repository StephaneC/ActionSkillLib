import { DynamicEntities, Entity } from '../DynamicEntities';
import { HandlerInput } from 'ask-sdk';
export declare class SkillEntities implements DynamicEntities {
    input: HandlerInput;
    constructor(input: HandlerInput);
    /** retrieve Entity Id, If no Id, get value */
    get(slotName: string): string;
    private checkResolutionsValue;
    updateEntities(entities: Array<Entity>): void;
    deleteEntity(entity: any): void;
    private getTypes;
}
