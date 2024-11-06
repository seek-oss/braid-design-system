import { createContext, useContext } from 'react';
import type { AppConfig } from '../types';

const defaultConfig: AppConfig = {
  playroomUrl: '/',
  sourceUrlPrefix: '',
  headBranchName: 'master',
};

const context = createContext(defaultConfig);

export const ConfigProvider = context.Provider;

export const useConfig = () => useContext(context);
