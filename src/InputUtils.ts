
export interface InputUtils {
    getEntity(key: string): string; 
    getClicked();
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