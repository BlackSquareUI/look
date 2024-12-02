import { useClassesContext } from "../../src/Context/ClassesContext"
import { GeneralClassType } from "../types/GeneralClassType"

const Range = ({ name, min, max, step, val
}: GeneralClassType) => {
    const { updateClasses } = useClassesContext()
    return (
        <div className="ee-display_flex ee-justify-content_space-between oo-padding">
            <span>{name}</span>
        <input type="range" onChange={(e) => updateClasses(name, e.target.valueAsNumber)} name={name} id={name} step={step} min={min} max={max} value={val} />
        </div>
    )
}
export default Range