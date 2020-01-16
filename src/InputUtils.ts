
export interface InputUtils {
    getEntity(key: string): string; 
    getClicked();
    supportsDisplay(): boolean; 
    getOffsetInMilliseconds(): number;
    hasRoundScreen(): boolean;
    getMediaToken(): string;
}