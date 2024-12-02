import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
    FC,
} from "react";
// import { GeneralClassType } from "../types/GeneralClassType";
import { settings, props as _classes } from "../../lib/BlackSquareUI.json"
import { GeneralClassType } from "../../lib/types/GeneralClassType";

interface ClassesContextProps {
    classes: GeneralClassType[];
    saveClasses: () => void;
    updateClasses: (name: string, value: number | string) => void;
}
const ClassesContext = createContext<ClassesContextProps | undefined>(undefined);

export const ClassesProvider: FC<{ children: ReactNode }> = ({
    children,
}) => {
    const getInitialState = () => {
        const classes = localStorage.getItem("oo-settings");
        return classes ? JSON.parse(classes) : _classes;
    };
    const [classes, setClasses] = useState<GeneralClassType[]>(getInitialState);

    useEffect(() => {
        const styles = document.documentElement.style;
        classes.map(({ name, val, type }: GeneralClassType) =>
            styles.setProperty(`--oo-${name}`, val + (type === "range" ? settings.unit : "")))
    }, [classes]);


    const saveClasses = (): void => localStorage.setItem('oo-settings', JSON.stringify(classes))


    const updateClasses = (name: string, value: string | number): void =>
        setClasses((prevItems: GeneralClassType[]) =>
            prevItems.map(item =>
                item.name === name ? { ...item, val: value } : item
            )
        );

    return (
        <ClassesContext.Provider
            value={{ classes, updateClasses, saveClasses }}
        >
            {children}
        </ClassesContext.Provider>
    );
};

export const useClassesContext = () => {
    const context = useContext(ClassesContext);
    if (!context) {
        throw new Error("useClassesContext must be used within a ClassesProvider");
    }
    return context;
};