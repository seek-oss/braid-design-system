import { createContext, useContext } from 'react';
import { AppConfig } from '../types';

const defaultConfig: AppConfig = {
  playroomUrl: '/',
  sourceUrlPrefix: '',
  renderDate: new Date().getTime(),
  versionMap: {},
};

const context = createContext(defaultConfig);

export const ConfigProvider = context.Provider;

export const useConfig = () => useContext(context);
