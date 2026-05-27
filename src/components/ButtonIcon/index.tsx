import React from "react"

interface ButtonIconProps {
    icon: React.ReactNode
    children: React.ReactNode
}

const ButtonIcon = ( props: ButtonIconProps ) => {
    return (
        <>
            <button className="rounded-xl border-2 flex items-center gap-2 px-4 py-2 hover:border-gray-400">
                <span>{props.icon}</span>
                <span>{props.children}</span>
            </button>
        </>
    )
}

export default ButtonIcon