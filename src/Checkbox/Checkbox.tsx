import { useState } from 'react'

interface Checkbox {
    id: string | undefined
}

export function Checkbox({ id }: Checkbox) {
    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        setChecked(!checked)
    }

    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            id={id}
        />
    )
}
