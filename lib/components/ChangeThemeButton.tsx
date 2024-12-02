import { useRef, ChangeEvent } from "react";
import { useClassesContext } from "../../src/Context/ClassesContext";
import { GeneralClassType } from "../types/GeneralClassType";

function ChangeThemeButton() {
    const { updateClasses } = useClassesContext()
    const inputFile = useRef(null)
    const ChangeTheme = (event: ChangeEvent<HTMLInputElement>) => {

        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const classes: GeneralClassType[] = JSON.parse(e.target?.result as string)
                if (!classes) return

                classes.map(({ name, val }) => updateClasses(name, val))
            };

            reader.onerror = () => {
                console.error("File reading has failed");
            };

            // Read the file as text
            reader.readAsText(file);
        }
    }
    return (
        <div className="ee-display_flex">
            <input type='file' id='file' onChange={ChangeTheme} ref={inputFile} style={{ display: 'none' }} />
            <label htmlFor="file" className="oo-border-width oo-padding ee-cursor_pointer  oo-background-color-primary oo-text-color-primary ee-border-style_solid oo-border-color  oo-border-radius">Load JSON</label>
        </div>
    )
}
export default ChangeThemeButton