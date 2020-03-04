export const formatUrlHttps = (url: string): string => {
    if(url && url.startsWith('http://')) {
        return url.replace('http://', 'https://');
    }
    return url;    
}