import raw from './translations.json'

export type Lang = 'pt' | 'en' | 'es'

export const translations = raw as Record<Lang, typeof raw['pt']>
