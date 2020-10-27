export interface InputUtils {
    /** @Deprecated */
    getEntity(key: string): string;
    getClicked(): any;
    getOffsetInMilliseconds(): number;
    getNotificationToken(): string;
    getMediaToken(): string;
    /**
     * @deprecated
     */
    supportsDisplay(): boolean;
    /**
     * @deprecated
     */
    hasRoundScreen(): boolean;
}
