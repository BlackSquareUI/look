type PropDisplayNameType = {
    name: string
}
const PropDisplayName = ({ name }: PropDisplayNameType) => <span className="ee-text-transform_capitalize">{name.replace(/-/g, " ")}</span>;
export default PropDisplayName