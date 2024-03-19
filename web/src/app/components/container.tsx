import React from "react";

type ContainerProps = {
    children: React.ReactNode
}

export default function Container({children}: ContainerProps) {
    return <div className="container max-w-4xl m-auto">
        {children}
    </div>
}