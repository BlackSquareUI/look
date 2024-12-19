import { usePopoverContext } from "../context/PopoverContext"
import Props from "./Props"
import Toolbar from "./Toolbar"

const Popover = () => {
    const { isHidden } = usePopoverContext()
    return (
        isHidden &&
        <div className={"oo-background-color-primary oo-border-color oo-border-radius ee-border-style_solid ee-width_22 oo-padding ee-position_fixed ee-bottom_6 ee-right_2 oo-border-width"}>
            <div className="ee-background-color_white ee-height_auto ee-overflow_auto ee-height_18 oo-border-color oo-border-width ee-border-style_solid oo-border-radius">
                <Props />
            </div>
            <div className="oo-padding-top">
                <Toolbar />
            </div>
        </div>
    )
}
export default Popover