import { useClassesContext } from "../context/ClassesContext";
import { usePopoverContext } from "../context/PopoverContext";

function SaveButton() {
    const { saveClasses } = useClassesContext()
    const { togglePopover } = usePopoverContext()
    return (
        <button
            className="oe-hover-success oo-padding ee-cursor_pointer  oo-border-width oo-background-color-success oo-text-color-success  oo-border-color ee-border-style_solid oo-border-radius"
            onClick={() => {
                saveClasses();
                togglePopover();
            }}>
            Save
        </button>
    )
}
export default SaveButton;