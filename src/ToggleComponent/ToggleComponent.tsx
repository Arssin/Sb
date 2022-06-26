import { useState, ReactElement } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import './ToggleComponent.scss'

interface ToggleComponent {
    id: any
    description?: ReactElement | null
}

export function ToggleComponent({ id, description }: ToggleComponent) {
    const [toggleThisElement, setToggleThisElement] = useState(false)

    return (
        <div className="test" id={id}>
            <RiArrowDropDownLine
                onClick={() => setToggleThisElement((prev) => !prev)}
                className="icons"
            />
            {toggleThisElement && (
                <div className="description"> {description}</div>
            )}
        </div>
    )
}
