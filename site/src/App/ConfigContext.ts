import { createContext, useContext } from 'react';
import { AppConfig } from '../types';

const defaultConfig: AppConfig = {
  playroomUrl: '/',
  sourceUrlPrefix: '',
};

const context = createContext(defaultConfig);

export const ConfigConsumer = context.Consumer;
export const ConfigProvider = context.Provider;

export const useConfig = () => useContext(context);
