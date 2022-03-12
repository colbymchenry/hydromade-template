/**
 * The `useProduct` hook returns the product object of the nearest `ProductProvider`. It must be a descendent of
 * a `ProductProvider` component.
 */
export declare function useProduct(): {
    id?: string | undefined;
    title?: string | undefined;
    handle?: any;
    compareAtPriceRange?: Partial<{
        __typename?: "ProductPriceRange" | undefined;
    } & {
        maxVariantPrice: {
            __typename?: "MoneyV2" | undefined;
        } & {
            __typename?: "MoneyV2" | undefined;
        } & Pick<import("../../graphql/types/types").MoneyV2, "currencyCode" | "amount">;
        minVariantPrice: {
            __typename?: "MoneyV2" | undefined;
        } & {
            __typename?: "MoneyV2" | undefined;
        } & Pick<import("../../graphql/types/types").MoneyV2, "currencyCode" | "amount">;
    }> | undefined;
    descriptionHtml?: any;
    priceRange?: Partial<{
        __typename?: "ProductPriceRange" | undefined;
    } & {
        maxVariantPrice: {
            __typename?: "MoneyV2" | undefined;
        } & {
            __typename?: "MoneyV2" | undefined;
        } & Pick<import("../../graphql/types/types").MoneyV2, "currencyCode" | "amount">;
        minVariantPrice: {
            __typename?: "MoneyV2" | undefined;
        } & {
            __typename?: "MoneyV2" | undefined;
        } & Pick<import("../../graphql/types/types").MoneyV2, "currencyCode" | "amount">;
    }> | undefined;
    media?: (({
        __typename?: "ExternalVideo" | undefined;
    } & {
        __typename?: "ExternalVideo" | undefined;
    } & Pick<import("../../graphql/types/types").ExternalVideo, "mediaContentType"> & {
        __typename?: "ExternalVideo" | undefined;
    } & Pick<import("../../graphql/types/types").ExternalVideo, "id" | "host" | "embeddedUrl">) | ({
        __typename?: "MediaImage" | undefined;
    } & {
        __typename?: "MediaImage" | undefined;
    } & Pick<import("../../graphql/types/types").MediaImage, "mediaContentType"> & {
        image?: import("../../graphql/types/types").Maybe<{
            __typename?: "Image" | undefined;
        } & {
            __typename?: "Image" | undefined;
        } & Pick<import("../../graphql/types/types").Image, "id" | "height" | "width" | "url" | "altText">> | undefined;
    }) | ({
        __typename?: "Model3d" | undefined;
    } & {
        __typename?: "Model3d" | undefined;
    } & Pick<import("../../graphql/types/types").Model3d, "mediaContentType"> & {
        __typename?: "Model3d" | undefined;
    } & Pick<import("../../graphql/types/types").Model3d, "id" | "alt" | "mediaContentType"> & {
        previewImage?: import("../../graphql/types/types").Maybe<{
            __typename?: "Image" | undefined;
        } & Pick<import("../../graphql/types/types").Image, "url">> | undefined;
        sources: ({
            __typename?: "Model3dSource" | undefined;
        } & Pick<import("../../graphql/types/types").Model3dSource, "url">)[];
    }) | ({
        __typename?: "Video" | undefined;
    } & {
        __typename?: "Video" | undefined;
    } & Pick<import("../../graphql/types/types").Video, "mediaContentType"> & {
        __typename?: "Video" | undefined;
    } & Pick<import("../../graphql/types/types").Video, "id"> & {
        previewImage?: import("../../graphql/types/types").Maybe<{
            __typename?: "Image" | undefined;
        } & Pick<import("../../graphql/types/types").Image, "url">> | undefined;
        sources: ({
            __typename?: "VideoSource" | undefined;
        } & Pick<import("../../graphql/types/types").VideoSource, "url" | "mimeType">)[];
    }))[] | undefined;
    mediaConnection?: ({
        __typename?: "MediaConnection" | undefined;
    } & {
        edges: ({
            __typename?: "MediaEdge" | undefined;
        } & {
            node: ({
                __typename?: "ExternalVideo" | undefined;
            } & {
                __typename?: "ExternalVideo" | undefined;
            } & Pick<import("../../graphql/types/types").ExternalVideo, "mediaContentType"> & {
                __typename?: "ExternalVideo" | undefined;
            } & Pick<import("../../graphql/types/types").ExternalVideo, "id" | "host" | "embeddedUrl">) | ({
                __typename?: "MediaImage" | undefined;
            } & {
                __typename?: "MediaImage" | undefined;
            } & Pick<import("../../graphql/types/types").MediaImage, "mediaContentType"> & {
                image?: import("../../graphql/types/types").Maybe<{
                    __typename?: "Image" | undefined;
                } & {
                    __typename?: "Image" | undefined;
                } & Pick<import("../../graphql/types/types").Image, "id" | "height" | "width" | "url" | "altText">> | undefined;
            }) | ({
                __typename?: "Model3d" | undefined;
            } & {
                __typename?: "Model3d" | undefined;
            } & Pick<import("../../graphql/types/types").Model3d, "mediaContentType"> & {
                __typename?: "Model3d" | undefined;
            } & Pick<import("../../graphql/types/types").Model3d, "id" | "alt" | "mediaContentType"> & {
                previewImage?: import("../../graphql/types/types").Maybe<{
                    __typename?: "Image" | undefined;
                } & Pick<import("../../graphql/types/types").Image, "url">> | undefined;
                sources: ({
                    __typename?: "Model3dSource" | undefined;
                } & Pick<import("../../graphql/types/types").Model3dSource, "url">)[];
            }) | ({
                __typename?: "Video" | undefined;
            } & {
                __typename?: "Video" | undefined;
            } & Pick<import("../../graphql/types/types").Video, "mediaContentType"> & {
                __typename?: "Video" | undefined;
            } & Pick<import("../../graphql/types/types").Video, "id"> & {
                previewImage?: import("../../graphql/types/types").Maybe<{
                    __typename?: "Image" | undefined;
                } & Pick<import("../../graphql/types/types").Image, "url">> | undefined;
                sources: ({
                    __typename?: "VideoSource" | undefined;
                } & Pick<import("../../graphql/types/types").VideoSource, "url" | "mimeType">)[];
            });
        })[];
    }) | undefined;
    metafields?: import("../../types").ParsedMetafield[] | undefined;
    metafieldsConnection?: import("../../types").GraphQLConnection<import("../../types").RawMetafield> | undefined;
    images?: Partial<import("../../graphql/types/types").Image>[] | undefined;
    imagesConnection?: import("../../types").GraphQLConnection<import("../../components/Image/ImageFragment").ImageFragmentFragment> | undefined;
    collections?: Partial<import("../../graphql/types/types").Collection>[] | undefined;
    collectionsConnection?: import("../../types").GraphQLConnection<Partial<import("../../graphql/types/types").Collection>> | undefined;
    variants?: import("../useProductOptions").Variant[] | Partial<import("../useProductOptions").Variant>[] | undefined;
    variantsConnection?: import("../../types").GraphQLConnection<import("../useProductOptions").Variant> | undefined;
    options?: import("../useProductOptions").OptionWithValues[] | undefined;
    selectedVariant?: import("../useProductOptions").Variant | null | undefined;
    setSelectedVariant?: import("../useProductOptions").SelectVariantCallback | undefined;
    selectedOptions?: import("../useProductOptions").SelectedOptions | undefined;
    setSelectedOption?: import("../useProductOptions").SelectOptionCallback | undefined;
    setSelectedOptions?: import("../useProductOptions").SelectOptionsCallback | undefined;
    isOptionInStock?: import("../useProductOptions").OptionsInStockCallback | undefined;
    setSelectedSellingPlan?: import("../useProductOptions").SelectedSellingPlanCallback | undefined;
    selectedSellingPlan?: import("../useProductOptions").SellingPlan | undefined;
    selectedSellingPlanAllocation?: import("../useProductOptions").SellingPlanAllocation | undefined;
    sellingPlanGroups?: (Omit<import("../useProductOptions").SellingPlanGroup, "sellingPlans"> & {
        sellingPlans: import("../useProductOptions").SellingPlan[];
    })[] | undefined;
    sellingPlanGroupsConnection?: import("../../types").GraphQLConnection<import("../useProductOptions").SellingPlanGroup> | undefined;
};
