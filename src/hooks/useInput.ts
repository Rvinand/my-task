import {ChangeEvent, useState} from "react";

interface UseInputReturn {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: string
}

const useInput = (initialValue: string): UseInputReturn => {
    const [value, setValue] = useState(initialValue)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return {value, onChange}
}

export default useInput