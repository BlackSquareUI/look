import { ClassesProvider } from "../../src/Context/ClassesContext"
import { PopoverProvider } from "../../src/Context/PopoverContext"
import Popover from "./Popover"
import TogglePopupButton from "./TogglePopoverButton"

const ThemeBuilder = () => {

    return (<>
        <PopoverProvider>
            <ClassesProvider>
                <Popover />

                <TogglePopupButton />
            </ClassesProvider>
        </PopoverProvider>
    </>)
}
export default ThemeBuilder