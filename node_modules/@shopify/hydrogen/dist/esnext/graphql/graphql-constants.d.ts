/**
 *```
 *
 * mutation CartAttributesUpdate($attributes: [AttributeInput!]!, $cartId: ID!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
 *   cartAttributesUpdate(attributes: $attributes, cartId: $cartId) {
 *     cart {
 *       ...CartFragment
 *     }
 *   }
 * }
 *
 * fragment CartFragment on Cart {
 *   id
 *   checkoutUrl
 *   buyerIdentity {
 *     countryCode
 *     customer {
 *       id
 *       email
 *       firstName
 *       lastName
 *       displayName
 *     }
 *     email
 *     phone
 *   }
 *   lines(first: $numCartLines) {
 *     edges {
 *       node {
 *         id
 *         quantity
 *         attributes {
 *           key
 *           value
 *         }
 *         merchandise {
 *           ... on ProductVariant {
 *             id
 *             availableForSale
 *             compareAtPriceV2 {
 *               ...MoneyFragment
 *             }
 *             priceV2 {
 *               ...MoneyFragment
 *             }
 *             requiresShipping
 *             title
 *             image {
 *               ...ImageFragment
 *             }
 *             product {
 *               handle
 *               title
 *             }
 *             selectedOptions {
 *               name
 *               value
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 *   estimatedCost {
 *     subtotalAmount {
 *       ...MoneyFragment
 *     }
 *     totalAmount {
 *       ...MoneyFragment
 *     }
 *     totalDutyAmount {
 *       ...MoneyFragment
 *     }
 *     totalTaxAmount {
 *       ...MoneyFragment
 *     }
 *   }
 *   note
 *   attributes {
 *     key
 *     value
 *   }
 *   discountCodes {
 *     code
 *   }
 * }
 *
 * fragment MoneyFragment on MoneyV2 {
 *   currencyCode
 *   amount
 * }
 * fragment ImageFragment on Image {
 *   id
 *   url
 *   altText
 *   width
 *   height
 * }
 *
 *```
 */
export declare const CartAttributesUpdate = "\nmutation CartAttributesUpdate($attributes: [AttributeInput!]!, $cartId: ID!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {\n  cartAttributesUpdate(attributes: $attributes, cartId: $cartId) {\n    cart {\n      ...CartFragment\n    }\n  }\n}\n\nfragment CartFragment on Cart {\n  id\n  checkoutUrl\n  buyerIdentity {\n    countryCode\n    customer {\n      id\n      email\n      firstName\n      lastName\n      displayName\n    }\n    email\n    phone\n  }\n  lines(first: $numCartLines) {\n    edges {\n      node {\n        id\n        quantity\n        attributes {\n          key\n          value\n        }\n        merchandise {\n          ... on ProductVariant {\n            id\n            availableForSale\n            compareAtPriceV2 {\n              ...MoneyFragment\n            }\n            priceV2 {\n              ...MoneyFragment\n            }\n            requiresShipping\n            title\n            image {\n              ...ImageFragment\n            }\n            product {\n              handle\n              title\n            }\n            selectedOptions {\n              name\n              value\n            }\n          }\n        }\n      }\n    }\n  }\n  estimatedCost {\n    subtotalAmount {\n      ...MoneyFragment\n    }\n    totalAmount {\n      ...MoneyFragment\n    }\n    totalDutyAmount {\n      ...MoneyFragment\n    }\n    totalTaxAmount {\n      ...MoneyFragment\n    }\n  }\n  note\n  attributes {\n    key\n    value\n  }\n  discountCodes {\n    code\n  }\n}\n\nfragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}\nfragment ImageFragment on Image {\n  id\n  url\n  altText\n  width\n  height\n}\n";
/**
 *```
 *
 * mutation CartBuyerIdentityUpdate(
 *   $cartId: ID!
 *   $buyerIdentity: CartBuyerIdentityInput!
 *   $numCartLines: Int = 250
 *   $country: CountryCode = ZZ
 * ) @inContext(country: $country) {
 *   cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
 *     cart {
 *       ...CartFragment
 *     }
 *   }
 * }
 *
 * fragment CartFragment on Cart {
 *   id
 *   checkoutUrl
 *   buyerIdentity {
 *     countryCode
 *     customer {
 *       id
 *       email
 *       firstName
 *       lastName
 *       displayName
 *     }
 *     email
 *     phone
 *   }
 *   lines(first: $numCartLines) {
 *     edges {
 *       node {
 *         id
 *         quantity
 *         attributes {
 *           key
 *           value
 *         }
 *         merchandise {
 *           ... on ProductVariant {
 *             id
 *             availableForSale
 *             compareAtPriceV2 {
 *               ...MoneyFragment
 *             }
 *             priceV2 {
 *               ...MoneyFragment
 *             }
 *             requiresShipping
 *             title
 *             image {
 *               ...ImageFragment
 *             }
 *             product {
 *               handle
 *               title
 *             }
 *             selectedOptions {
 *               name
 *               value
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 *   estimatedCost {
 *     subtotalAmount {
 *       ...MoneyFragment
 *     }
 *     totalAmount {
 *       ...MoneyFragment
 *     }
 *     totalDutyAmount {
 *       ...MoneyFragment
 *     }
 *     totalTaxAmount {
 *       ...MoneyFragment
 *     }
 *   }
 *   note
 *   attributes {
 *     key
 *     value
 *   }
 *   discountCodes {
 *     code
 *   }
 * }
 *
 * fragment MoneyFragment on MoneyV2 {
 *   currencyCode
 *   amount
 * }
 * fragment ImageFragment on Image {
 *   id
 *   url
 *   altText
 *   width
 *   height
 * }
 *
 *```
 */
export declare const CartBuyerIdentityUpdate = "\nmutation CartBuyerIdentityUpdate(\n  $cartId: ID!\n  $buyerIdentity: CartBuyerIdentityInput!\n  $numCartLines: Int = 250\n  $country: CountryCode = ZZ\n) @inContext(country: $country) {\n  cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {\n    cart {\n      ...CartFragment\n    }\n  }\n}\n\nfragment CartFragment on Cart {\n  id\n  checkoutUrl\n  buyerIdentity {\n    countryCode\n    customer {\n      id\n      email\n      firstName\n      lastName\n      displayName\n    }\n    email\n    phone\n  }\n  lines(first: $numCartLines) {\n    edges {\n      node {\n        id\n        quantity\n        attributes {\n          key\n          value\n        }\n        merchandise {\n          ... on ProductVariant {\n            id\n            availableForSale\n            compareAtPriceV2 {\n              ...MoneyFragment\n            }\n            priceV2 {\n              ...MoneyFragment\n            }\n            requiresShipping\n            title\n            image {\n              ...ImageFragment\n            }\n            product {\n              handle\n              title\n            }\n            selectedOptions {\n              name\n              value\n            }\n          }\n        }\n      }\n    }\n  }\n  estimatedCost {\n    subtotalAmount {\n      ...MoneyFragment\n    }\n    totalAmount {\n      ...MoneyFragment\n    }\n    totalDutyAmount {\n      ...MoneyFragment\n    }\n    totalTaxAmount {\n      ...MoneyFragment\n    }\n  }\n  note\n  attributes {\n    key\n    value\n  }\n  discountCodes {\n    code\n  }\n}\n\nfragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}\nfragment ImageFragment on Image {\n  id\n  url\n  altText\n  width\n  height\n}\n";
/**
 *```
 *
 * mutation CartCreate($input: CartInput!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
 *   cartCreate(input: $input) {
 *     cart {
 *       ...CartFragment
 *     }
 *   }
 * }
 *
 * fragment CartFragment on Cart {
 *   id
 *   checkoutUrl
 *   buyerIdentity {
 *     countryCode
 *     customer {
 *       id
 *       email
 *       firstName
 *       lastName
 *       displayName
 *     }
 *     email
 *     phone
 *   }
 *   lines(first: $numCartLines) {
 *     edges {
 *       node {
 *         id
 *         quantity
 *         attributes {
 *           key
 *           value
 *         }
 *         merchandise {
 *           ... on ProductVariant {
 *             id
 *             availableForSale
 *             compareAtPriceV2 {
 *               ...MoneyFragment
 *             }
 *             priceV2 {
 *               ...MoneyFragment
 *             }
 *             requiresShipping
 *             title
 *             image {
 *               ...ImageFragment
 *             }
 *             product {
 *               handle
 *               title
 *             }
 *             selectedOptions {
 *               name
 *               value
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 *   estimatedCost {
 *     subtotalAmount {
 *       ...MoneyFragment
 *     }
 *     totalAmount {
 *       ...MoneyFragment
 *     }
 *     totalDutyAmount {
 *       ...MoneyFragment
 *     }
 *     totalTaxAmount {
 *       ...MoneyFragment
 *     }
 *   }
 *   note
 *   attributes {
 *     key
 *     value
 *   }
 *   discountCodes {
 *     code
 *   }
 * }
 *
 * fragment MoneyFragment on MoneyV2 {
 *   currencyCode
 *   amount
 * }
 * fragment ImageFragment on Image {
 *   id
 *   url
 *   altText
 *   width
 *   height
 * }
 *
 *```
 */
export declare const CartCreate = "\nmutation CartCreate($input: CartInput!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {\n  cartCreate(input: $input) {\n    cart {\n      ...CartFragment\n    }\n  }\n}\n\nfragment CartFragment on Cart {\n  id\n  checkoutUrl\n  buyerIdentity {\n    countryCode\n    customer {\n      id\n      email\n      firstName\n      lastName\n      displayName\n    }\n    email\n    phone\n  }\n  lines(first: $numCartLines) {\n    edges {\n      node {\n        id\n        quantity\n        attributes {\n          key\n          value\n        }\n        merchandise {\n          ... on ProductVariant {\n            id\n            availableForSale\n            compareAtPriceV2 {\n              ...MoneyFragment\n            }\n            priceV2 {\n              ...MoneyFragment\n            }\n            requiresShipping\n            title\n            image {\n              ...ImageFragment\n            }\n            product {\n              handle\n              title\n            }\n            selectedOptions {\n              name\n              value\n            }\n          }\n        }\n      }\n    }\n  }\n  estimatedCost {\n    subtotalAmount {\n      ...MoneyFragment\n    }\n    totalAmount {\n      ...MoneyFragment\n    }\n    totalDutyAmount {\n      ...MoneyFragment\n    }\n    totalTaxAmount {\n      ...MoneyFragment\n    }\n  }\n  note\n  attributes {\n    key\n    value\n  }\n  discountCodes {\n    code\n  }\n}\n\nfragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}\nfragment ImageFragment on Image {\n  id\n  url\n  altText\n  width\n  height\n}\n";
/**
 *```
 *
 * mutation CartDiscountCodesUpdate($cartId: ID!, $discountCodes: [String!], $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
 *   cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
 *     cart {
 *       ...CartFragment
 *     }
 *   }
 * }
 *
 * fragment CartFragment on Cart {
 *   id
 *   checkoutUrl
 *   buyerIdentity {
 *     countryCode
 *     customer {
 *       id
 *       email
 *       firstName
 *       lastName
 *       displayName
 *     }
 *     email
 *     phone
 *   }
 *   lines(first: $numCartLines) {
 *     edges {
 *       node {
 *         id
 *         quantity
 *         attributes {
 *           key
 *           value
 *         }
 *         merchandise {
 *           ... on ProductVariant {
 *             id
 *             availableForSale
 *             compareAtPriceV2 {
 *               ...MoneyFragment
 *             }
 *             priceV2 {
 *               ...MoneyFragment
 *             }
 *             requiresShipping
 *             title
 *             image {
 *               ...ImageFragment
 *             }
 *             product {
 *               handle
 *               title
 *             }
 *             selectedOptions {
 *               name
 *               value
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 *   estimatedCost {
 *     subtotalAmount {
 *       ...MoneyFragment
 *     }
 *     totalAmount {
 *       ...MoneyFragment
 *     }
 *     totalDutyAmount {
 *       ...MoneyFragment
 *     }
 *     totalTaxAmount {
 *       ...MoneyFragment
 *     }
 *   }
 *   note
 *   attributes {
 *     key
 *     value
 *   }
 *   discountCodes {
 *     code
 *   }
 * }
 *
 * fragment MoneyFragment on MoneyV2 {
 *   currencyCode
 *   amount
 * }
 * fragment ImageFragment on Image {
 *   id
 *   url
 *   altText
 *   width
 *   height
 * }
 *
 *```
 */
export declare const CartDiscountCodesUpdate = "\nmutation CartDiscountCodesUpdate($cartId: ID!, $discountCodes: [String!], $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {\n  cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {\n    cart {\n      ...CartFragment\n    }\n  }\n}\n\nfragment CartFragment on Cart {\n  id\n  checkoutUrl\n  buyerIdentity {\n    countryCode\n    customer {\n      id\n      email\n      firstName\n      lastName\n      displayName\n    }\n    email\n    phone\n  }\n  lines(first: $numCartLines) {\n    edges {\n      node {\n        id\n        quantity\n        attributes {\n          key\n          value\n        }\n        merchandise {\n          ... on ProductVariant {\n            id\n            availableForSale\n            compareAtPriceV2 {\n              ...MoneyFragment\n            }\n            priceV2 {\n              ...MoneyFragment\n            }\n            requiresShipping\n            title\n            image {\n              ...ImageFragment\n            }\n            product {\n              handle\n              title\n            }\n            selectedOptions {\n              name\n              value\n            }\n          }\n        }\n      }\n    }\n  }\n  estimatedCost {\n    subtotalAmount {\n      ...MoneyFragment\n    }\n    totalAmount {\n      ...MoneyFragment\n    }\n    totalDutyAmount {\n      ...MoneyFragment\n    }\n    totalTaxAmount {\n      ...MoneyFragment\n    }\n  }\n  note\n  attributes {\n    key\n    value\n  }\n  discountCodes {\n    code\n  }\n}\n\nfragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}\nfragment ImageFragment on Image {\n  id\n  url\n  altText\n  width\n  height\n}\n";
/**
 *```
 * fragment CartFragment on Cart {
 *   id
 *   checkoutUrl
 *   buyerIdentity {
 *     countryCode
 *     customer {
 *       id
 *       email
 *       firstName
 *       lastName
 *       displayName
 *     }
 *     email
 *     phone
 *   }
 *   lines(first: $numCartLines) {
 *     edges {
 *       node {
 *         id
 *         quantity
 *         attributes {
 *           key
 *           value
 *         }
 *         merchandise {
 *           ... on ProductVariant {
 *             id
 *             availableForSale
 *             compareAtPriceV2 {
 *               ...MoneyFragment
 *             }
 *             priceV2 {
 *               ...MoneyFragment
 *             }
 *             requiresShipping
 *             title
 *             image {
 *               ...ImageFragment
 *             }
 *             product {
 *               handle
 *               title
 *             }
 *             selectedOptions {
 *               name
 *               value
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 *   estimatedCost {
 *     subtotalAmount {
 *       ...MoneyFragment
 *     }
 *     totalAmount {
 *       ...MoneyFragment
 *     }
 *     totalDutyAmount {
 *       ...MoneyFragment
 *     }
 *     totalTaxAmount {
 *       ...MoneyFragment
 *     }
 *   }
 *   note
 *   attributes {
 *     key
 *     value
 *   }
 *   discountCodes {
 *     code
 *   }
 * }
 *
 * fragment MoneyFragment on MoneyV2 {
 *   currencyCode
 *   amount
 * }
 * fragment ImageFragment on Image {
 *   id
 *   url
 *   altText
 *   width
 *   height
 * }
 *
 *```
 */
export declare const CartFragment = "fragment CartFragment on Cart {\n  id\n  checkoutUrl\n  buyerIdentity {\n    countryCode\n    customer {\n      id\n      email\n      firstName\n      lastName\n      displayName\n    }\n    email\n    phone\n  }\n  lines(first: $numCartLines) {\n    edges {\n      node {\n        id\n        quantity\n        attributes {\n          key\n          value\n        }\n        merchandise {\n          ... on ProductVariant {\n            id\n            availableForSale\n            compareAtPriceV2 {\n              ...MoneyFragment\n            }\n            priceV2 {\n              ...MoneyFragment\n            }\n            requiresShipping\n            title\n            image {\n              ...ImageFragment\n            }\n            product {\n              handle\n              title\n            }\n            selectedOptions {\n              name\n              value\n            }\n          }\n        }\n      }\n    }\n  }\n  estimatedCost {\n    subtotalAmount {\n      ...MoneyFragment\n    }\n    totalAmount {\n      ...MoneyFragment\n    }\n    totalDutyAmount {\n      ...MoneyFragment\n    }\n    totalTaxAmount {\n      ...MoneyFragment\n    }\n  }\n  note\n  attributes {\n    key\n    value\n  }\n  discountCodes {\n    code\n  }\n}\n\nfragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}\nfragment ImageFragment on Image {\n  id\n  url\n  altText\n  width\n  height\n}\n";
/**
 *```
 *
 * mutation CartLineAdd($cartId: ID!, $lines: [CartLineInput!]!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
 *   cartLinesAdd(cartId: $cartId, lines: $lines) {
 *     cart {
 *       ...CartFragment
 *     }
 *   }
 * }
 *
 * fragment CartFragment on Cart {
 *   id
 *   checkoutUrl
 *   buyerIdentity {
 *     countryCode
 *     customer {
 *       id
 *       email
 *       firstName
 *       lastName
 *       displayName
 *     }
 *     email
 *     phone
 *   }
 *   lines(first: $numCartLines) {
 *     edges {
 *       node {
 *         id
 *         quantity
 *         attributes {
 *           key
 *           value
 *         }
 *         merchandise {
 *           ... on ProductVariant {
 *             id
 *             availableForSale
 *             compareAtPriceV2 {
 *               ...MoneyFragment
 *             }
 *             priceV2 {
 *               ...MoneyFragment
 *             }
 *             requiresShipping
 *             title
 *             image {
 *               ...ImageFragment
 *             }
 *             product {
 *               handle
 *               title
 *             }
 *             selectedOptions {
 *               name
 *               value
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 *   estimatedCost {
 *     subtotalAmount {
 *       ...MoneyFragment
 *     }
 *     totalAmount {
 *       ...MoneyFragment
 *     }
 *     totalDutyAmount {
 *       ...MoneyFragment
 *     }
 *     totalTaxAmount {
 *       ...MoneyFragment
 *     }
 *   }
 *   note
 *   attributes {
 *     key
 *     value
 *   }
 *   discountCodes {
 *     code
 *   }
 * }
 *
 * fragment MoneyFragment on MoneyV2 {
 *   currencyCode
 *   amount
 * }
 * fragment ImageFragment on Image {
 *   id
 *   url
 *   altText
 *   width
 *   height
 * }
 *
 *```
 */
export declare const CartLineAdd = "\nmutation CartLineAdd($cartId: ID!, $lines: [CartLineInput!]!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {\n  cartLinesAdd(cartId: $cartId, lines: $lines) {\n    cart {\n      ...CartFragment\n    }\n  }\n}\n\nfragment CartFragment on Cart {\n  id\n  checkoutUrl\n  buyerIdentity {\n    countryCode\n    customer {\n      id\n      email\n      firstName\n      lastName\n      displayName\n    }\n    email\n    phone\n  }\n  lines(first: $numCartLines) {\n    edges {\n      node {\n        id\n        quantity\n        attributes {\n          key\n          value\n        }\n        merchandise {\n          ... on ProductVariant {\n            id\n            availableForSale\n            compareAtPriceV2 {\n              ...MoneyFragment\n            }\n            priceV2 {\n              ...MoneyFragment\n            }\n            requiresShipping\n            title\n            image {\n              ...ImageFragment\n            }\n            product {\n              handle\n              title\n            }\n            selectedOptions {\n              name\n              value\n            }\n          }\n        }\n      }\n    }\n  }\n  estimatedCost {\n    subtotalAmount {\n      ...MoneyFragment\n    }\n    totalAmount {\n      ...MoneyFragment\n    }\n    totalDutyAmount {\n      ...MoneyFragment\n    }\n    totalTaxAmount {\n      ...MoneyFragment\n    }\n  }\n  note\n  attributes {\n    key\n    value\n  }\n  discountCodes {\n    code\n  }\n}\n\nfragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}\nfragment ImageFragment on Image {\n  id\n  url\n  altText\n  width\n  height\n}\n";
/**
 *```
 *
 * mutation CartLineRemove($cartId: ID!, $lines: [ID!]!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
 *   cartLinesRemove(cartId: $cartId, lineIds: $lines) {
 *     cart {
 *       ...CartFragment
 *     }
 *   }
 * }
 *
 * fragment CartFragment on Cart {
 *   id
 *   checkoutUrl
 *   buyerIdentity {
 *     countryCode
 *     customer {
 *       id
 *       email
 *       firstName
 *       lastName
 *       displayName
 *     }
 *     email
 *     phone
 *   }
 *   lines(first: $numCartLines) {
 *     edges {
 *       node {
 *         id
 *         quantity
 *         attributes {
 *           key
 *           value
 *         }
 *         merchandise {
 *           ... on ProductVariant {
 *             id
 *             availableForSale
 *             compareAtPriceV2 {
 *               ...MoneyFragment
 *             }
 *             priceV2 {
 *               ...MoneyFragment
 *             }
 *             requiresShipping
 *             title
 *             image {
 *               ...ImageFragment
 *             }
 *             product {
 *               handle
 *               title
 *             }
 *             selectedOptions {
 *               name
 *               value
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 *   estimatedCost {
 *     subtotalAmount {
 *       ...MoneyFragment
 *     }
 *     totalAmount {
 *       ...MoneyFragment
 *     }
 *     totalDutyAmount {
 *       ...MoneyFragment
 *     }
 *     totalTaxAmount {
 *       ...MoneyFragment
 *     }
 *   }
 *   note
 *   attributes {
 *     key
 *     value
 *   }
 *   discountCodes {
 *     code
 *   }
 * }
 *
 * fragment MoneyFragment on MoneyV2 {
 *   currencyCode
 *   amount
 * }
 * fragment ImageFragment on Image {
 *   id
 *   url
 *   altText
 *   width
 *   height
 * }
 *
 *```
 */
export declare const CartLineRemove = "\nmutation CartLineRemove($cartId: ID!, $lines: [ID!]!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {\n  cartLinesRemove(cartId: $cartId, lineIds: $lines) {\n    cart {\n      ...CartFragment\n    }\n  }\n}\n\nfragment CartFragment on Cart {\n  id\n  checkoutUrl\n  buyerIdentity {\n    countryCode\n    customer {\n      id\n      email\n      firstName\n      lastName\n      displayName\n    }\n    email\n    phone\n  }\n  lines(first: $numCartLines) {\n    edges {\n      node {\n        id\n        quantity\n        attributes {\n          key\n          value\n        }\n        merchandise {\n          ... on ProductVariant {\n            id\n            availableForSale\n            compareAtPriceV2 {\n              ...MoneyFragment\n            }\n            priceV2 {\n              ...MoneyFragment\n            }\n            requiresShipping\n            title\n            image {\n              ...ImageFragment\n            }\n            product {\n              handle\n              title\n            }\n            selectedOptions {\n              name\n              value\n            }\n          }\n        }\n      }\n    }\n  }\n  estimatedCost {\n    subtotalAmount {\n      ...MoneyFragment\n    }\n    totalAmount {\n      ...MoneyFragment\n    }\n    totalDutyAmount {\n      ...MoneyFragment\n    }\n    totalTaxAmount {\n      ...MoneyFragment\n    }\n  }\n  note\n  attributes {\n    key\n    value\n  }\n  discountCodes {\n    code\n  }\n}\n\nfragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}\nfragment ImageFragment on Image {\n  id\n  url\n  altText\n  width\n  height\n}\n";
/**
 *```
 *
 * mutation CartLineUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
 *   cartLinesUpdate(cartId: $cartId, lines: $lines) {
 *     cart {
 *       ...CartFragment
 *     }
 *   }
 * }
 *
 * fragment CartFragment on Cart {
 *   id
 *   checkoutUrl
 *   buyerIdentity {
 *     countryCode
 *     customer {
 *       id
 *       email
 *       firstName
 *       lastName
 *       displayName
 *     }
 *     email
 *     phone
 *   }
 *   lines(first: $numCartLines) {
 *     edges {
 *       node {
 *         id
 *         quantity
 *         attributes {
 *           key
 *           value
 *         }
 *         merchandise {
 *           ... on ProductVariant {
 *             id
 *             availableForSale
 *             compareAtPriceV2 {
 *               ...MoneyFragment
 *             }
 *             priceV2 {
 *               ...MoneyFragment
 *             }
 *             requiresShipping
 *             title
 *             image {
 *               ...ImageFragment
 *             }
 *             product {
 *               handle
 *               title
 *             }
 *             selectedOptions {
 *               name
 *               value
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 *   estimatedCost {
 *     subtotalAmount {
 *       ...MoneyFragment
 *     }
 *     totalAmount {
 *       ...MoneyFragment
 *     }
 *     totalDutyAmount {
 *       ...MoneyFragment
 *     }
 *     totalTaxAmount {
 *       ...MoneyFragment
 *     }
 *   }
 *   note
 *   attributes {
 *     key
 *     value
 *   }
 *   discountCodes {
 *     code
 *   }
 * }
 *
 * fragment MoneyFragment on MoneyV2 {
 *   currencyCode
 *   amount
 * }
 * fragment ImageFragment on Image {
 *   id
 *   url
 *   altText
 *   width
 *   height
 * }
 *
 *```
 */
export declare const CartLineUpdate = "\nmutation CartLineUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {\n  cartLinesUpdate(cartId: $cartId, lines: $lines) {\n    cart {\n      ...CartFragment\n    }\n  }\n}\n\nfragment CartFragment on Cart {\n  id\n  checkoutUrl\n  buyerIdentity {\n    countryCode\n    customer {\n      id\n      email\n      firstName\n      lastName\n      displayName\n    }\n    email\n    phone\n  }\n  lines(first: $numCartLines) {\n    edges {\n      node {\n        id\n        quantity\n        attributes {\n          key\n          value\n        }\n        merchandise {\n          ... on ProductVariant {\n            id\n            availableForSale\n            compareAtPriceV2 {\n              ...MoneyFragment\n            }\n            priceV2 {\n              ...MoneyFragment\n            }\n            requiresShipping\n            title\n            image {\n              ...ImageFragment\n            }\n            product {\n              handle\n              title\n            }\n            selectedOptions {\n              name\n              value\n            }\n          }\n        }\n      }\n    }\n  }\n  estimatedCost {\n    subtotalAmount {\n      ...MoneyFragment\n    }\n    totalAmount {\n      ...MoneyFragment\n    }\n    totalDutyAmount {\n      ...MoneyFragment\n    }\n    totalTaxAmount {\n      ...MoneyFragment\n    }\n  }\n  note\n  attributes {\n    key\n    value\n  }\n  discountCodes {\n    code\n  }\n}\n\nfragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}\nfragment ImageFragment on Image {\n  id\n  url\n  altText\n  width\n  height\n}\n";
/**
 *```
 *
 * mutation CartNoteUpdate($cartId: ID!, $note: String, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
 *   cartNoteUpdate(cartId: $cartId, note: $note) {
 *     cart {
 *       ...CartFragment
 *     }
 *   }
 * }
 *
 * fragment CartFragment on Cart {
 *   id
 *   checkoutUrl
 *   buyerIdentity {
 *     countryCode
 *     customer {
 *       id
 *       email
 *       firstName
 *       lastName
 *       displayName
 *     }
 *     email
 *     phone
 *   }
 *   lines(first: $numCartLines) {
 *     edges {
 *       node {
 *         id
 *         quantity
 *         attributes {
 *           key
 *           value
 *         }
 *         merchandise {
 *           ... on ProductVariant {
 *             id
 *             availableForSale
 *             compareAtPriceV2 {
 *               ...MoneyFragment
 *             }
 *             priceV2 {
 *               ...MoneyFragment
 *             }
 *             requiresShipping
 *             title
 *             image {
 *               ...ImageFragment
 *             }
 *             product {
 *               handle
 *               title
 *             }
 *             selectedOptions {
 *               name
 *               value
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 *   estimatedCost {
 *     subtotalAmount {
 *       ...MoneyFragment
 *     }
 *     totalAmount {
 *       ...MoneyFragment
 *     }
 *     totalDutyAmount {
 *       ...MoneyFragment
 *     }
 *     totalTaxAmount {
 *       ...MoneyFragment
 *     }
 *   }
 *   note
 *   attributes {
 *     key
 *     value
 *   }
 *   discountCodes {
 *     code
 *   }
 * }
 *
 * fragment MoneyFragment on MoneyV2 {
 *   currencyCode
 *   amount
 * }
 * fragment ImageFragment on Image {
 *   id
 *   url
 *   altText
 *   width
 *   height
 * }
 *
 *```
 */
export declare const CartNoteUpdate = "\nmutation CartNoteUpdate($cartId: ID!, $note: String, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {\n  cartNoteUpdate(cartId: $cartId, note: $note) {\n    cart {\n      ...CartFragment\n    }\n  }\n}\n\nfragment CartFragment on Cart {\n  id\n  checkoutUrl\n  buyerIdentity {\n    countryCode\n    customer {\n      id\n      email\n      firstName\n      lastName\n      displayName\n    }\n    email\n    phone\n  }\n  lines(first: $numCartLines) {\n    edges {\n      node {\n        id\n        quantity\n        attributes {\n          key\n          value\n        }\n        merchandise {\n          ... on ProductVariant {\n            id\n            availableForSale\n            compareAtPriceV2 {\n              ...MoneyFragment\n            }\n            priceV2 {\n              ...MoneyFragment\n            }\n            requiresShipping\n            title\n            image {\n              ...ImageFragment\n            }\n            product {\n              handle\n              title\n            }\n            selectedOptions {\n              name\n              value\n            }\n          }\n        }\n      }\n    }\n  }\n  estimatedCost {\n    subtotalAmount {\n      ...MoneyFragment\n    }\n    totalAmount {\n      ...MoneyFragment\n    }\n    totalDutyAmount {\n      ...MoneyFragment\n    }\n    totalTaxAmount {\n      ...MoneyFragment\n    }\n  }\n  note\n  attributes {\n    key\n    value\n  }\n  discountCodes {\n    code\n  }\n}\n\nfragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}\nfragment ImageFragment on Image {\n  id\n  url\n  altText\n  width\n  height\n}\n";
/**
 *```
 *
 * query CartQuery($id: ID!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
 *   cart(id: $id) {
 *     ...CartFragment
 *   }
 * }
 *
 * fragment CartFragment on Cart {
 *   id
 *   checkoutUrl
 *   buyerIdentity {
 *     countryCode
 *     customer {
 *       id
 *       email
 *       firstName
 *       lastName
 *       displayName
 *     }
 *     email
 *     phone
 *   }
 *   lines(first: $numCartLines) {
 *     edges {
 *       node {
 *         id
 *         quantity
 *         attributes {
 *           key
 *           value
 *         }
 *         merchandise {
 *           ... on ProductVariant {
 *             id
 *             availableForSale
 *             compareAtPriceV2 {
 *               ...MoneyFragment
 *             }
 *             priceV2 {
 *               ...MoneyFragment
 *             }
 *             requiresShipping
 *             title
 *             image {
 *               ...ImageFragment
 *             }
 *             product {
 *               handle
 *               title
 *             }
 *             selectedOptions {
 *               name
 *               value
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 *   estimatedCost {
 *     subtotalAmount {
 *       ...MoneyFragment
 *     }
 *     totalAmount {
 *       ...MoneyFragment
 *     }
 *     totalDutyAmount {
 *       ...MoneyFragment
 *     }
 *     totalTaxAmount {
 *       ...MoneyFragment
 *     }
 *   }
 *   note
 *   attributes {
 *     key
 *     value
 *   }
 *   discountCodes {
 *     code
 *   }
 * }
 *
 * fragment MoneyFragment on MoneyV2 {
 *   currencyCode
 *   amount
 * }
 * fragment ImageFragment on Image {
 *   id
 *   url
 *   altText
 *   width
 *   height
 * }
 *
 *```
 */
export declare const CartQuery = "\nquery CartQuery($id: ID!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {\n  cart(id: $id) {\n    ...CartFragment\n  }\n}\n\nfragment CartFragment on Cart {\n  id\n  checkoutUrl\n  buyerIdentity {\n    countryCode\n    customer {\n      id\n      email\n      firstName\n      lastName\n      displayName\n    }\n    email\n    phone\n  }\n  lines(first: $numCartLines) {\n    edges {\n      node {\n        id\n        quantity\n        attributes {\n          key\n          value\n        }\n        merchandise {\n          ... on ProductVariant {\n            id\n            availableForSale\n            compareAtPriceV2 {\n              ...MoneyFragment\n            }\n            priceV2 {\n              ...MoneyFragment\n            }\n            requiresShipping\n            title\n            image {\n              ...ImageFragment\n            }\n            product {\n              handle\n              title\n            }\n            selectedOptions {\n              name\n              value\n            }\n          }\n        }\n      }\n    }\n  }\n  estimatedCost {\n    subtotalAmount {\n      ...MoneyFragment\n    }\n    totalAmount {\n      ...MoneyFragment\n    }\n    totalDutyAmount {\n      ...MoneyFragment\n    }\n    totalTaxAmount {\n      ...MoneyFragment\n    }\n  }\n  note\n  attributes {\n    key\n    value\n  }\n  discountCodes {\n    code\n  }\n}\n\nfragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}\nfragment ImageFragment on Image {\n  id\n  url\n  altText\n  width\n  height\n}\n";
/**
*```
* fragment ExternalVideoFragment on ExternalVideo {
*   id
*   embeddedUrl
*   host
* }
*

*```
*/
export declare const ExternalVideoFragment = "fragment ExternalVideoFragment on ExternalVideo {\n  id\n  embeddedUrl\n  host\n}\n\n";
/**
*```
* fragment ImageFragment on Image {
*   id
*   url
*   altText
*   width
*   height
* }
*

*```
*/
export declare const ImageFragment = "fragment ImageFragment on Image {\n  id\n  url\n  altText\n  width\n  height\n}\n\n";
/**
*```
* query Localization {
*   localization {
*     country {
*       isoCode
*       name
*       currency {
*         isoCode
*       }
*     }
*     availableCountries {
*       isoCode
*       name
*       currency {
*         isoCode
*       }
*     }
*   }
* }
*

*```
*/
export declare const Localization = "query Localization {\n  localization {\n    country {\n      isoCode\n      name\n      currency {\n        isoCode\n      }\n    }\n    availableCountries {\n      isoCode\n      name\n      currency {\n        isoCode\n      }\n    }\n  }\n}\n\n";
/**
 *```
 *
 * fragment MediaFileFragment on Media {
 *   ... on MediaImage {
 *     mediaContentType
 *     image {
 *       ...ImageFragment
 *     }
 *   }
 *   ... on Video {
 *     mediaContentType
 *     ...VideoFragment
 *   }
 *   ... on ExternalVideo {
 *     mediaContentType
 *     ...ExternalVideoFragment
 *   }
 *   ... on Model3d {
 *     mediaContentType
 *     ...Model3DFragment
 *   }
 * }
 *
 * fragment ImageFragment on Image {
 *   id
 *   url
 *   altText
 *   width
 *   height
 * }
 *
 * fragment VideoFragment on Video {
 *   id
 *   previewImage {
 *     url
 *   }
 *   sources {
 *     mimeType
 *     url
 *   }
 * }
 *
 * fragment ExternalVideoFragment on ExternalVideo {
 *   id
 *   embeddedUrl
 *   host
 * }
 *
 * fragment Model3DFragment on Model3d {
 *   id
 *   alt
 *   mediaContentType
 *   previewImage {
 *     url
 *   }
 *   sources {
 *     url
 *   }
 * }
 *
 *```
 */
export declare const MediaFileFragment = "\nfragment MediaFileFragment on Media {\n  ... on MediaImage {\n    mediaContentType\n    image {\n      ...ImageFragment\n    }\n  }\n  ... on Video {\n    mediaContentType\n    ...VideoFragment\n  }\n  ... on ExternalVideo {\n    mediaContentType\n    ...ExternalVideoFragment\n  }\n  ... on Model3d {\n    mediaContentType\n    ...Model3DFragment\n  }\n}\n\nfragment ImageFragment on Image {\n  id\n  url\n  altText\n  width\n  height\n}\n\nfragment VideoFragment on Video {\n  id\n  previewImage {\n    url\n  }\n  sources {\n    mimeType\n    url\n  }\n}\n\nfragment ExternalVideoFragment on ExternalVideo {\n  id\n  embeddedUrl\n  host\n}\n\nfragment Model3DFragment on Model3d {\n  id\n  alt\n  mediaContentType\n  previewImage {\n    url\n  }\n  sources {\n    url\n  }\n}\n";
/**
 *```
 *
 * fragment MetafieldFragment on Metafield {
 *   id
 *   type
 *   namespace
 *   key
 *   value
 *   createdAt
 *   updatedAt
 *   description
 *   reference @include(if: $includeReferenceMetafieldDetails) {
 *     __typename
 *     ... on MediaImage {
 *       id
 *       mediaContentType
 *       image {
 *         ...ImageFragment
 *       }
 *     }
 *   }
 * }
 * fragment ImageFragment on Image {
 *   id
 *   url
 *   altText
 *   width
 *   height
 * }
 *
 *```
 */
export declare const MetafieldFragment = "\nfragment MetafieldFragment on Metafield {\n  id\n  type\n  namespace\n  key\n  value\n  createdAt\n  updatedAt\n  description\n  reference @include(if: $includeReferenceMetafieldDetails) {\n    __typename\n    ... on MediaImage {\n      id\n      mediaContentType\n      image {\n        ...ImageFragment\n      }\n    }\n  }\n}\nfragment ImageFragment on Image {\n  id\n  url\n  altText\n  width\n  height\n}\n";
/**
*```
* fragment Model3DFragment on Model3d {
*   id
*   alt
*   mediaContentType
*   previewImage {
*     url
*   }
*   sources {
*     url
*   }
* }
*

*```
*/
export declare const Model3DFragment = "fragment Model3DFragment on Model3d {\n  id\n  alt\n  mediaContentType\n  previewImage {\n    url\n  }\n  sources {\n    url\n  }\n}\n\n";
/**
*```
* fragment MoneyFragment on MoneyV2 {
*   currencyCode
*   amount
* }

*```
*/
export declare const MoneyFragment = "fragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}\n";
/**
 *```
 *
 * fragment ProductProviderFragment on Product  {
 *   compareAtPriceRange {
 *     maxVariantPrice {
 *       ...MoneyFragment
 *     }
 *     minVariantPrice {
 *       ...MoneyFragment
 *     }
 *   }
 *   descriptionHtml
 *   handle
 *   id
 *   media(first: $numProductMedia) {
 *     edges {
 *       node {
 *         ...MediaFileFragment
 *       }
 *     }
 *   }
 *   metafields(first: $numProductMetafields) {
 *     edges {
 *       node {
 *         ...MetafieldFragment
 *       }
 *     }
 *   }
 *   priceRange {
 *     maxVariantPrice {
 *       ...MoneyFragment
 *     }
 *     minVariantPrice {
 *       ...MoneyFragment
 *     }
 *   }
 *   title
 *   variants(first: $numProductVariants) {
 *     edges {
 *       node {
 *         ...VariantFragment
 *       }
 *     }
 *   }
 *   sellingPlanGroups(first: $numProductSellingPlanGroups) {
 *     edges {
 *       node {
 *         ...SellingPlanGroupsFragment
 *       }
 *     }
 *   }
 * }
 *
 *
 * fragment MediaFileFragment on Media {
 *   ... on MediaImage {
 *     mediaContentType
 *     image {
 *       ...ImageFragment
 *     }
 *   }
 *   ... on Video {
 *     mediaContentType
 *     ...VideoFragment
 *   }
 *   ... on ExternalVideo {
 *     mediaContentType
 *     ...ExternalVideoFragment
 *   }
 *   ... on Model3d {
 *     mediaContentType
 *     ...Model3DFragment
 *   }
 * }
 *
 *
 * fragment MetafieldFragment on Metafield {
 *   id
 *   type
 *   namespace
 *   key
 *   value
 *   createdAt
 *   updatedAt
 *   description
 *   reference @include(if: $includeReferenceMetafieldDetails) {
 *     __typename
 *     ... on MediaImage {
 *       id
 *       mediaContentType
 *       image {
 *         ...ImageFragment
 *       }
 *     }
 *   }
 * }
 *
 * fragment VariantFragment on ProductVariant {
 *   id
 *   title
 *   availableForSale
 *   image {
 *     ...ImageFragment
 *   }
 *   ...UnitPriceFragment
 *   priceV2 {
 *     ...MoneyFragment
 *   }
 *   compareAtPriceV2 {
 *     ...MoneyFragment
 *   }
 *   selectedOptions {
 *     name
 *     value
 *   }
 *   metafields(first: $numProductVariantMetafields) {
 *     edges {
 *       node {
 *         ...MetafieldFragment
 *       }
 *     }
 *   }
 *   sellingPlanAllocations(first: $numProductVariantSellingPlanAllocations) {
 *     edges {
 *       node {
 *         priceAdjustments {
 *           compareAtPrice {
 *             ...MoneyFragment
 *           }
 *           perDeliveryPrice {
 *             ...MoneyFragment
 *           }
 *           price {
 *             ...MoneyFragment
 *           }
 *           unitPrice {
 *             ...MoneyFragment
 *           }
 *         }
 *         sellingPlan {
 *           ...SellingPlanFragment
 *         }
 *       }
 *     }
 *   }
 * }
 *
 *
 * fragment SellingPlanGroupsFragment on SellingPlanGroup {
 *   sellingPlans(first:$numProductSellingPlans) {
 *     edges {
 *       node {
 *         ...SellingPlanFragment
 *       }
 *     }
 *   }
 *   appName
 *   name
 *   options {
 *     name
 *     values
 *   }
 * }
 * fragment MoneyFragment on MoneyV2 {
 *   currencyCode
 *   amount
 * }
 * fragment ImageFragment on Image {
 *   id
 *   url
 *   altText
 *   width
 *   height
 * }
 *
 * fragment VideoFragment on Video {
 *   id
 *   previewImage {
 *     url
 *   }
 *   sources {
 *     mimeType
 *     url
 *   }
 * }
 *
 * fragment ExternalVideoFragment on ExternalVideo {
 *   id
 *   embeddedUrl
 *   host
 * }
 *
 * fragment Model3DFragment on Model3d {
 *   id
 *   alt
 *   mediaContentType
 *   previewImage {
 *     url
 *   }
 *   sources {
 *     url
 *   }
 * }
 *
 * fragment ImageFragment on Image {
 *   id
 *   url
 *   altText
 *   width
 *   height
 * }
 *
 *
 * fragment SellingPlanFragment on SellingPlan {
 *   id
 *   description
 *   name
 *   options {
 *     name
 *     value
 *   }
 *   priceAdjustments {
 *     orderCount
 *     adjustmentValue {
 *       ...on SellingPlanFixedAmountPriceAdjustment {
 *         adjustmentAmount {
 *           ...MoneyFragment
 *         }
 *       }
 *       ...on SellingPlanFixedPriceAdjustment {
 *         price {
 *           ...MoneyFragment
 *         }
 *       }
 *       ...on SellingPlanPercentagePriceAdjustment {
 *         adjustmentPercentage
 *       }
 *     }
 *   }
 *   recurringDeliveries
 * }
 * fragment MoneyFragment on MoneyV2 {
 *   currencyCode
 *   amount
 * }
 * fragment ImageFragment on Image {
 *   id
 *   url
 *   altText
 *   width
 *   height
 * }
 *
 *
 * fragment UnitPriceFragment on ProductVariant {
 *   unitPriceMeasurement {
 *     measuredType
 *     quantityUnit
 *     quantityValue
 *     referenceUnit
 *     referenceValue
 *   }
 *   unitPrice {
 *     ...MoneyFragment
 *   }
 * }
 * fragment MoneyFragment on MoneyV2 {
 *   currencyCode
 *   amount
 * }
 * fragment MoneyFragment on MoneyV2 {
 *   currencyCode
 *   amount
 * }
 *
 * fragment SellingPlanFragment on SellingPlan {
 *   id
 *   description
 *   name
 *   options {
 *     name
 *     value
 *   }
 *   priceAdjustments {
 *     orderCount
 *     adjustmentValue {
 *       ...on SellingPlanFixedAmountPriceAdjustment {
 *         adjustmentAmount {
 *           ...MoneyFragment
 *         }
 *       }
 *       ...on SellingPlanFixedPriceAdjustment {
 *         price {
 *           ...MoneyFragment
 *         }
 *       }
 *       ...on SellingPlanPercentagePriceAdjustment {
 *         adjustmentPercentage
 *       }
 *     }
 *   }
 *   recurringDeliveries
 * }
 * fragment MoneyFragment on MoneyV2 {
 *   currencyCode
 *   amount
 * }
 *```
 */
export declare const ProductProviderFragment = "\nfragment ProductProviderFragment on Product  {\n  compareAtPriceRange {\n    maxVariantPrice {\n      ...MoneyFragment\n    }\n    minVariantPrice {\n      ...MoneyFragment\n    }\n  }\n  descriptionHtml\n  handle\n  id\n  media(first: $numProductMedia) {\n    edges {\n      node {\n        ...MediaFileFragment\n      }\n    }\n  }\n  metafields(first: $numProductMetafields) {\n    edges {\n      node {\n        ...MetafieldFragment\n      }\n    }\n  }\n  priceRange {\n    maxVariantPrice {\n      ...MoneyFragment\n    }\n    minVariantPrice {\n      ...MoneyFragment\n    }\n  }\n  title\n  variants(first: $numProductVariants) {\n    edges {\n      node {\n        ...VariantFragment\n      }\n    }\n  }\n  sellingPlanGroups(first: $numProductSellingPlanGroups) {\n    edges {\n      node {\n        ...SellingPlanGroupsFragment\n      }\n    }\n  }\n}\n\n\nfragment MediaFileFragment on Media {\n  ... on MediaImage {\n    mediaContentType\n    image {\n      ...ImageFragment\n    }\n  }\n  ... on Video {\n    mediaContentType\n    ...VideoFragment\n  }\n  ... on ExternalVideo {\n    mediaContentType\n    ...ExternalVideoFragment\n  }\n  ... on Model3d {\n    mediaContentType\n    ...Model3DFragment\n  }\n}\n\n\nfragment MetafieldFragment on Metafield {\n  id\n  type\n  namespace\n  key\n  value\n  createdAt\n  updatedAt\n  description\n  reference @include(if: $includeReferenceMetafieldDetails) {\n    __typename\n    ... on MediaImage {\n      id\n      mediaContentType\n      image {\n        ...ImageFragment\n      }\n    }\n  }\n}\n\nfragment VariantFragment on ProductVariant {\n  id\n  title\n  availableForSale\n  image {\n    ...ImageFragment\n  }\n  ...UnitPriceFragment\n  priceV2 {\n    ...MoneyFragment\n  }\n  compareAtPriceV2 {\n    ...MoneyFragment\n  }\n  selectedOptions {\n    name\n    value\n  }\n  metafields(first: $numProductVariantMetafields) {\n    edges {\n      node {\n        ...MetafieldFragment\n      }\n    }\n  }\n  sellingPlanAllocations(first: $numProductVariantSellingPlanAllocations) {\n    edges {\n      node {\n        priceAdjustments {\n          compareAtPrice {\n            ...MoneyFragment\n          }\n          perDeliveryPrice {\n            ...MoneyFragment\n          }\n          price {\n            ...MoneyFragment\n          }\n          unitPrice {\n            ...MoneyFragment\n          }\n        }\n        sellingPlan {\n          ...SellingPlanFragment\n        }\n      }\n    }\n  }\n}\n\n\nfragment SellingPlanGroupsFragment on SellingPlanGroup {\n  sellingPlans(first:$numProductSellingPlans) {\n    edges {\n      node {\n        ...SellingPlanFragment\n      }\n    }\n  }\n  appName\n  name\n  options {\n    name\n    values\n  }\n}\nfragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}\nfragment ImageFragment on Image {\n  id\n  url\n  altText\n  width\n  height\n}\n\nfragment VideoFragment on Video {\n  id\n  previewImage {\n    url\n  }\n  sources {\n    mimeType\n    url\n  }\n}\n\nfragment ExternalVideoFragment on ExternalVideo {\n  id\n  embeddedUrl\n  host\n}\n\nfragment Model3DFragment on Model3d {\n  id\n  alt\n  mediaContentType\n  previewImage {\n    url\n  }\n  sources {\n    url\n  }\n}\n\nfragment ImageFragment on Image {\n  id\n  url\n  altText\n  width\n  height\n}\n\n\nfragment SellingPlanFragment on SellingPlan {\n  id\n  description\n  name\n  options {\n    name\n    value\n  }\n  priceAdjustments {\n    orderCount\n    adjustmentValue {\n      ...on SellingPlanFixedAmountPriceAdjustment {\n        adjustmentAmount {\n          ...MoneyFragment\n        }\n      }\n      ...on SellingPlanFixedPriceAdjustment {\n        price {\n          ...MoneyFragment\n        }\n      }\n      ...on SellingPlanPercentagePriceAdjustment {\n        adjustmentPercentage\n      }\n    }\n  }\n  recurringDeliveries\n}\nfragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}\nfragment ImageFragment on Image {\n  id\n  url\n  altText\n  width\n  height\n}\n\n\nfragment UnitPriceFragment on ProductVariant {\n  unitPriceMeasurement {\n    measuredType\n    quantityUnit\n    quantityValue\n    referenceUnit\n    referenceValue\n  }\n  unitPrice {\n    ...MoneyFragment\n  }\n}\nfragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}\nfragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}\n\nfragment SellingPlanFragment on SellingPlan {\n  id\n  description\n  name\n  options {\n    name\n    value\n  }\n  priceAdjustments {\n    orderCount\n    adjustmentValue {\n      ...on SellingPlanFixedAmountPriceAdjustment {\n        adjustmentAmount {\n          ...MoneyFragment\n        }\n      }\n      ...on SellingPlanFixedPriceAdjustment {\n        price {\n          ...MoneyFragment\n        }\n      }\n      ...on SellingPlanPercentagePriceAdjustment {\n        adjustmentPercentage\n      }\n    }\n  }\n  recurringDeliveries\n}\nfragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}";
/**
 *```
 *
 * fragment UnitPriceFragment on ProductVariant {
 *   unitPriceMeasurement {
 *     measuredType
 *     quantityUnit
 *     quantityValue
 *     referenceUnit
 *     referenceValue
 *   }
 *   unitPrice {
 *     ...MoneyFragment
 *   }
 * }
 * fragment MoneyFragment on MoneyV2 {
 *   currencyCode
 *   amount
 * }
 *```
 */
export declare const UnitPriceFragment = "\nfragment UnitPriceFragment on ProductVariant {\n  unitPriceMeasurement {\n    measuredType\n    quantityUnit\n    quantityValue\n    referenceUnit\n    referenceValue\n  }\n  unitPrice {\n    ...MoneyFragment\n  }\n}\nfragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}";
/**
*```
* fragment VideoFragment on Video {
*   id
*   previewImage {
*     url
*   }
*   sources {
*     mimeType
*     url
*   }
* }
*

*```
*/
export declare const VideoFragment = "fragment VideoFragment on Video {\n  id\n  previewImage {\n    url\n  }\n  sources {\n    mimeType\n    url\n  }\n}\n\n";
/**
 *```
 *
 * fragment SellingPlanFragment on SellingPlan {
 *   id
 *   description
 *   name
 *   options {
 *     name
 *     value
 *   }
 *   priceAdjustments {
 *     orderCount
 *     adjustmentValue {
 *       ...on SellingPlanFixedAmountPriceAdjustment {
 *         adjustmentAmount {
 *           ...MoneyFragment
 *         }
 *       }
 *       ...on SellingPlanFixedPriceAdjustment {
 *         price {
 *           ...MoneyFragment
 *         }
 *       }
 *       ...on SellingPlanPercentagePriceAdjustment {
 *         adjustmentPercentage
 *       }
 *     }
 *   }
 *   recurringDeliveries
 * }
 * fragment MoneyFragment on MoneyV2 {
 *   currencyCode
 *   amount
 * }
 *```
 */
export declare const SellingPlanFragment = "\nfragment SellingPlanFragment on SellingPlan {\n  id\n  description\n  name\n  options {\n    name\n    value\n  }\n  priceAdjustments {\n    orderCount\n    adjustmentValue {\n      ...on SellingPlanFixedAmountPriceAdjustment {\n        adjustmentAmount {\n          ...MoneyFragment\n        }\n      }\n      ...on SellingPlanFixedPriceAdjustment {\n        price {\n          ...MoneyFragment\n        }\n      }\n      ...on SellingPlanPercentagePriceAdjustment {\n        adjustmentPercentage\n      }\n    }\n  }\n  recurringDeliveries\n}\nfragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}";
/**
 *```
 *
 * fragment SellingPlanGroupsFragment on SellingPlanGroup {
 *   sellingPlans(first:$numProductSellingPlans) {
 *     edges {
 *       node {
 *         ...SellingPlanFragment
 *       }
 *     }
 *   }
 *   appName
 *   name
 *   options {
 *     name
 *     values
 *   }
 * }
 *
 * fragment SellingPlanFragment on SellingPlan {
 *   id
 *   description
 *   name
 *   options {
 *     name
 *     value
 *   }
 *   priceAdjustments {
 *     orderCount
 *     adjustmentValue {
 *       ...on SellingPlanFixedAmountPriceAdjustment {
 *         adjustmentAmount {
 *           ...MoneyFragment
 *         }
 *       }
 *       ...on SellingPlanFixedPriceAdjustment {
 *         price {
 *           ...MoneyFragment
 *         }
 *       }
 *       ...on SellingPlanPercentagePriceAdjustment {
 *         adjustmentPercentage
 *       }
 *     }
 *   }
 *   recurringDeliveries
 * }
 * fragment MoneyFragment on MoneyV2 {
 *   currencyCode
 *   amount
 * }
 *```
 */
export declare const SellingPlanGroupsFragment = "\nfragment SellingPlanGroupsFragment on SellingPlanGroup {\n  sellingPlans(first:$numProductSellingPlans) {\n    edges {\n      node {\n        ...SellingPlanFragment\n      }\n    }\n  }\n  appName\n  name\n  options {\n    name\n    values\n  }\n}\n\nfragment SellingPlanFragment on SellingPlan {\n  id\n  description\n  name\n  options {\n    name\n    value\n  }\n  priceAdjustments {\n    orderCount\n    adjustmentValue {\n      ...on SellingPlanFixedAmountPriceAdjustment {\n        adjustmentAmount {\n          ...MoneyFragment\n        }\n      }\n      ...on SellingPlanFixedPriceAdjustment {\n        price {\n          ...MoneyFragment\n        }\n      }\n      ...on SellingPlanPercentagePriceAdjustment {\n        adjustmentPercentage\n      }\n    }\n  }\n  recurringDeliveries\n}\nfragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}";
/**
 *```
 *
 * fragment VariantFragment on ProductVariant {
 *   id
 *   title
 *   availableForSale
 *   image {
 *     ...ImageFragment
 *   }
 *   ...UnitPriceFragment
 *   priceV2 {
 *     ...MoneyFragment
 *   }
 *   compareAtPriceV2 {
 *     ...MoneyFragment
 *   }
 *   selectedOptions {
 *     name
 *     value
 *   }
 *   metafields(first: $numProductVariantMetafields) {
 *     edges {
 *       node {
 *         ...MetafieldFragment
 *       }
 *     }
 *   }
 *   sellingPlanAllocations(first: $numProductVariantSellingPlanAllocations) {
 *     edges {
 *       node {
 *         priceAdjustments {
 *           compareAtPrice {
 *             ...MoneyFragment
 *           }
 *           perDeliveryPrice {
 *             ...MoneyFragment
 *           }
 *           price {
 *             ...MoneyFragment
 *           }
 *           unitPrice {
 *             ...MoneyFragment
 *           }
 *         }
 *         sellingPlan {
 *           ...SellingPlanFragment
 *         }
 *       }
 *     }
 *   }
 * }
 *
 *
 * fragment SellingPlanFragment on SellingPlan {
 *   id
 *   description
 *   name
 *   options {
 *     name
 *     value
 *   }
 *   priceAdjustments {
 *     orderCount
 *     adjustmentValue {
 *       ...on SellingPlanFixedAmountPriceAdjustment {
 *         adjustmentAmount {
 *           ...MoneyFragment
 *         }
 *       }
 *       ...on SellingPlanFixedPriceAdjustment {
 *         price {
 *           ...MoneyFragment
 *         }
 *       }
 *       ...on SellingPlanPercentagePriceAdjustment {
 *         adjustmentPercentage
 *       }
 *     }
 *   }
 *   recurringDeliveries
 * }
 * fragment MoneyFragment on MoneyV2 {
 *   currencyCode
 *   amount
 * }
 * fragment ImageFragment on Image {
 *   id
 *   url
 *   altText
 *   width
 *   height
 * }
 *
 *
 * fragment UnitPriceFragment on ProductVariant {
 *   unitPriceMeasurement {
 *     measuredType
 *     quantityUnit
 *     quantityValue
 *     referenceUnit
 *     referenceValue
 *   }
 *   unitPrice {
 *     ...MoneyFragment
 *   }
 * }
 * fragment MoneyFragment on MoneyV2 {
 *   currencyCode
 *   amount
 * }
 * fragment MoneyFragment on MoneyV2 {
 *   currencyCode
 *   amount
 * }
 *```
 */
export declare const VariantFragment = "\nfragment VariantFragment on ProductVariant {\n  id\n  title\n  availableForSale\n  image {\n    ...ImageFragment\n  }\n  ...UnitPriceFragment\n  priceV2 {\n    ...MoneyFragment\n  }\n  compareAtPriceV2 {\n    ...MoneyFragment\n  }\n  selectedOptions {\n    name\n    value\n  }\n  metafields(first: $numProductVariantMetafields) {\n    edges {\n      node {\n        ...MetafieldFragment\n      }\n    }\n  }\n  sellingPlanAllocations(first: $numProductVariantSellingPlanAllocations) {\n    edges {\n      node {\n        priceAdjustments {\n          compareAtPrice {\n            ...MoneyFragment\n          }\n          perDeliveryPrice {\n            ...MoneyFragment\n          }\n          price {\n            ...MoneyFragment\n          }\n          unitPrice {\n            ...MoneyFragment\n          }\n        }\n        sellingPlan {\n          ...SellingPlanFragment\n        }\n      }\n    }\n  }\n}\n\n\nfragment SellingPlanFragment on SellingPlan {\n  id\n  description\n  name\n  options {\n    name\n    value\n  }\n  priceAdjustments {\n    orderCount\n    adjustmentValue {\n      ...on SellingPlanFixedAmountPriceAdjustment {\n        adjustmentAmount {\n          ...MoneyFragment\n        }\n      }\n      ...on SellingPlanFixedPriceAdjustment {\n        price {\n          ...MoneyFragment\n        }\n      }\n      ...on SellingPlanPercentagePriceAdjustment {\n        adjustmentPercentage\n      }\n    }\n  }\n  recurringDeliveries\n}\nfragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}\nfragment ImageFragment on Image {\n  id\n  url\n  altText\n  width\n  height\n}\n\n\nfragment UnitPriceFragment on ProductVariant {\n  unitPriceMeasurement {\n    measuredType\n    quantityUnit\n    quantityValue\n    referenceUnit\n    referenceValue\n  }\n  unitPrice {\n    ...MoneyFragment\n  }\n}\nfragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}\nfragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}";
