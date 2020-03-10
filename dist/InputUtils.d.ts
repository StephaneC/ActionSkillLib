export interface InputUtils {
    /** @Deprecated */
    getEntity(key: string): string;
    getClicked(): any;
    getOffsetInMilliseconds(): number;
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
