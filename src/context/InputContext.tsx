import React, { useCallback, useState } from 'react';

interface IInputContext {
    value: string;
    searchValue: string;
    fetchResults: boolean;
    handleValueChange: (...args: any[]) => void;
    handleSearch: (shouldFetchResults: boolean) => void;
}

const InputContextValue: IInputContext = {
    value: '',
    searchValue: '',
    fetchResults: false,
    handleValueChange: () => {},
    handleSearch: () => {},
};

export const InputContext = React.createContext(InputContextValue);

const InputContextProvider: React.FC<{ children?: React.ReactNode }> = ({
    children,
}) => {
    const [value, setValue] = useState<string>('');
    const [searchValue, setSearchValue] = useState<string>('');
    const [fetchResults, setFetchResults] = useState<boolean>(false);

    const handleSearch = useCallback(
        (shouldFetchResults: boolean) => {
            if (!shouldFetchResults) {
                setValue('');
            } else {
                setSearchValue(value);
            }
            setFetchResults(shouldFetchResults);
        },
        [value]
    );

    return (
        <InputContext.Provider
            value={{
                value,
                searchValue,
                handleValueChange: setValue,
                fetchResults,
                handleSearch,
            }}
        >
            {children}
        </InputContext.Provider>
    );
};

export default InputContextProvider;
