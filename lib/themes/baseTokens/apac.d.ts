import { BraidTokens } from '../tokenType';
import { DeepPartial } from 'utility-types';
interface MakeTokensOptions {
    name: string;
    displayName: string;
    brand: string;
    brandAccent: string;
    formAccent: string;
    tokenOverrides?: DeepPartial<BraidTokens>;
}
export declare const makeTokens: ({ name, displayName, brand, brandAccent, formAccent, tokenOverrides, }: MakeTokensOptions) => BraidTokens;
export {};
