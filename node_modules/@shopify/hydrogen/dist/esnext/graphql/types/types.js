/** The set of valid sort keys for the Article query. */
export var ArticleSortKeys;
(function (ArticleSortKeys) {
    /** Sort by the `title` value. */
    ArticleSortKeys["Title"] = "TITLE";
    /** Sort by the `blog_title` value. */
    ArticleSortKeys["BlogTitle"] = "BLOG_TITLE";
    /** Sort by the `author` value. */
    ArticleSortKeys["Author"] = "AUTHOR";
    /** Sort by the `updated_at` value. */
    ArticleSortKeys["UpdatedAt"] = "UPDATED_AT";
    /** Sort by the `published_at` value. */
    ArticleSortKeys["PublishedAt"] = "PUBLISHED_AT";
    /** Sort by the `id` value. */
    ArticleSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    ArticleSortKeys["Relevance"] = "RELEVANCE";
})(ArticleSortKeys || (ArticleSortKeys = {}));
/** The set of valid sort keys for the Blog query. */
export var BlogSortKeys;
(function (BlogSortKeys) {
    /** Sort by the `handle` value. */
    BlogSortKeys["Handle"] = "HANDLE";
    /** Sort by the `title` value. */
    BlogSortKeys["Title"] = "TITLE";
    /** Sort by the `id` value. */
    BlogSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    BlogSortKeys["Relevance"] = "RELEVANCE";
})(BlogSortKeys || (BlogSortKeys = {}));
/** Card brand, such as Visa or Mastercard, which can be used for payments. */
export var CardBrand;
(function (CardBrand) {
    /** Visa. */
    CardBrand["Visa"] = "VISA";
    /** Mastercard. */
    CardBrand["Mastercard"] = "MASTERCARD";
    /** Discover. */
    CardBrand["Discover"] = "DISCOVER";
    /** American Express. */
    CardBrand["AmericanExpress"] = "AMERICAN_EXPRESS";
    /** Diners Club. */
    CardBrand["DinersClub"] = "DINERS_CLUB";
    /** JCB. */
    CardBrand["Jcb"] = "JCB";
    /** UnionPay. */
    CardBrand["Unionpay"] = "UNIONPAY";
    /** Elo. */
    CardBrand["Elo"] = "ELO";
})(CardBrand || (CardBrand = {}));
/** Possible error codes that could be returned by CartUserError. */
export var CartErrorCode;
(function (CartErrorCode) {
    /** The input value is invalid. */
    CartErrorCode["Invalid"] = "INVALID";
    /** The input value should be less than the maximum value allowed. */
    CartErrorCode["LessThan"] = "LESS_THAN";
    /** Merchandise line was not found in cart. */
    CartErrorCode["InvalidMerchandiseLine"] = "INVALID_MERCHANDISE_LINE";
    /** Missing discount code. */
    CartErrorCode["MissingDiscountCode"] = "MISSING_DISCOUNT_CODE";
    /** Missing note. */
    CartErrorCode["MissingNote"] = "MISSING_NOTE";
})(CartErrorCode || (CartErrorCode = {}));
/** Possible error codes that could be returned by CheckoutUserError. */
export var CheckoutErrorCode;
(function (CheckoutErrorCode) {
    /** The input value is blank. */
    CheckoutErrorCode["Blank"] = "BLANK";
    /** The input value is invalid. */
    CheckoutErrorCode["Invalid"] = "INVALID";
    /** The input value is too long. */
    CheckoutErrorCode["TooLong"] = "TOO_LONG";
    /** The input value needs to be blank. */
    CheckoutErrorCode["Present"] = "PRESENT";
    /** The input value should be less than the maximum value allowed. */
    CheckoutErrorCode["LessThan"] = "LESS_THAN";
    /** The input value should be greater than or equal to the minimum value allowed. */
    CheckoutErrorCode["GreaterThanOrEqualTo"] = "GREATER_THAN_OR_EQUAL_TO";
    /** The input value should be less than or equal to the maximum value allowed. */
    CheckoutErrorCode["LessThanOrEqualTo"] = "LESS_THAN_OR_EQUAL_TO";
    /** Checkout is already completed. */
    CheckoutErrorCode["AlreadyCompleted"] = "ALREADY_COMPLETED";
    /** Checkout is locked. */
    CheckoutErrorCode["Locked"] = "LOCKED";
    /** Input value is not supported. */
    CheckoutErrorCode["NotSupported"] = "NOT_SUPPORTED";
    /** Input email contains an invalid domain name. */
    CheckoutErrorCode["BadDomain"] = "BAD_DOMAIN";
    /** Input Zip is invalid for country provided. */
    CheckoutErrorCode["InvalidForCountry"] = "INVALID_FOR_COUNTRY";
    /** Input Zip is invalid for country and province provided. */
    CheckoutErrorCode["InvalidForCountryAndProvince"] = "INVALID_FOR_COUNTRY_AND_PROVINCE";
    /** Invalid state in country. */
    CheckoutErrorCode["InvalidStateInCountry"] = "INVALID_STATE_IN_COUNTRY";
    /** Invalid province in country. */
    CheckoutErrorCode["InvalidProvinceInCountry"] = "INVALID_PROVINCE_IN_COUNTRY";
    /** Invalid region in country. */
    CheckoutErrorCode["InvalidRegionInCountry"] = "INVALID_REGION_IN_COUNTRY";
    /** Shipping rate expired. */
    CheckoutErrorCode["ShippingRateExpired"] = "SHIPPING_RATE_EXPIRED";
    /** Gift card cannot be applied to a checkout that contains a gift card. */
    CheckoutErrorCode["GiftCardUnusable"] = "GIFT_CARD_UNUSABLE";
    /** Gift card is disabled. */
    CheckoutErrorCode["GiftCardDisabled"] = "GIFT_CARD_DISABLED";
    /** Gift card code is invalid. */
    CheckoutErrorCode["GiftCardCodeInvalid"] = "GIFT_CARD_CODE_INVALID";
    /** Gift card has already been applied. */
    CheckoutErrorCode["GiftCardAlreadyApplied"] = "GIFT_CARD_ALREADY_APPLIED";
    /** Gift card currency does not match checkout currency. */
    CheckoutErrorCode["GiftCardCurrencyMismatch"] = "GIFT_CARD_CURRENCY_MISMATCH";
    /** Gift card is expired. */
    CheckoutErrorCode["GiftCardExpired"] = "GIFT_CARD_EXPIRED";
    /** Gift card has no funds left. */
    CheckoutErrorCode["GiftCardDepleted"] = "GIFT_CARD_DEPLETED";
    /** Gift card was not found. */
    CheckoutErrorCode["GiftCardNotFound"] = "GIFT_CARD_NOT_FOUND";
    /** Cart does not meet discount requirements notice. */
    CheckoutErrorCode["CartDoesNotMeetDiscountRequirementsNotice"] = "CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE";
    /** Discount expired. */
    CheckoutErrorCode["DiscountExpired"] = "DISCOUNT_EXPIRED";
    /** Discount disabled. */
    CheckoutErrorCode["DiscountDisabled"] = "DISCOUNT_DISABLED";
    /** Discount limit reached. */
    CheckoutErrorCode["DiscountLimitReached"] = "DISCOUNT_LIMIT_REACHED";
    /** Discount not found. */
    CheckoutErrorCode["DiscountNotFound"] = "DISCOUNT_NOT_FOUND";
    /** Customer already used once per customer discount notice. */
    CheckoutErrorCode["CustomerAlreadyUsedOncePerCustomerDiscountNotice"] = "CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE";
    /** Checkout is already completed. */
    CheckoutErrorCode["Empty"] = "EMPTY";
    /** Not enough in stock. */
    CheckoutErrorCode["NotEnoughInStock"] = "NOT_ENOUGH_IN_STOCK";
    /** Missing payment input. */
    CheckoutErrorCode["MissingPaymentInput"] = "MISSING_PAYMENT_INPUT";
    /** The amount of the payment does not match the value to be paid. */
    CheckoutErrorCode["TotalPriceMismatch"] = "TOTAL_PRICE_MISMATCH";
    /** Line item was not found in checkout. */
    CheckoutErrorCode["LineItemNotFound"] = "LINE_ITEM_NOT_FOUND";
    /** Unable to apply discount. */
    CheckoutErrorCode["UnableToApply"] = "UNABLE_TO_APPLY";
    /** Discount already applied. */
    CheckoutErrorCode["DiscountAlreadyApplied"] = "DISCOUNT_ALREADY_APPLIED";
    /** Throttled during checkout. */
    CheckoutErrorCode["ThrottledDuringCheckout"] = "THROTTLED_DURING_CHECKOUT";
    /** Queue token has expired. */
    CheckoutErrorCode["ExpiredQueueToken"] = "EXPIRED_QUEUE_TOKEN";
    /** Queue token is invalid. */
    CheckoutErrorCode["InvalidQueueToken"] = "INVALID_QUEUE_TOKEN";
    /** Cannot specify country and presentment currency code. */
    CheckoutErrorCode["InvalidCountryAndCurrency"] = "INVALID_COUNTRY_AND_CURRENCY";
})(CheckoutErrorCode || (CheckoutErrorCode = {}));
/** The set of valid sort keys for the Collection query. */
export var CollectionSortKeys;
(function (CollectionSortKeys) {
    /** Sort by the `title` value. */
    CollectionSortKeys["Title"] = "TITLE";
    /** Sort by the `updated_at` value. */
    CollectionSortKeys["UpdatedAt"] = "UPDATED_AT";
    /** Sort by the `id` value. */
    CollectionSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    CollectionSortKeys["Relevance"] = "RELEVANCE";
})(CollectionSortKeys || (CollectionSortKeys = {}));
/** ISO 3166-1 alpha-2 country codes with some differences. */
export var CountryCode;
(function (CountryCode) {
    /** Afghanistan. */
    CountryCode["Af"] = "AF";
    /** Åland Islands. */
    CountryCode["Ax"] = "AX";
    /** Albania. */
    CountryCode["Al"] = "AL";
    /** Algeria. */
    CountryCode["Dz"] = "DZ";
    /** Andorra. */
    CountryCode["Ad"] = "AD";
    /** Angola. */
    CountryCode["Ao"] = "AO";
    /** Anguilla. */
    CountryCode["Ai"] = "AI";
    /** Antigua & Barbuda. */
    CountryCode["Ag"] = "AG";
    /** Argentina. */
    CountryCode["Ar"] = "AR";
    /** Armenia. */
    CountryCode["Am"] = "AM";
    /** Aruba. */
    CountryCode["Aw"] = "AW";
    /** Ascension Island. */
    CountryCode["Ac"] = "AC";
    /** Australia. */
    CountryCode["Au"] = "AU";
    /** Austria. */
    CountryCode["At"] = "AT";
    /** Azerbaijan. */
    CountryCode["Az"] = "AZ";
    /** Bahamas. */
    CountryCode["Bs"] = "BS";
    /** Bahrain. */
    CountryCode["Bh"] = "BH";
    /** Bangladesh. */
    CountryCode["Bd"] = "BD";
    /** Barbados. */
    CountryCode["Bb"] = "BB";
    /** Belarus. */
    CountryCode["By"] = "BY";
    /** Belgium. */
    CountryCode["Be"] = "BE";
    /** Belize. */
    CountryCode["Bz"] = "BZ";
    /** Benin. */
    CountryCode["Bj"] = "BJ";
    /** Bermuda. */
    CountryCode["Bm"] = "BM";
    /** Bhutan. */
    CountryCode["Bt"] = "BT";
    /** Bolivia. */
    CountryCode["Bo"] = "BO";
    /** Bosnia & Herzegovina. */
    CountryCode["Ba"] = "BA";
    /** Botswana. */
    CountryCode["Bw"] = "BW";
    /** Bouvet Island. */
    CountryCode["Bv"] = "BV";
    /** Brazil. */
    CountryCode["Br"] = "BR";
    /** British Indian Ocean Territory. */
    CountryCode["Io"] = "IO";
    /** Brunei. */
    CountryCode["Bn"] = "BN";
    /** Bulgaria. */
    CountryCode["Bg"] = "BG";
    /** Burkina Faso. */
    CountryCode["Bf"] = "BF";
    /** Burundi. */
    CountryCode["Bi"] = "BI";
    /** Cambodia. */
    CountryCode["Kh"] = "KH";
    /** Canada. */
    CountryCode["Ca"] = "CA";
    /** Cape Verde. */
    CountryCode["Cv"] = "CV";
    /** Caribbean Netherlands. */
    CountryCode["Bq"] = "BQ";
    /** Cayman Islands. */
    CountryCode["Ky"] = "KY";
    /** Central African Republic. */
    CountryCode["Cf"] = "CF";
    /** Chad. */
    CountryCode["Td"] = "TD";
    /** Chile. */
    CountryCode["Cl"] = "CL";
    /** China. */
    CountryCode["Cn"] = "CN";
    /** Christmas Island. */
    CountryCode["Cx"] = "CX";
    /** Cocos (Keeling) Islands. */
    CountryCode["Cc"] = "CC";
    /** Colombia. */
    CountryCode["Co"] = "CO";
    /** Comoros. */
    CountryCode["Km"] = "KM";
    /** Congo - Brazzaville. */
    CountryCode["Cg"] = "CG";
    /** Congo - Kinshasa. */
    CountryCode["Cd"] = "CD";
    /** Cook Islands. */
    CountryCode["Ck"] = "CK";
    /** Costa Rica. */
    CountryCode["Cr"] = "CR";
    /** Croatia. */
    CountryCode["Hr"] = "HR";
    /** Cuba. */
    CountryCode["Cu"] = "CU";
    /** Curaçao. */
    CountryCode["Cw"] = "CW";
    /** Cyprus. */
    CountryCode["Cy"] = "CY";
    /** Czechia. */
    CountryCode["Cz"] = "CZ";
    /** Côte d’Ivoire. */
    CountryCode["Ci"] = "CI";
    /** Denmark. */
    CountryCode["Dk"] = "DK";
    /** Djibouti. */
    CountryCode["Dj"] = "DJ";
    /** Dominica. */
    CountryCode["Dm"] = "DM";
    /** Dominican Republic. */
    CountryCode["Do"] = "DO";
    /** Ecuador. */
    CountryCode["Ec"] = "EC";
    /** Egypt. */
    CountryCode["Eg"] = "EG";
    /** El Salvador. */
    CountryCode["Sv"] = "SV";
    /** Equatorial Guinea. */
    CountryCode["Gq"] = "GQ";
    /** Eritrea. */
    CountryCode["Er"] = "ER";
    /** Estonia. */
    CountryCode["Ee"] = "EE";
    /** Eswatini. */
    CountryCode["Sz"] = "SZ";
    /** Ethiopia. */
    CountryCode["Et"] = "ET";
    /** Falkland Islands. */
    CountryCode["Fk"] = "FK";
    /** Faroe Islands. */
    CountryCode["Fo"] = "FO";
    /** Fiji. */
    CountryCode["Fj"] = "FJ";
    /** Finland. */
    CountryCode["Fi"] = "FI";
    /** France. */
    CountryCode["Fr"] = "FR";
    /** French Guiana. */
    CountryCode["Gf"] = "GF";
    /** French Polynesia. */
    CountryCode["Pf"] = "PF";
    /** French Southern Territories. */
    CountryCode["Tf"] = "TF";
    /** Gabon. */
    CountryCode["Ga"] = "GA";
    /** Gambia. */
    CountryCode["Gm"] = "GM";
    /** Georgia. */
    CountryCode["Ge"] = "GE";
    /** Germany. */
    CountryCode["De"] = "DE";
    /** Ghana. */
    CountryCode["Gh"] = "GH";
    /** Gibraltar. */
    CountryCode["Gi"] = "GI";
    /** Greece. */
    CountryCode["Gr"] = "GR";
    /** Greenland. */
    CountryCode["Gl"] = "GL";
    /** Grenada. */
    CountryCode["Gd"] = "GD";
    /** Guadeloupe. */
    CountryCode["Gp"] = "GP";
    /** Guatemala. */
    CountryCode["Gt"] = "GT";
    /** Guernsey. */
    CountryCode["Gg"] = "GG";
    /** Guinea. */
    CountryCode["Gn"] = "GN";
    /** Guinea-Bissau. */
    CountryCode["Gw"] = "GW";
    /** Guyana. */
    CountryCode["Gy"] = "GY";
    /** Haiti. */
    CountryCode["Ht"] = "HT";
    /** Heard & McDonald Islands. */
    CountryCode["Hm"] = "HM";
    /** Vatican City. */
    CountryCode["Va"] = "VA";
    /** Honduras. */
    CountryCode["Hn"] = "HN";
    /** Hong Kong SAR. */
    CountryCode["Hk"] = "HK";
    /** Hungary. */
    CountryCode["Hu"] = "HU";
    /** Iceland. */
    CountryCode["Is"] = "IS";
    /** India. */
    CountryCode["In"] = "IN";
    /** Indonesia. */
    CountryCode["Id"] = "ID";
    /** Iran. */
    CountryCode["Ir"] = "IR";
    /** Iraq. */
    CountryCode["Iq"] = "IQ";
    /** Ireland. */
    CountryCode["Ie"] = "IE";
    /** Isle of Man. */
    CountryCode["Im"] = "IM";
    /** Israel. */
    CountryCode["Il"] = "IL";
    /** Italy. */
    CountryCode["It"] = "IT";
    /** Jamaica. */
    CountryCode["Jm"] = "JM";
    /** Japan. */
    CountryCode["Jp"] = "JP";
    /** Jersey. */
    CountryCode["Je"] = "JE";
    /** Jordan. */
    CountryCode["Jo"] = "JO";
    /** Kazakhstan. */
    CountryCode["Kz"] = "KZ";
    /** Kenya. */
    CountryCode["Ke"] = "KE";
    /** Kiribati. */
    CountryCode["Ki"] = "KI";
    /** North Korea. */
    CountryCode["Kp"] = "KP";
    /** Kosovo. */
    CountryCode["Xk"] = "XK";
    /** Kuwait. */
    CountryCode["Kw"] = "KW";
    /** Kyrgyzstan. */
    CountryCode["Kg"] = "KG";
    /** Laos. */
    CountryCode["La"] = "LA";
    /** Latvia. */
    CountryCode["Lv"] = "LV";
    /** Lebanon. */
    CountryCode["Lb"] = "LB";
    /** Lesotho. */
    CountryCode["Ls"] = "LS";
    /** Liberia. */
    CountryCode["Lr"] = "LR";
    /** Libya. */
    CountryCode["Ly"] = "LY";
    /** Liechtenstein. */
    CountryCode["Li"] = "LI";
    /** Lithuania. */
    CountryCode["Lt"] = "LT";
    /** Luxembourg. */
    CountryCode["Lu"] = "LU";
    /** Macao SAR. */
    CountryCode["Mo"] = "MO";
    /** Madagascar. */
    CountryCode["Mg"] = "MG";
    /** Malawi. */
    CountryCode["Mw"] = "MW";
    /** Malaysia. */
    CountryCode["My"] = "MY";
    /** Maldives. */
    CountryCode["Mv"] = "MV";
    /** Mali. */
    CountryCode["Ml"] = "ML";
    /** Malta. */
    CountryCode["Mt"] = "MT";
    /** Martinique. */
    CountryCode["Mq"] = "MQ";
    /** Mauritania. */
    CountryCode["Mr"] = "MR";
    /** Mauritius. */
    CountryCode["Mu"] = "MU";
    /** Mayotte. */
    CountryCode["Yt"] = "YT";
    /** Mexico. */
    CountryCode["Mx"] = "MX";
    /** Moldova. */
    CountryCode["Md"] = "MD";
    /** Monaco. */
    CountryCode["Mc"] = "MC";
    /** Mongolia. */
    CountryCode["Mn"] = "MN";
    /** Montenegro. */
    CountryCode["Me"] = "ME";
    /** Montserrat. */
    CountryCode["Ms"] = "MS";
    /** Morocco. */
    CountryCode["Ma"] = "MA";
    /** Mozambique. */
    CountryCode["Mz"] = "MZ";
    /** Myanmar (Burma). */
    CountryCode["Mm"] = "MM";
    /** Namibia. */
    CountryCode["Na"] = "NA";
    /** Nauru. */
    CountryCode["Nr"] = "NR";
    /** Nepal. */
    CountryCode["Np"] = "NP";
    /** Netherlands. */
    CountryCode["Nl"] = "NL";
    /** Netherlands Antilles. */
    CountryCode["An"] = "AN";
    /** New Caledonia. */
    CountryCode["Nc"] = "NC";
    /** New Zealand. */
    CountryCode["Nz"] = "NZ";
    /** Nicaragua. */
    CountryCode["Ni"] = "NI";
    /** Niger. */
    CountryCode["Ne"] = "NE";
    /** Nigeria. */
    CountryCode["Ng"] = "NG";
    /** Niue. */
    CountryCode["Nu"] = "NU";
    /** Norfolk Island. */
    CountryCode["Nf"] = "NF";
    /** North Macedonia. */
    CountryCode["Mk"] = "MK";
    /** Norway. */
    CountryCode["No"] = "NO";
    /** Oman. */
    CountryCode["Om"] = "OM";
    /** Pakistan. */
    CountryCode["Pk"] = "PK";
    /** Palestinian Territories. */
    CountryCode["Ps"] = "PS";
    /** Panama. */
    CountryCode["Pa"] = "PA";
    /** Papua New Guinea. */
    CountryCode["Pg"] = "PG";
    /** Paraguay. */
    CountryCode["Py"] = "PY";
    /** Peru. */
    CountryCode["Pe"] = "PE";
    /** Philippines. */
    CountryCode["Ph"] = "PH";
    /** Pitcairn Islands. */
    CountryCode["Pn"] = "PN";
    /** Poland. */
    CountryCode["Pl"] = "PL";
    /** Portugal. */
    CountryCode["Pt"] = "PT";
    /** Qatar. */
    CountryCode["Qa"] = "QA";
    /** Cameroon. */
    CountryCode["Cm"] = "CM";
    /** Réunion. */
    CountryCode["Re"] = "RE";
    /** Romania. */
    CountryCode["Ro"] = "RO";
    /** Russia. */
    CountryCode["Ru"] = "RU";
    /** Rwanda. */
    CountryCode["Rw"] = "RW";
    /** St. Barthélemy. */
    CountryCode["Bl"] = "BL";
    /** St. Helena. */
    CountryCode["Sh"] = "SH";
    /** St. Kitts & Nevis. */
    CountryCode["Kn"] = "KN";
    /** St. Lucia. */
    CountryCode["Lc"] = "LC";
    /** St. Martin. */
    CountryCode["Mf"] = "MF";
    /** St. Pierre & Miquelon. */
    CountryCode["Pm"] = "PM";
    /** Samoa. */
    CountryCode["Ws"] = "WS";
    /** San Marino. */
    CountryCode["Sm"] = "SM";
    /** São Tomé & Príncipe. */
    CountryCode["St"] = "ST";
    /** Saudi Arabia. */
    CountryCode["Sa"] = "SA";
    /** Senegal. */
    CountryCode["Sn"] = "SN";
    /** Serbia. */
    CountryCode["Rs"] = "RS";
    /** Seychelles. */
    CountryCode["Sc"] = "SC";
    /** Sierra Leone. */
    CountryCode["Sl"] = "SL";
    /** Singapore. */
    CountryCode["Sg"] = "SG";
    /** Sint Maarten. */
    CountryCode["Sx"] = "SX";
    /** Slovakia. */
    CountryCode["Sk"] = "SK";
    /** Slovenia. */
    CountryCode["Si"] = "SI";
    /** Solomon Islands. */
    CountryCode["Sb"] = "SB";
    /** Somalia. */
    CountryCode["So"] = "SO";
    /** South Africa. */
    CountryCode["Za"] = "ZA";
    /** South Georgia & South Sandwich Islands. */
    CountryCode["Gs"] = "GS";
    /** South Korea. */
    CountryCode["Kr"] = "KR";
    /** South Sudan. */
    CountryCode["Ss"] = "SS";
    /** Spain. */
    CountryCode["Es"] = "ES";
    /** Sri Lanka. */
    CountryCode["Lk"] = "LK";
    /** St. Vincent & Grenadines. */
    CountryCode["Vc"] = "VC";
    /** Sudan. */
    CountryCode["Sd"] = "SD";
    /** Suriname. */
    CountryCode["Sr"] = "SR";
    /** Svalbard & Jan Mayen. */
    CountryCode["Sj"] = "SJ";
    /** Sweden. */
    CountryCode["Se"] = "SE";
    /** Switzerland. */
    CountryCode["Ch"] = "CH";
    /** Syria. */
    CountryCode["Sy"] = "SY";
    /** Taiwan. */
    CountryCode["Tw"] = "TW";
    /** Tajikistan. */
    CountryCode["Tj"] = "TJ";
    /** Tanzania. */
    CountryCode["Tz"] = "TZ";
    /** Thailand. */
    CountryCode["Th"] = "TH";
    /** Timor-Leste. */
    CountryCode["Tl"] = "TL";
    /** Togo. */
    CountryCode["Tg"] = "TG";
    /** Tokelau. */
    CountryCode["Tk"] = "TK";
    /** Tonga. */
    CountryCode["To"] = "TO";
    /** Trinidad & Tobago. */
    CountryCode["Tt"] = "TT";
    /** Tristan da Cunha. */
    CountryCode["Ta"] = "TA";
    /** Tunisia. */
    CountryCode["Tn"] = "TN";
    /** Turkey. */
    CountryCode["Tr"] = "TR";
    /** Turkmenistan. */
    CountryCode["Tm"] = "TM";
    /** Turks & Caicos Islands. */
    CountryCode["Tc"] = "TC";
    /** Tuvalu. */
    CountryCode["Tv"] = "TV";
    /** Uganda. */
    CountryCode["Ug"] = "UG";
    /** Ukraine. */
    CountryCode["Ua"] = "UA";
    /** United Arab Emirates. */
    CountryCode["Ae"] = "AE";
    /** United Kingdom. */
    CountryCode["Gb"] = "GB";
    /** United States. */
    CountryCode["Us"] = "US";
    /** U.S. Outlying Islands. */
    CountryCode["Um"] = "UM";
    /** Uruguay. */
    CountryCode["Uy"] = "UY";
    /** Uzbekistan. */
    CountryCode["Uz"] = "UZ";
    /** Vanuatu. */
    CountryCode["Vu"] = "VU";
    /** Venezuela. */
    CountryCode["Ve"] = "VE";
    /** Vietnam. */
    CountryCode["Vn"] = "VN";
    /** British Virgin Islands. */
    CountryCode["Vg"] = "VG";
    /** Wallis & Futuna. */
    CountryCode["Wf"] = "WF";
    /** Western Sahara. */
    CountryCode["Eh"] = "EH";
    /** Yemen. */
    CountryCode["Ye"] = "YE";
    /** Zambia. */
    CountryCode["Zm"] = "ZM";
    /** Zimbabwe. */
    CountryCode["Zw"] = "ZW";
    /** Unknown Region. */
    CountryCode["Zz"] = "ZZ";
})(CountryCode || (CountryCode = {}));
/** The part of the image that should remain after cropping. */
export var CropRegion;
(function (CropRegion) {
    /** Keep the center of the image. */
    CropRegion["Center"] = "CENTER";
    /** Keep the top of the image. */
    CropRegion["Top"] = "TOP";
    /** Keep the bottom of the image. */
    CropRegion["Bottom"] = "BOTTOM";
    /** Keep the left of the image. */
    CropRegion["Left"] = "LEFT";
    /** Keep the right of the image. */
    CropRegion["Right"] = "RIGHT";
})(CropRegion || (CropRegion = {}));
/** Currency codes. */
export var CurrencyCode;
(function (CurrencyCode) {
    /** United States Dollars (USD). */
    CurrencyCode["Usd"] = "USD";
    /** Euro (EUR). */
    CurrencyCode["Eur"] = "EUR";
    /** United Kingdom Pounds (GBP). */
    CurrencyCode["Gbp"] = "GBP";
    /** Canadian Dollars (CAD). */
    CurrencyCode["Cad"] = "CAD";
    /** Afghan Afghani (AFN). */
    CurrencyCode["Afn"] = "AFN";
    /** Albanian Lek (ALL). */
    CurrencyCode["All"] = "ALL";
    /** Algerian Dinar (DZD). */
    CurrencyCode["Dzd"] = "DZD";
    /** Angolan Kwanza (AOA). */
    CurrencyCode["Aoa"] = "AOA";
    /** Argentine Pesos (ARS). */
    CurrencyCode["Ars"] = "ARS";
    /** Armenian Dram (AMD). */
    CurrencyCode["Amd"] = "AMD";
    /** Aruban Florin (AWG). */
    CurrencyCode["Awg"] = "AWG";
    /** Australian Dollars (AUD). */
    CurrencyCode["Aud"] = "AUD";
    /** Barbadian Dollar (BBD). */
    CurrencyCode["Bbd"] = "BBD";
    /** Azerbaijani Manat (AZN). */
    CurrencyCode["Azn"] = "AZN";
    /** Bangladesh Taka (BDT). */
    CurrencyCode["Bdt"] = "BDT";
    /** Bahamian Dollar (BSD). */
    CurrencyCode["Bsd"] = "BSD";
    /** Bahraini Dinar (BHD). */
    CurrencyCode["Bhd"] = "BHD";
    /** Burundian Franc (BIF). */
    CurrencyCode["Bif"] = "BIF";
    /** Belize Dollar (BZD). */
    CurrencyCode["Bzd"] = "BZD";
    /** Bermudian Dollar (BMD). */
    CurrencyCode["Bmd"] = "BMD";
    /** Bhutanese Ngultrum (BTN). */
    CurrencyCode["Btn"] = "BTN";
    /** Bosnia and Herzegovina Convertible Mark (BAM). */
    CurrencyCode["Bam"] = "BAM";
    /** Brazilian Real (BRL). */
    CurrencyCode["Brl"] = "BRL";
    /** Bolivian Boliviano (BOB). */
    CurrencyCode["Bob"] = "BOB";
    /** Botswana Pula (BWP). */
    CurrencyCode["Bwp"] = "BWP";
    /** Brunei Dollar (BND). */
    CurrencyCode["Bnd"] = "BND";
    /** Bulgarian Lev (BGN). */
    CurrencyCode["Bgn"] = "BGN";
    /** Burmese Kyat (MMK). */
    CurrencyCode["Mmk"] = "MMK";
    /** Cambodian Riel. */
    CurrencyCode["Khr"] = "KHR";
    /** Cape Verdean escudo (CVE). */
    CurrencyCode["Cve"] = "CVE";
    /** Cayman Dollars (KYD). */
    CurrencyCode["Kyd"] = "KYD";
    /** Central African CFA Franc (XAF). */
    CurrencyCode["Xaf"] = "XAF";
    /** Chilean Peso (CLP). */
    CurrencyCode["Clp"] = "CLP";
    /** Chinese Yuan Renminbi (CNY). */
    CurrencyCode["Cny"] = "CNY";
    /** Colombian Peso (COP). */
    CurrencyCode["Cop"] = "COP";
    /** Comorian Franc (KMF). */
    CurrencyCode["Kmf"] = "KMF";
    /** Congolese franc (CDF). */
    CurrencyCode["Cdf"] = "CDF";
    /** Costa Rican Colones (CRC). */
    CurrencyCode["Crc"] = "CRC";
    /** Croatian Kuna (HRK). */
    CurrencyCode["Hrk"] = "HRK";
    /** Czech Koruny (CZK). */
    CurrencyCode["Czk"] = "CZK";
    /** Danish Kroner (DKK). */
    CurrencyCode["Dkk"] = "DKK";
    /** Dominican Peso (DOP). */
    CurrencyCode["Dop"] = "DOP";
    /** East Caribbean Dollar (XCD). */
    CurrencyCode["Xcd"] = "XCD";
    /** Egyptian Pound (EGP). */
    CurrencyCode["Egp"] = "EGP";
    /** Ethiopian Birr (ETB). */
    CurrencyCode["Etb"] = "ETB";
    /** CFP Franc (XPF). */
    CurrencyCode["Xpf"] = "XPF";
    /** Fijian Dollars (FJD). */
    CurrencyCode["Fjd"] = "FJD";
    /** Gambian Dalasi (GMD). */
    CurrencyCode["Gmd"] = "GMD";
    /** Ghanaian Cedi (GHS). */
    CurrencyCode["Ghs"] = "GHS";
    /** Guatemalan Quetzal (GTQ). */
    CurrencyCode["Gtq"] = "GTQ";
    /** Guyanese Dollar (GYD). */
    CurrencyCode["Gyd"] = "GYD";
    /** Georgian Lari (GEL). */
    CurrencyCode["Gel"] = "GEL";
    /** Haitian Gourde (HTG). */
    CurrencyCode["Htg"] = "HTG";
    /** Honduran Lempira (HNL). */
    CurrencyCode["Hnl"] = "HNL";
    /** Hong Kong Dollars (HKD). */
    CurrencyCode["Hkd"] = "HKD";
    /** Hungarian Forint (HUF). */
    CurrencyCode["Huf"] = "HUF";
    /** Icelandic Kronur (ISK). */
    CurrencyCode["Isk"] = "ISK";
    /** Indian Rupees (INR). */
    CurrencyCode["Inr"] = "INR";
    /** Indonesian Rupiah (IDR). */
    CurrencyCode["Idr"] = "IDR";
    /** Israeli New Shekel (NIS). */
    CurrencyCode["Ils"] = "ILS";
    /** Iraqi Dinar (IQD). */
    CurrencyCode["Iqd"] = "IQD";
    /** Jamaican Dollars (JMD). */
    CurrencyCode["Jmd"] = "JMD";
    /** Japanese Yen (JPY). */
    CurrencyCode["Jpy"] = "JPY";
    /** Jersey Pound. */
    CurrencyCode["Jep"] = "JEP";
    /** Jordanian Dinar (JOD). */
    CurrencyCode["Jod"] = "JOD";
    /** Kazakhstani Tenge (KZT). */
    CurrencyCode["Kzt"] = "KZT";
    /** Kenyan Shilling (KES). */
    CurrencyCode["Kes"] = "KES";
    /** Kuwaiti Dinar (KWD). */
    CurrencyCode["Kwd"] = "KWD";
    /** Kyrgyzstani Som (KGS). */
    CurrencyCode["Kgs"] = "KGS";
    /** Laotian Kip (LAK). */
    CurrencyCode["Lak"] = "LAK";
    /** Latvian Lati (LVL). */
    CurrencyCode["Lvl"] = "LVL";
    /** Lebanese Pounds (LBP). */
    CurrencyCode["Lbp"] = "LBP";
    /** Lesotho Loti (LSL). */
    CurrencyCode["Lsl"] = "LSL";
    /** Liberian Dollar (LRD). */
    CurrencyCode["Lrd"] = "LRD";
    /** Lithuanian Litai (LTL). */
    CurrencyCode["Ltl"] = "LTL";
    /** Malagasy Ariary (MGA). */
    CurrencyCode["Mga"] = "MGA";
    /** Macedonia Denar (MKD). */
    CurrencyCode["Mkd"] = "MKD";
    /** Macanese Pataca (MOP). */
    CurrencyCode["Mop"] = "MOP";
    /** Malawian Kwacha (MWK). */
    CurrencyCode["Mwk"] = "MWK";
    /** Maldivian Rufiyaa (MVR). */
    CurrencyCode["Mvr"] = "MVR";
    /** Mexican Pesos (MXN). */
    CurrencyCode["Mxn"] = "MXN";
    /** Malaysian Ringgits (MYR). */
    CurrencyCode["Myr"] = "MYR";
    /** Mauritian Rupee (MUR). */
    CurrencyCode["Mur"] = "MUR";
    /** Moldovan Leu (MDL). */
    CurrencyCode["Mdl"] = "MDL";
    /** Moroccan Dirham. */
    CurrencyCode["Mad"] = "MAD";
    /** Mongolian Tugrik. */
    CurrencyCode["Mnt"] = "MNT";
    /** Mozambican Metical. */
    CurrencyCode["Mzn"] = "MZN";
    /** Namibian Dollar. */
    CurrencyCode["Nad"] = "NAD";
    /** Nepalese Rupee (NPR). */
    CurrencyCode["Npr"] = "NPR";
    /** Netherlands Antillean Guilder. */
    CurrencyCode["Ang"] = "ANG";
    /** New Zealand Dollars (NZD). */
    CurrencyCode["Nzd"] = "NZD";
    /** Nicaraguan Córdoba (NIO). */
    CurrencyCode["Nio"] = "NIO";
    /** Nigerian Naira (NGN). */
    CurrencyCode["Ngn"] = "NGN";
    /** Norwegian Kroner (NOK). */
    CurrencyCode["Nok"] = "NOK";
    /** Omani Rial (OMR). */
    CurrencyCode["Omr"] = "OMR";
    /** Panamian Balboa (PAB). */
    CurrencyCode["Pab"] = "PAB";
    /** Pakistani Rupee (PKR). */
    CurrencyCode["Pkr"] = "PKR";
    /** Papua New Guinean Kina (PGK). */
    CurrencyCode["Pgk"] = "PGK";
    /** Paraguayan Guarani (PYG). */
    CurrencyCode["Pyg"] = "PYG";
    /** Peruvian Nuevo Sol (PEN). */
    CurrencyCode["Pen"] = "PEN";
    /** Philippine Peso (PHP). */
    CurrencyCode["Php"] = "PHP";
    /** Polish Zlotych (PLN). */
    CurrencyCode["Pln"] = "PLN";
    /** Qatari Rial (QAR). */
    CurrencyCode["Qar"] = "QAR";
    /** Romanian Lei (RON). */
    CurrencyCode["Ron"] = "RON";
    /** Russian Rubles (RUB). */
    CurrencyCode["Rub"] = "RUB";
    /** Rwandan Franc (RWF). */
    CurrencyCode["Rwf"] = "RWF";
    /** Samoan Tala (WST). */
    CurrencyCode["Wst"] = "WST";
    /** Saudi Riyal (SAR). */
    CurrencyCode["Sar"] = "SAR";
    /** Sao Tome And Principe Dobra (STD). */
    CurrencyCode["Std"] = "STD";
    /** Serbian dinar (RSD). */
    CurrencyCode["Rsd"] = "RSD";
    /** Seychellois Rupee (SCR). */
    CurrencyCode["Scr"] = "SCR";
    /** Singapore Dollars (SGD). */
    CurrencyCode["Sgd"] = "SGD";
    /** Sudanese Pound (SDG). */
    CurrencyCode["Sdg"] = "SDG";
    /** Syrian Pound (SYP). */
    CurrencyCode["Syp"] = "SYP";
    /** South African Rand (ZAR). */
    CurrencyCode["Zar"] = "ZAR";
    /** South Korean Won (KRW). */
    CurrencyCode["Krw"] = "KRW";
    /** South Sudanese Pound (SSP). */
    CurrencyCode["Ssp"] = "SSP";
    /** Solomon Islands Dollar (SBD). */
    CurrencyCode["Sbd"] = "SBD";
    /** Sri Lankan Rupees (LKR). */
    CurrencyCode["Lkr"] = "LKR";
    /** Surinamese Dollar (SRD). */
    CurrencyCode["Srd"] = "SRD";
    /** Swazi Lilangeni (SZL). */
    CurrencyCode["Szl"] = "SZL";
    /** Swedish Kronor (SEK). */
    CurrencyCode["Sek"] = "SEK";
    /** Swiss Francs (CHF). */
    CurrencyCode["Chf"] = "CHF";
    /** Taiwan Dollars (TWD). */
    CurrencyCode["Twd"] = "TWD";
    /** Thai baht (THB). */
    CurrencyCode["Thb"] = "THB";
    /** Tanzanian Shilling (TZS). */
    CurrencyCode["Tzs"] = "TZS";
    /** Trinidad and Tobago Dollars (TTD). */
    CurrencyCode["Ttd"] = "TTD";
    /** Tunisian Dinar (TND). */
    CurrencyCode["Tnd"] = "TND";
    /** Turkish Lira (TRY). */
    CurrencyCode["Try"] = "TRY";
    /** Turkmenistani Manat (TMT). */
    CurrencyCode["Tmt"] = "TMT";
    /** Ugandan Shilling (UGX). */
    CurrencyCode["Ugx"] = "UGX";
    /** Ukrainian Hryvnia (UAH). */
    CurrencyCode["Uah"] = "UAH";
    /** United Arab Emirates Dirham (AED). */
    CurrencyCode["Aed"] = "AED";
    /** Uruguayan Pesos (UYU). */
    CurrencyCode["Uyu"] = "UYU";
    /** Uzbekistan som (UZS). */
    CurrencyCode["Uzs"] = "UZS";
    /** Vanuatu Vatu (VUV). */
    CurrencyCode["Vuv"] = "VUV";
    /** Vietnamese đồng (VND). */
    CurrencyCode["Vnd"] = "VND";
    /** West African CFA franc (XOF). */
    CurrencyCode["Xof"] = "XOF";
    /** Yemeni Rial (YER). */
    CurrencyCode["Yer"] = "YER";
    /** Zambian Kwacha (ZMW). */
    CurrencyCode["Zmw"] = "ZMW";
    /** Belarusian Ruble (BYN). */
    CurrencyCode["Byn"] = "BYN";
    /** Belarusian Ruble (BYR). */
    CurrencyCode["Byr"] = "BYR";
    /** Djiboutian Franc (DJF). */
    CurrencyCode["Djf"] = "DJF";
    /** Eritrean Nakfa (ERN). */
    CurrencyCode["Ern"] = "ERN";
    /** Falkland Islands Pounds (FKP). */
    CurrencyCode["Fkp"] = "FKP";
    /** Gibraltar Pounds (GIP). */
    CurrencyCode["Gip"] = "GIP";
    /** Guinean Franc (GNF). */
    CurrencyCode["Gnf"] = "GNF";
    /** Iranian Rial (IRR). */
    CurrencyCode["Irr"] = "IRR";
    /** Kiribati Dollar (KID). */
    CurrencyCode["Kid"] = "KID";
    /** Libyan Dinar (LYD). */
    CurrencyCode["Lyd"] = "LYD";
    /** Mauritanian Ouguiya (MRU). */
    CurrencyCode["Mru"] = "MRU";
    /** Sierra Leonean Leone (SLL). */
    CurrencyCode["Sll"] = "SLL";
    /** Saint Helena Pounds (SHP). */
    CurrencyCode["Shp"] = "SHP";
    /** Somali Shilling (SOS). */
    CurrencyCode["Sos"] = "SOS";
    /** Tajikistani Somoni (TJS). */
    CurrencyCode["Tjs"] = "TJS";
    /** Tongan Pa'anga (TOP). */
    CurrencyCode["Top"] = "TOP";
    /** Venezuelan Bolivares (VEF). */
    CurrencyCode["Vef"] = "VEF";
    /** Venezuelan Bolivares (VES). */
    CurrencyCode["Ves"] = "VES";
    /** Unrecognized currency. */
    CurrencyCode["Xxx"] = "XXX";
})(CurrencyCode || (CurrencyCode = {}));
/** Possible error codes that could be returned by CustomerUserError. */
export var CustomerErrorCode;
(function (CustomerErrorCode) {
    /** The input value is blank. */
    CustomerErrorCode["Blank"] = "BLANK";
    /** The input value is invalid. */
    CustomerErrorCode["Invalid"] = "INVALID";
    /** The input value is already taken. */
    CustomerErrorCode["Taken"] = "TAKEN";
    /** The input value is too long. */
    CustomerErrorCode["TooLong"] = "TOO_LONG";
    /** The input value is too short. */
    CustomerErrorCode["TooShort"] = "TOO_SHORT";
    /** Unidentified customer. */
    CustomerErrorCode["UnidentifiedCustomer"] = "UNIDENTIFIED_CUSTOMER";
    /** Customer is disabled. */
    CustomerErrorCode["CustomerDisabled"] = "CUSTOMER_DISABLED";
    /** Input password starts or ends with whitespace. */
    CustomerErrorCode["PasswordStartsOrEndsWithWhitespace"] = "PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE";
    /** Input contains HTML tags. */
    CustomerErrorCode["ContainsHtmlTags"] = "CONTAINS_HTML_TAGS";
    /** Input contains URL. */
    CustomerErrorCode["ContainsUrl"] = "CONTAINS_URL";
    /** Invalid activation token. */
    CustomerErrorCode["TokenInvalid"] = "TOKEN_INVALID";
    /** Customer already enabled. */
    CustomerErrorCode["AlreadyEnabled"] = "ALREADY_ENABLED";
    /** Address does not exist. */
    CustomerErrorCode["NotFound"] = "NOT_FOUND";
    /** Input email contains an invalid domain name. */
    CustomerErrorCode["BadDomain"] = "BAD_DOMAIN";
    /** Multipass token is not valid. */
    CustomerErrorCode["InvalidMultipassRequest"] = "INVALID_MULTIPASS_REQUEST";
})(CustomerErrorCode || (CustomerErrorCode = {}));
/** Digital wallet, such as Apple Pay, which can be used for accelerated checkouts. */
export var DigitalWallet;
(function (DigitalWallet) {
    /** Apple Pay. */
    DigitalWallet["ApplePay"] = "APPLE_PAY";
    /** Android Pay. */
    DigitalWallet["AndroidPay"] = "ANDROID_PAY";
    /** Google Pay. */
    DigitalWallet["GooglePay"] = "GOOGLE_PAY";
    /** Shopify Pay. */
    DigitalWallet["ShopifyPay"] = "SHOPIFY_PAY";
    /** Facebook Pay. */
    DigitalWallet["FacebookPay"] = "FACEBOOK_PAY";
})(DigitalWallet || (DigitalWallet = {}));
/** The method by which the discount's value is allocated onto its entitled lines. */
export var DiscountApplicationAllocationMethod;
(function (DiscountApplicationAllocationMethod) {
    /** The value is spread across all entitled lines. */
    DiscountApplicationAllocationMethod["Across"] = "ACROSS";
    /** The value is applied onto every entitled line. */
    DiscountApplicationAllocationMethod["Each"] = "EACH";
    /** The value is specifically applied onto a particular line. */
    DiscountApplicationAllocationMethod["One"] = "ONE";
})(DiscountApplicationAllocationMethod || (DiscountApplicationAllocationMethod = {}));
/**
 * Which lines on the order that the discount is allocated over, of the type
 * defined by the Discount Application's target_type.
 */
export var DiscountApplicationTargetSelection;
(function (DiscountApplicationTargetSelection) {
    /** The discount is allocated onto all the lines. */
    DiscountApplicationTargetSelection["All"] = "ALL";
    /** The discount is allocated onto only the lines it is entitled for. */
    DiscountApplicationTargetSelection["Entitled"] = "ENTITLED";
    /** The discount is allocated onto explicitly chosen lines. */
    DiscountApplicationTargetSelection["Explicit"] = "EXPLICIT";
})(DiscountApplicationTargetSelection || (DiscountApplicationTargetSelection = {}));
/** The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards. */
export var DiscountApplicationTargetType;
(function (DiscountApplicationTargetType) {
    /** The discount applies onto line items. */
    DiscountApplicationTargetType["LineItem"] = "LINE_ITEM";
    /** The discount applies onto shipping lines. */
    DiscountApplicationTargetType["ShippingLine"] = "SHIPPING_LINE";
})(DiscountApplicationTargetType || (DiscountApplicationTargetType = {}));
/** Denotes the type of data this filter group represents. */
export var FilterType;
(function (FilterType) {
    /** A list of selectable values. */
    FilterType["List"] = "LIST";
    /** A range of prices. */
    FilterType["PriceRange"] = "PRICE_RANGE";
})(FilterType || (FilterType = {}));
/** List of supported image content types. */
export var ImageContentType;
(function (ImageContentType) {
    /** A PNG image. */
    ImageContentType["Png"] = "PNG";
    /** A JPG image. */
    ImageContentType["Jpg"] = "JPG";
    /** A WEBP image. */
    ImageContentType["Webp"] = "WEBP";
})(ImageContentType || (ImageContentType = {}));
/** The set of valid sort keys for the Location query. */
export var LocationSortKeys;
(function (LocationSortKeys) {
    /** Sort by the `id` value. */
    LocationSortKeys["Id"] = "ID";
    /** Sort by the `name` value. */
    LocationSortKeys["Name"] = "NAME";
    /** Sort by the `city` value. */
    LocationSortKeys["City"] = "CITY";
    /** Sort by the `distance` value. */
    LocationSortKeys["Distance"] = "DISTANCE";
})(LocationSortKeys || (LocationSortKeys = {}));
/** The possible content types for a media object. */
export var MediaContentType;
(function (MediaContentType) {
    /** An externally hosted video. */
    MediaContentType["ExternalVideo"] = "EXTERNAL_VIDEO";
    /** A Shopify hosted image. */
    MediaContentType["Image"] = "IMAGE";
    /** A 3d model. */
    MediaContentType["Model_3D"] = "MODEL_3D";
    /** A Shopify hosted video. */
    MediaContentType["Video"] = "VIDEO";
})(MediaContentType || (MediaContentType = {}));
/** Host for a Media Resource. */
export var MediaHost;
(function (MediaHost) {
    /** Host for YouTube embedded videos. */
    MediaHost["Youtube"] = "YOUTUBE";
    /** Host for Vimeo embedded videos. */
    MediaHost["Vimeo"] = "VIMEO";
})(MediaHost || (MediaHost = {}));
/** Metafield value types. */
export var MetafieldValueType;
(function (MetafieldValueType) {
    /** A string metafield. */
    MetafieldValueType["String"] = "STRING";
    /** An integer metafield. */
    MetafieldValueType["Integer"] = "INTEGER";
    /** A json string metafield. */
    MetafieldValueType["JsonString"] = "JSON_STRING";
    /** A float metafield. */
    MetafieldValueType["Float"] = "FLOAT";
    /** A boolean metafield. */
    MetafieldValueType["Boolean"] = "BOOLEAN";
})(MetafieldValueType || (MetafieldValueType = {}));
/** Represents the reason for the order's cancellation. */
export var OrderCancelReason;
(function (OrderCancelReason) {
    /** The customer wanted to cancel the order. */
    OrderCancelReason["Customer"] = "CUSTOMER";
    /** The order was fraudulent. */
    OrderCancelReason["Fraud"] = "FRAUD";
    /** There was insufficient inventory. */
    OrderCancelReason["Inventory"] = "INVENTORY";
    /** Payment was declined. */
    OrderCancelReason["Declined"] = "DECLINED";
    /** The order was canceled for an unlisted reason. */
    OrderCancelReason["Other"] = "OTHER";
})(OrderCancelReason || (OrderCancelReason = {}));
/** Represents the order's current financial status. */
export var OrderFinancialStatus;
(function (OrderFinancialStatus) {
    /** Displayed as **Pending**. */
    OrderFinancialStatus["Pending"] = "PENDING";
    /** Displayed as **Authorized**. */
    OrderFinancialStatus["Authorized"] = "AUTHORIZED";
    /** Displayed as **Partially paid**. */
    OrderFinancialStatus["PartiallyPaid"] = "PARTIALLY_PAID";
    /** Displayed as **Partially refunded**. */
    OrderFinancialStatus["PartiallyRefunded"] = "PARTIALLY_REFUNDED";
    /** Displayed as **Voided**. */
    OrderFinancialStatus["Voided"] = "VOIDED";
    /** Displayed as **Paid**. */
    OrderFinancialStatus["Paid"] = "PAID";
    /** Displayed as **Refunded**. */
    OrderFinancialStatus["Refunded"] = "REFUNDED";
    /** Displayed as **Expired**. */
    OrderFinancialStatus["Expired"] = "EXPIRED";
})(OrderFinancialStatus || (OrderFinancialStatus = {}));
/** Represents the order's current fulfillment status. */
export var OrderFulfillmentStatus;
(function (OrderFulfillmentStatus) {
    /** Displayed as **Unfulfilled**. */
    OrderFulfillmentStatus["Unfulfilled"] = "UNFULFILLED";
    /** Displayed as **Partially fulfilled**. */
    OrderFulfillmentStatus["PartiallyFulfilled"] = "PARTIALLY_FULFILLED";
    /** Displayed as **Fulfilled**. */
    OrderFulfillmentStatus["Fulfilled"] = "FULFILLED";
    /** Displayed as **Restocked**. */
    OrderFulfillmentStatus["Restocked"] = "RESTOCKED";
    /** Displayed as **Pending fulfillment**. */
    OrderFulfillmentStatus["PendingFulfillment"] = "PENDING_FULFILLMENT";
    /** Displayed as **Open**. */
    OrderFulfillmentStatus["Open"] = "OPEN";
    /** Displayed as **In progress**. */
    OrderFulfillmentStatus["InProgress"] = "IN_PROGRESS";
    /** Displayed as **On hold**. */
    OrderFulfillmentStatus["OnHold"] = "ON_HOLD";
    /** Displayed as **Scheduled**. */
    OrderFulfillmentStatus["Scheduled"] = "SCHEDULED";
})(OrderFulfillmentStatus || (OrderFulfillmentStatus = {}));
/** The set of valid sort keys for the Order query. */
export var OrderSortKeys;
(function (OrderSortKeys) {
    /** Sort by the `processed_at` value. */
    OrderSortKeys["ProcessedAt"] = "PROCESSED_AT";
    /** Sort by the `total_price` value. */
    OrderSortKeys["TotalPrice"] = "TOTAL_PRICE";
    /** Sort by the `id` value. */
    OrderSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    OrderSortKeys["Relevance"] = "RELEVANCE";
})(OrderSortKeys || (OrderSortKeys = {}));
/** The set of valid sort keys for the Page query. */
export var PageSortKeys;
(function (PageSortKeys) {
    /** Sort by the `title` value. */
    PageSortKeys["Title"] = "TITLE";
    /** Sort by the `updated_at` value. */
    PageSortKeys["UpdatedAt"] = "UPDATED_AT";
    /** Sort by the `id` value. */
    PageSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    PageSortKeys["Relevance"] = "RELEVANCE";
})(PageSortKeys || (PageSortKeys = {}));
/** The valid values for the types of payment token. */
export var PaymentTokenType;
(function (PaymentTokenType) {
    /** Apple Pay token type. */
    PaymentTokenType["ApplePay"] = "APPLE_PAY";
    /** Vault payment token type. */
    PaymentTokenType["Vault"] = "VAULT";
    /** Shopify Pay token type. */
    PaymentTokenType["ShopifyPay"] = "SHOPIFY_PAY";
    /** Google Pay token type. */
    PaymentTokenType["GooglePay"] = "GOOGLE_PAY";
    /** Stripe token type. */
    PaymentTokenType["StripeVaultToken"] = "STRIPE_VAULT_TOKEN";
})(PaymentTokenType || (PaymentTokenType = {}));
/** The set of valid sort keys for the ProductCollection query. */
export var ProductCollectionSortKeys;
(function (ProductCollectionSortKeys) {
    /** Sort by the `title` value. */
    ProductCollectionSortKeys["Title"] = "TITLE";
    /** Sort by the `price` value. */
    ProductCollectionSortKeys["Price"] = "PRICE";
    /** Sort by the `best-selling` value. */
    ProductCollectionSortKeys["BestSelling"] = "BEST_SELLING";
    /** Sort by the `created` value. */
    ProductCollectionSortKeys["Created"] = "CREATED";
    /** Sort by the `id` value. */
    ProductCollectionSortKeys["Id"] = "ID";
    /** Sort by the `manual` value. */
    ProductCollectionSortKeys["Manual"] = "MANUAL";
    /** Sort by the `collection-default` value. */
    ProductCollectionSortKeys["CollectionDefault"] = "COLLECTION_DEFAULT";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    ProductCollectionSortKeys["Relevance"] = "RELEVANCE";
})(ProductCollectionSortKeys || (ProductCollectionSortKeys = {}));
/** The set of valid sort keys for the ProductImage query. */
export var ProductImageSortKeys;
(function (ProductImageSortKeys) {
    /** Sort by the `created_at` value. */
    ProductImageSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `position` value. */
    ProductImageSortKeys["Position"] = "POSITION";
    /** Sort by the `id` value. */
    ProductImageSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    ProductImageSortKeys["Relevance"] = "RELEVANCE";
})(ProductImageSortKeys || (ProductImageSortKeys = {}));
/** The set of valid sort keys for the ProductMedia query. */
export var ProductMediaSortKeys;
(function (ProductMediaSortKeys) {
    /** Sort by the `position` value. */
    ProductMediaSortKeys["Position"] = "POSITION";
    /** Sort by the `id` value. */
    ProductMediaSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    ProductMediaSortKeys["Relevance"] = "RELEVANCE";
})(ProductMediaSortKeys || (ProductMediaSortKeys = {}));
/** The set of valid sort keys for the Product query. */
export var ProductSortKeys;
(function (ProductSortKeys) {
    /** Sort by the `title` value. */
    ProductSortKeys["Title"] = "TITLE";
    /** Sort by the `product_type` value. */
    ProductSortKeys["ProductType"] = "PRODUCT_TYPE";
    /** Sort by the `vendor` value. */
    ProductSortKeys["Vendor"] = "VENDOR";
    /** Sort by the `updated_at` value. */
    ProductSortKeys["UpdatedAt"] = "UPDATED_AT";
    /** Sort by the `created_at` value. */
    ProductSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `best_selling` value. */
    ProductSortKeys["BestSelling"] = "BEST_SELLING";
    /** Sort by the `price` value. */
    ProductSortKeys["Price"] = "PRICE";
    /** Sort by the `id` value. */
    ProductSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    ProductSortKeys["Relevance"] = "RELEVANCE";
})(ProductSortKeys || (ProductSortKeys = {}));
/** The set of valid sort keys for the ProductVariant query. */
export var ProductVariantSortKeys;
(function (ProductVariantSortKeys) {
    /** Sort by the `title` value. */
    ProductVariantSortKeys["Title"] = "TITLE";
    /** Sort by the `sku` value. */
    ProductVariantSortKeys["Sku"] = "SKU";
    /** Sort by the `position` value. */
    ProductVariantSortKeys["Position"] = "POSITION";
    /** Sort by the `id` value. */
    ProductVariantSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    ProductVariantSortKeys["Relevance"] = "RELEVANCE";
})(ProductVariantSortKeys || (ProductVariantSortKeys = {}));
/** The different kinds of order transactions. */
export var TransactionKind;
(function (TransactionKind) {
    /** An authorization and capture performed together in a single step. */
    TransactionKind["Sale"] = "SALE";
    /** A transfer of the money that was reserved during the authorization stage. */
    TransactionKind["Capture"] = "CAPTURE";
    /**
     * An amount reserved against the cardholder's funding source.
     * Money does not change hands until the authorization is captured.
     */
    TransactionKind["Authorization"] = "AUTHORIZATION";
    /** An authorization for a payment taken with an EMV credit card reader. */
    TransactionKind["EmvAuthorization"] = "EMV_AUTHORIZATION";
    /** Money returned to the customer when they have paid too much. */
    TransactionKind["Change"] = "CHANGE";
})(TransactionKind || (TransactionKind = {}));
/** Transaction statuses describe the status of a transaction. */
export var TransactionStatus;
(function (TransactionStatus) {
    /** The transaction is pending. */
    TransactionStatus["Pending"] = "PENDING";
    /** The transaction succeeded. */
    TransactionStatus["Success"] = "SUCCESS";
    /** The transaction failed. */
    TransactionStatus["Failure"] = "FAILURE";
    /** There was an error while processing the transaction. */
    TransactionStatus["Error"] = "ERROR";
})(TransactionStatus || (TransactionStatus = {}));
/** The accepted types of unit of measurement. */
export var UnitPriceMeasurementMeasuredType;
(function (UnitPriceMeasurementMeasuredType) {
    /** Unit of measurements representing volumes. */
    UnitPriceMeasurementMeasuredType["Volume"] = "VOLUME";
    /** Unit of measurements representing weights. */
    UnitPriceMeasurementMeasuredType["Weight"] = "WEIGHT";
    /** Unit of measurements representing lengths. */
    UnitPriceMeasurementMeasuredType["Length"] = "LENGTH";
    /** Unit of measurements representing areas. */
    UnitPriceMeasurementMeasuredType["Area"] = "AREA";
})(UnitPriceMeasurementMeasuredType || (UnitPriceMeasurementMeasuredType = {}));
/** The valid units of measurement for a unit price measurement. */
export var UnitPriceMeasurementMeasuredUnit;
(function (UnitPriceMeasurementMeasuredUnit) {
    /** 1000 milliliters equals 1 liter. */
    UnitPriceMeasurementMeasuredUnit["Ml"] = "ML";
    /** 100 centiliters equals 1 liter. */
    UnitPriceMeasurementMeasuredUnit["Cl"] = "CL";
    /** Metric system unit of volume. */
    UnitPriceMeasurementMeasuredUnit["L"] = "L";
    /** 1 cubic meter equals 1000 liters. */
    UnitPriceMeasurementMeasuredUnit["M3"] = "M3";
    /** 1000 milligrams equals 1 gram. */
    UnitPriceMeasurementMeasuredUnit["Mg"] = "MG";
    /** Metric system unit of weight. */
    UnitPriceMeasurementMeasuredUnit["G"] = "G";
    /** 1 kilogram equals 1000 grams. */
    UnitPriceMeasurementMeasuredUnit["Kg"] = "KG";
    /** 1000 millimeters equals 1 meter. */
    UnitPriceMeasurementMeasuredUnit["Mm"] = "MM";
    /** 100 centimeters equals 1 meter. */
    UnitPriceMeasurementMeasuredUnit["Cm"] = "CM";
    /** Metric system unit of length. */
    UnitPriceMeasurementMeasuredUnit["M"] = "M";
    /** Metric system unit of area. */
    UnitPriceMeasurementMeasuredUnit["M2"] = "M2";
})(UnitPriceMeasurementMeasuredUnit || (UnitPriceMeasurementMeasuredUnit = {}));
/** Systems of weights and measures. */
export var UnitSystem;
(function (UnitSystem) {
    /** Imperial system of weights and measures. */
    UnitSystem["ImperialSystem"] = "IMPERIAL_SYSTEM";
    /** Metric system of weights and measures. */
    UnitSystem["MetricSystem"] = "METRIC_SYSTEM";
})(UnitSystem || (UnitSystem = {}));
/** Units of measurement for weight. */
export var WeightUnit;
(function (WeightUnit) {
    /** 1 kilogram equals 1000 grams. */
    WeightUnit["Kilograms"] = "KILOGRAMS";
    /** Metric system unit of mass. */
    WeightUnit["Grams"] = "GRAMS";
    /** 1 pound equals 16 ounces. */
    WeightUnit["Pounds"] = "POUNDS";
    /** Imperial system unit of mass. */
    WeightUnit["Ounces"] = "OUNCES";
})(WeightUnit || (WeightUnit = {}));
