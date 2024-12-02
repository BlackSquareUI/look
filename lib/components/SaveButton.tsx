import { useClassesContext } from "../../src/Context/ClassesContext";
import { usePopoverContext } from "../../src/Context/PopoverContext";

function SaveButton() {
    const { saveClasses } = useClassesContext()
    const { togglePopover } = usePopoverContext()
    return (
        <button
            className="oo-padding ee-cursor_pointer  oo-border-width oo-background-color-success oo-text-color-success  oo-border-color ee-border-style_solid oo-border-radius"
            onClick={() => {
                saveClasses();
                togglePopover();
            }}>
            Save
        </button>
    )
}
export default SaveButton;