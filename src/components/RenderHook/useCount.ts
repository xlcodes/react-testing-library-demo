import {useCallback, useState} from "react";

const useCount = () => {
    const [num, setNum] = useState(0)
    const increase = useCallback(() => {
        setNum(num + 1)
    }, [])

    return { num, increase }
}

export default useCount