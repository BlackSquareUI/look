import { useClassesContext } from "../../src/Context/ClassesContext"
import { useState } from "react"
import { GeneralClassType } from "../types/GeneralClassType"
import Picker from '@uiw/react-color-colorful'
const Color = ({ name, val
}: GeneralClassType) => {
    const { updateClasses } = useClassesContext()
    const [showPicker, setShowPicker] = useState(false)
    return (
        <div className="ee-display_flex ee-justify-content_space-between oo-padding">
            <span>{name}</span>
            <div className="ee-width_2 ee-height_2 oo-border-radius ee-border-style_solid ee-border-width" style={{ backgroundColor: val.toString() }} onClick={() => setShowPicker(!showPicker)}></div>

            {showPicker && <div className="ee-position_fixed"><Picker color={val.toString()} onChange={(e) => updateClasses(name, e.hex)} /></div>}
        </div>
    )
}
export default Color