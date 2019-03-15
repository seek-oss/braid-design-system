import { createContext } from 'react';

const { Provider, Consumer } = createContext(false);

export const ActionsProvider = Provider;
export const ActionsConsumer = Consumer;
