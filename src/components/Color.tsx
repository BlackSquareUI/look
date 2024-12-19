import { useClassesContext } from "../context/ClassesContext"
import { useState } from "react"
import { GeneralClassType } from "../types/GeneralClassType"
import Picker from '@uiw/react-color-colorful'
import PropDisplayName from "./PropDisplayName"
import OutsideAlerter from "../Hooks/OutsideAlerter"
const Color = ({ name, val
}: GeneralClassType) => {
    const { updateClasses } = useClassesContext()
    const [showPicker, setShowPicker] = useState(false)

    const onColorChange = (e: { hex: string }) => {
        updateClasses(name, e.hex)
    }
    return (
        <div className="ee-display_flex ee-justify-content_space-between oo-padding ee-align-items_center">
            <PropDisplayName name={name} />
            <div>
                {showPicker &&
                    <OutsideAlerter callback={() => setShowPicker(false)}>
                        <div className="ee-position_fixed" style={{
                            transform: "translate3d(-50%, -50%, 0px)",
                            left: "50%",
                            top: "50%",
                        }}>
                            <Picker className="ee-width_10" color={val.toString()} onChange={onColorChange} />
                        </div>
                    </OutsideAlerter>
                }
            </div>

            <div className="ee-width_2 ee-height_2 oo-border-radius ee-border-style_solid ee-border-width" style={{ backgroundColor: val.toString() }} onClick={() => setShowPicker(!showPicker)}></div>
        </div>
    )
}
export default Color