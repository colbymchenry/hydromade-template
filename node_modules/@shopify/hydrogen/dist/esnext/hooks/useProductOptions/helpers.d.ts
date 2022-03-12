import { Variant, SelectedOptions, OptionWithValues } from './types';
export declare function getAllOptionValues(variants: Variant[], option: string): string[];
export declare function getSelectedVariant(variants: Variant[], choices: SelectedOptions): Variant | undefined;
export declare function getOptions(variants: Variant[]): OptionWithValues[];
