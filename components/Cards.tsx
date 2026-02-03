import type { PropsWithChildren } from 'react'

export interface CardsProps {
    children: React.ReactNode
}

export const Cards: React.FC<PropsWithChildren<CardsProps>> = ({ children, ...props }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-8" {...props}>
            {children}
        </div>
    )
}