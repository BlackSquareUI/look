import { ClassesProvider } from "../../src/Context/ClassesContext"
import { PopoverProvider } from "../../src/Context/PopoverContext"
import Popover from "./Popover"
import TogglePopupButton from "./TogglePopoverButton"
import "../../src/assets/css/index.css"

const ThemeBuilder = () => {

    return (<>
        <PopoverProvider>
            <ClassesProvider>
                <div className="ee-font-family_monospace">
                    <Popover />
                    <TogglePopupButton />
                </div>
            </ClassesProvider>
        </PopoverProvider>
    </>)
}
export default ThemeBuilder