import { DynamicEntities, Entity } from '../DynamicEntities';
import { HandlerInput } from 'ask-sdk';
import { Directive } from 'ask-sdk-model';

export class SkillEntities implements DynamicEntities {

    input: HandlerInput;

    constructor(input: HandlerInput) {
        this.input = input;
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