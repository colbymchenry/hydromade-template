import { LocalizationQuery } from './LocalizationQuery';
export declare type Localization = LocalizationQuery['localization'];
export interface LocalizationContextValue {
    country?: Localization['country'];
    availableCountries: Localization['availableCountries'];
    setCountry(country: Localization['country']): void;
}
export declare const LocalizationContext: import("react").Context<LocalizationContextValue | null>;
