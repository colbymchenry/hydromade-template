import React, { useMemo, useState, useCallback } from 'react';
import { LocalizationContext } from './LocalizationContext.client';
import { useServerState } from '../../foundation/useServerState';
export default function LocalizationClientProvider({ localization, children, }) {
    const { setServerState } = useServerState();
    const [country, setCountry] = useState(localization.country);
    const [availableCountries] = useState(localization.availableCountries);
    const setter = useCallback((country) => {
        setCountry(country);
        setServerState('country', country);
    }, [setServerState]);
    const contextValue = useMemo(() => {
        return {
            country,
            setCountry: setter,
            availableCountries,
        };
    }, [country, setter, availableCountries]);
    return (React.createElement(LocalizationContext.Provider, { value: contextValue }, children));
}
