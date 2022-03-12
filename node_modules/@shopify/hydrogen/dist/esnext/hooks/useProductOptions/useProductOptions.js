import { useCallback, useEffect, useMemo, useState } from 'react';
import { flattenConnection } from '../../utilities';
import { getOptions, getSelectedVariant } from './helpers';
/**
 * The `useProductOptions` hook returns an object that enables you to keep track of the
 * selected variant and/or selling plan state, as well as callbacks for modifying the state.
 */
export function useProductOptions({ variants: variantsConnection, sellingPlanGroups: sellingPlanGroupsConnection, initialVariantId, }) {
    // The flattened variants
    const variants = useMemo(() => (variantsConnection ? flattenConnection(variantsConnection) : []), [variantsConnection]);
    // All the options available for a product, based on all the variants
    const options = useMemo(() => getOptions(variants), [variants]);
    /**
     * Track the selectedVariant within the hook. If `initialVariantId`
     * is passed, use that as an initial value.
     */
    const [selectedVariant, setSelectedVariant] = useState(initialVariantId == null
        ? initialVariantId
        : variants.find((variant) => variant.id === initialVariantId));
    /**
     * Track the selectedOptions within the hook. If a `initialVariantId`
     * is passed, use that to select initial options.
     */
    const [selectedOptions, setSelectedOptions] = useState((selectedVariant === null || selectedVariant === void 0 ? void 0 : selectedVariant.selectedOptions)
        ? selectedVariant.selectedOptions.reduce((memo, optionSet) => {
            memo[optionSet.name] = optionSet.value;
            return memo;
        }, {})
        : {});
    /**
     * When the initialVariantId changes, we need to make sure we
     * update the selected variant and selected options. If not,
     * then the selected variant and options will reference incorrect
     * values.
     */
    useEffect(() => {
        const selectedVariant = initialVariantId == null
            ? initialVariantId
            : variants.find((variant) => variant.id === initialVariantId);
        setSelectedVariant(selectedVariant);
        const selectedOptions = (selectedVariant === null || selectedVariant === void 0 ? void 0 : selectedVariant.selectedOptions)
            ? selectedVariant.selectedOptions.reduce((memo, optionSet) => {
                memo[optionSet.name] = optionSet.value;
                return memo;
            }, {})
            : {};
        setSelectedOptions(selectedOptions);
    }, [initialVariantId, variants]);
    /**
     * Allow the developer to select an option.
     */
    const setSelectedOption = useCallback((name, value) => {
        const newSelectedOptions = {
            ...selectedOptions,
            [name]: value,
        };
        setSelectedOptions(newSelectedOptions);
    }, [selectedOptions]);
    useEffect(() => {
        /**
         * When selected options change, select the correct variant.
         */
        const variant = getSelectedVariant(variants, selectedOptions);
        if (variant) {
            setSelectedVariant(variant);
        }
    }, [variants, selectedOptions]);
    const isOptionInStock = useCallback((option, value) => {
        var _a;
        const proposedVariant = getSelectedVariant(variants, {
            ...selectedOptions,
            ...{ [option]: value },
        });
        return (_a = proposedVariant === null || proposedVariant === void 0 ? void 0 : proposedVariant.availableForSale) !== null && _a !== void 0 ? _a : true;
    }, [selectedOptions, variants]);
    const sellingPlanGroups = useMemo(() => sellingPlanGroupsConnection
        ? flattenConnection(sellingPlanGroupsConnection).map((sellingPlanGroup) => ({
            ...sellingPlanGroup,
            sellingPlans: (sellingPlanGroup === null || sellingPlanGroup === void 0 ? void 0 : sellingPlanGroup.sellingPlans)
                ? flattenConnection(sellingPlanGroup.sellingPlans)
                : [],
        }))
        : [], [sellingPlanGroupsConnection]);
    /**
     * Track the selectedSellingPlan within the hook. If `initialSellingPlanId`
     * is passed, use that as an initial value. Look it up from the `selectedVariant`, since
     * that is also a requirement.
     */
    const [selectedSellingPlan, setSelectedSellingPlan] = useState(undefined);
    const selectedSellingPlanAllocation = useMemo(() => {
        if (!selectedVariant || !selectedSellingPlan) {
            return;
        }
        if (!selectedVariant.sellingPlanAllocations) {
            throw new Error(`You must include sellingPlanAllocations in your variants in order to calculate selectedSellingPlanAllocation`);
        }
        return flattenConnection(selectedVariant.sellingPlanAllocations).find((allocation) => allocation.sellingPlan.id === selectedSellingPlan.id);
    }, [selectedVariant, selectedSellingPlan]);
    return {
        variants,
        variantsConnection,
        options,
        selectedVariant,
        setSelectedVariant,
        selectedOptions,
        setSelectedOption,
        setSelectedOptions,
        isOptionInStock,
        selectedSellingPlan,
        setSelectedSellingPlan,
        selectedSellingPlanAllocation,
        sellingPlanGroups,
        sellingPlanGroupsConnection,
    };
}
