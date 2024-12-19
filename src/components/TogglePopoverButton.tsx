import { usePopoverContext } from "../context/PopoverContext"

const TogglePopoverButton = () => {
    const { togglePopover } = usePopoverContext()
    return (<button className="ee-width_2 ee-height_2 ee-background-color_black ee-position_fixed ee-bottom_2 ee-right_2 ee-border-style_solid oo-border-color oo-border-radius oo-border-weight" onClick={() => togglePopover()}></button>)
}
export default TogglePopoverButton