import ChangeThemeButton from "./ChangeThemeButton"
import SaveButton from "./SaveButton"

const Toolbar = () => {
    return (
        <div className="ee-display_flex ee-justify-content_space-between">
            <SaveButton />
            <ChangeThemeButton />
        </div>
    )
}
export default Toolbar