"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillEntities = void 0;
class SkillEntities {
    constructor(input) {
        this.checkResolutionsValue = (slotNode) => {
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
        };
        this.input = input;
    }
    getValue(slotName) {
        const event = this.input.requestEnvelope.request;
        if (event.intent && event.intent.slots &&
            event.intent.slots[slotName]) {
            let value = this.checkResolutionsValue(event.intent.slots[slotName]);
            if (value) {
                return value.name;
            }
            return event.intent.slots[slotName].value;
        }
        return null;
    }
    /** retrieve Entity Id, If no Id, get value */
    get(slotName) {
        const event = this.input.requestEnvelope.request;
        if (event.intent && event.intent.slots &&
            event.intent.slots[slotName]) {
            let value = this.checkResolutionsValue(event.intent.slots[slotName]);
            if (value) {
                if (value.id) {
                    return value.id;
                }
                else {
                    return value.name;
                }
            }
            return event.intent.slots[slotName].value;
        }
        return null;
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