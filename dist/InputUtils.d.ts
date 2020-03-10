export interface InputUtils {
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
