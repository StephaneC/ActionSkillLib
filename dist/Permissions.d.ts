export declare enum PERMISSIONS {
    GEOLOCATION = 0
}
export interface Permissions {
    askPermission(permission: PERMISSIONS, text: string): any;
    hasPermission(permission: PERMISSIONS): boolean;
}
