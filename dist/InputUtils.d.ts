export interface InputUtils {
    getEntity(key: string): string;
    getClicked(): any;
    supportsDisplay(): boolean;
    getOffsetInMilliseconds(): number;
    hasRoundScreen(): boolean;
    getMediaToken(): string;
}
