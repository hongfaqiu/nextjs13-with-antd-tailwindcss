// Declaring this interface provides type safety for message keys
type Messages = typeof import('./locales/en-US.json');
declare interface IntlMessages extends Messages {}
