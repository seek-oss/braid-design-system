import '@testing-library/jest-dom/extend-expect';
import { ComponentType } from 'react';
import { ModalProps } from './Modal';
export declare const modalTestSuite: (name: string, ModalImplementation: ComponentType<Pick<ModalProps, 'id' | 'title' | 'closeLabel' | 'open' | 'onClose' | 'children'>>) => void;
