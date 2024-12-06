import { ClassesProvider } from "../Context/ClassesContext"
import { PopoverProvider } from "../Context/PopoverContext"
import Popover from "./Popover"
import TogglePopupButton from "./TogglePopoverButton"

const ThemeBuilder = () => {

    return (<>
    <p>sdcsdc</p>
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