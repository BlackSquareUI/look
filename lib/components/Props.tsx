import { useClassesContext } from "../../src/Context/ClassesContext"
import Color from "./Color"
import Range from "./Range"

const Props = () => {
    const { classes } = useClassesContext()
    return (
        <div className="oo-padding">
            {classes.map((prop, j) => {
                if (prop.type === "range") {
                    return <Range key={j} {...prop} />
                }
                else if (prop.type === "color") {
                    return <Color {...prop} key={j} />
                }
            })}
        </div>
    )
}
export default Props