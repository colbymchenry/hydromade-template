export declare const CartLineContext: import("react").Context<({
    __typename?: "CartLine" | undefined;
} & Pick<import("../../graphql/types/types").CartLine, "id" | "quantity"> & {
    attributes: ({
        __typename?: "Attribute" | undefined;
    } & Pick<import("../../graphql/types/types").Attribute, "key" | "value">)[];
    merchandise: {
        __typename?: "ProductVariant" | undefined;
    } & Pick<import("../../graphql/types/types").ProductVariant, "id" | "title" | "availableForSale" | "requiresShipping"> & {
        compareAtPriceV2?: import("../../graphql/types/types").Maybe<{
            __typename?: "MoneyV2" | undefined;
        } & {
            __typename?: "MoneyV2" | undefined;
        } & Pick<import("../../graphql/types/types").MoneyV2, "currencyCode" | "amount">> | undefined;
        priceV2: {
            __typename?: "MoneyV2" | undefined;
        } & {
            __typename?: "MoneyV2" | undefined;
        } & Pick<import("../../graphql/types/types").MoneyV2, "currencyCode" | "amount">;
        image?: import("../../graphql/types/types").Maybe<{
            __typename?: "Image" | undefined;
        } & {
            __typename?: "Image" | undefined;
        } & Pick<import("../../graphql/types/types").Image, "id" | "height" | "width" | "url" | "altText">> | undefined;
        product: {
            __typename?: "Product" | undefined;
        } & Pick<import("../../graphql/types/types").Product, "title" | "handle">;
        selectedOptions: ({
            __typename?: "SelectedOption" | undefined;
        } & Pick<import("../../graphql/types/types").SelectedOption, "name" | "value">)[];
    };
}) | null>;
