"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SkillEntities {
    constructor(input) {
        this.input = input;
    }
    updateEntities(entities) {
        let replaceEntityDirective = {
            type: 'Dialog.UpdateDynamicEntities',
            updateBehavior: 'REPLACE',
            types: this.getTypes(entities)
        };
        this.input.responseBuilder.addDirective(replaceEntityDirective);
    }
    deleteEntity(entity) {
        let replaceEntityDirective = {
            type: 'Dialog.UpdateDynamicEntities',
            updateBehavior: 'CLEAR',
        };
        this.input.responseBuilder.addDirective(replaceEntityDirective);
    }
    getTypes(entities) {
        const types = [];
        entities.forEach(a => {
            const type = {
                name: a.name,
                values: []
            };
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
exports.SkillEntities = SkillEntities;
//# sourceMappingURL=SkillEntities.js.map