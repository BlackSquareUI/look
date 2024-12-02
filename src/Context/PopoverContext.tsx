
import React, {
    createContext,
    useContext,
    ReactNode,
    useState,
} from "react";


interface PopoverContextProps {
    isHidden: boolean
    togglePopover: () => void;
}
const PopoverContext = createContext<PopoverContextProps | undefined>(undefined);

export const PopoverProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [isHidden, setIsHidden] = useState<boolean>(false);

    const togglePopover = (): void => setIsHidden(!isHidden)


    return (
        <PopoverContext.Provider
            value={{ isHidden, togglePopover }}
        >
            {children}
        </PopoverContext.Provider>
    );
};

export const usePopoverContext = () => {
    const context = useContext(PopoverContext);
    if (!context) {
        throw new Error("usePopoverContext must be used within a PopoverProvider");
    }
    return context;
};