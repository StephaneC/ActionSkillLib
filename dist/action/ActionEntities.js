"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ActionEntities {
    constructor(input) {
        this.input = input;
    }
    mapEntity(entity) {
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
        console.log('Session Entities:' + JSON.stringify(mappedEntity));
        return mappedEntity;
    }
    updateEntities(entities) {
        try {
            const responseBody = this.input.serialize();
            responseBody['sessionEntityTypes'] = [];
            entities.forEach(entity => {
                responseBody['sessionEntityTypes'].push(this.mapEntity(entity));
            });
            this.input.json(responseBody);
        }
        catch (e) {
            console.log('Error setting session entities for Actions', e);
        }
    }
    deleteEntity(entity) {
        //TODO
    }
}
exports.ActionEntities = ActionEntities;
//# sourceMappingURL=ActionEntities.js.map