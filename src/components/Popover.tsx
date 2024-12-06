import { usePopoverContext } from "../Context/PopoverContext"
import Props from "./Props"
import Toolbar from "./Toolbar"

const Popover = () => {
    const { isHidden } = usePopoverContext()
    return (
        <div className={(isHidden ? "ee-opacity_1 " : "ee-opacity_0 ") + "oo-background-color-primary oo-border-color oo-border-radius ee-border-style_solid ee-width_22 oo-padding ee-position_fixed ee-bottom_6 ee-right_2"}>
            <div className="ee-background-color_white ee-height_auto ee-overflow_auto ee-height_18 oo-border-color oo-border-weight ee-border-style_solid oo-border-radius">
                <Props />
            </div>
            <div className="oo-padding ee-padding-left_0 ee-padding-right_0 ee-padding-bottom_0">
                <Toolbar />
            </div>
        </div>
    )
}
export default Popover