export type GeneralClassType = {
    name: string;
    type: string;
    val: string | number;
    min?: number;
    max?: number;
    step?: number;
    onChange: (name: string, value: string | number) => void;
};
