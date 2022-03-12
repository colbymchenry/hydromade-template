import { SellingPlanGroup, Variant, ProductOptionsHookValue } from './types';
import { GraphQLConnection } from '../../types';
/**
 * The `useProductOptions` hook returns an object that enables you to keep track of the
 * selected variant and/or selling plan state, as well as callbacks for modifying the state.
 */
export declare function useProductOptions({ variants: variantsConnection, sellingPlanGroups: sellingPlanGroupsConnection, initialVariantId, }: {
    /** The product's `VariantConnection`. */
    variants?: GraphQLConnection<Variant>;
    /** The product's `SellingPlanGroups`. */
    sellingPlanGroups?: GraphQLConnection<SellingPlanGroup>;
    /** The initially selected variant. */
    initialVariantId?: Variant['id'] | null;
}): ProductOptionsHookValue;
