
import config from 'app/environment';

export const apiEndpoint = (endpoint: string): string => `${config.api}/${endpoint}`;