import { DynamicEntities, Entity } from '../DynamicEntities';
import { HandlerInput } from 'ask-sdk';
export declare class SkillEntities implements DynamicEntities {
    input: HandlerInput;
    constructor(input: HandlerInput);
    updateEntities(entities: Array<Entity>): void;
    deleteEntity(entity: any): void;
    private getTypes;
}
