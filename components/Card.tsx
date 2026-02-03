import type { PropsWithChildren } from 'react'

import Link from 'next/link'

export interface CardProps {
    description: string
    title: string
    image?: boolean
    href: string
    tags?: string[]
    deprecated?: boolean
}

export const Card: React.FC<PropsWithChildren<CardProps>> = ({
    description,
    title,
    href,
    tags,
    deprecated,
    ...props
}) => {
    return (
        <Link
            href={href}
            className={
                'flex flex-col justify-start p-6 overflow-hidden rounded-lg border border-gray-200 nx-bg-transparent shadow-xs dark:border-neutral-800 hover:bg-slate-50 hover:shadow-md dark:hover:bg-neutral-900'
            }
            {...props}
        >
            <span className={'font-semibold dark:text-neutral-200 dark:hover:nx-text-neutral-50'}>
                {title}
                {deprecated && <span className="text-xs text-red-500"> Deprecated</span>}
            </span>
            <p className="mt-2">{description}</p>
            <div className="flex-row flex flex-wrap pt-2 gap-2">
                {tags &&
                    tags.map((t) => (
                        <span
                            key={t}
                            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300"
                        >
                            {t}
                        </span>
                    ))}
            </div>
        </Link>
    )
}