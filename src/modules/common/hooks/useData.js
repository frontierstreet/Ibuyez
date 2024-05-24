import { useState } from "react";

const useData = () => {
    const [value, setValue] = useState({
        data: [],
        metadata: {}
    })

    const setValues = (newValues, replaceData = false) => {
        if (replaceData) {
            setValue({
                data: newValues.data,
                metadata: newValues.metadata
            })
        }
        else {
            setValue({
                data: [...value.data, ...newValues.data],
                metadata: newValues.metadata
            })
        }
    }

    return {
        data: value.data,
        metadata: value.metadata,
        setValues
    }

}

export default useData