/**
 * The `useAvailableCountries` hook returns an array of available countries used for localization.
 * It must be a descendent of a `LocalizationProvider` component.
 */
export declare function useAvailableCountries(): ({
    __typename?: "Country" | undefined;
} & Pick<import("../../graphql/types/types").Country, "name" | "isoCode"> & {
    currency: {
        __typename?: "Currency" | undefined;
    } & Pick<import("../../graphql/types/types").Currency, "isoCode">;
})[];
