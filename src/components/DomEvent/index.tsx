import { FC } from "react"

interface IProps {
    onClick: () => void;
}

const DomEvent: FC<IProps> = ({ onClick }) => {
    return <div role={'note'} onClick={onClick}>点我试试</div>
}

export default DomEvent