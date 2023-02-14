import {FC} from "react";
import useCount from "./useCount";

interface IProps {}

const RenderHook: FC<IProps> = ({}) => {
    const {num, increase} = useCount()

    return (
        <div>
            <span role={'note'}>{num}</span>
            <button role={'button'} onClick={increase}>增加</button>
        </div>
    )
}

export default RenderHook