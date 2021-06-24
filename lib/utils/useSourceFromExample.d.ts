import { ComponentExample } from '../../site/src/types';
export declare const useSourceFromExample: (id: string, { Example, code: codeOverride }: Pick<ComponentExample, 'Example' | 'code'>) => {
    code: string | undefined;
    value: any;
};
