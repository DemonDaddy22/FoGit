import React, { useState } from 'react';

interface IInputContext {
    value: string;
    handleValueChange: (...args: any[]) => void;
}

const InputContextValue: IInputContext = {
    value: '',
    handleValueChange: () => {},
};

export const InputContext = React.createContext(InputContextValue);

const InputContextProvider: React.FC<{ children?: React.ReactNode }> = ({
    children,
}) => {
    const [value, setValue] = useState<string>('');

    return (
        <InputContext.Provider value={{ value, handleValueChange: setValue }}>
            {children}
        </InputContext.Provider>
    );
};

export default InputContextProvider;
