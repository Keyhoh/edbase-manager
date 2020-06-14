export const isBlank = (s: string): boolean => !s || /^\s*$/.test(s)
export const isNotBlank = (s: string): boolean => !isBlank(s)
