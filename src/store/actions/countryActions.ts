export const setCountryState = (data: string) => ({
  type: 'setCountryState',
  payload: data
} as const);
