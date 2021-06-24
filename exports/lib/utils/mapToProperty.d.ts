import { Properties } from 'csstype';
export declare const mapToProperty: <Property extends keyof Properties<string | number, string & {}>>(property: Property, breakpoint?: "mobile" | "tablet" | "desktop" | undefined) => (value: string | number) => import("@vanilla-extract/css").StyleRule | {
    [x: string]: string | number;
};
