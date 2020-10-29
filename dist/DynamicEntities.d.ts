export interface Entity {
    id: string;
    name: string;
    values: Array<{
        synonyms: Array<string>;
        id: string;
        name: string;
    }>;
}
export interface Entities {
    get(key: string): string;
    getValue(key: string): string;
}
export interface DynamicEntities extends Entities {
    updateEntities(entities: Array<Entity>): any;
    deleteEntity(entity: any): any;
}
