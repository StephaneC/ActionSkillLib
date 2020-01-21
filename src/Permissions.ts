export enum PERMISSIONS {
    GEOLOCATION
}

export interface Permissions {
    askPermission(permission: PERMISSIONS, text: string);
    hasPermission(permission: PERMISSIONS): boolean;
}