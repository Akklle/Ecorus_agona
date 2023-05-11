import React from 'react'
import {createPortal} from 'react-dom'

interface props {
    children: React.ReactNode
}

export const Portal = ({children}: props) => {
    const [container] = React.useState(document.createElement('div'))
    container.classList.add('portal-root')

    React.useEffect(() => {
        document.body.appendChild(container)
        return () => {
            document.body.removeChild(container)
        }
    }, [container])

    return createPortal(children, container)
}