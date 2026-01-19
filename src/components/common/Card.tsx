import React from 'react'

const Card = ({ bgColor, children }: { bgColor: string, children: React.ReactNode }) => {
    return (
        <div className={`${bgColor} rounded-2xl p-6 border border-gray-900 hover:border-purple-900`}>
            {children}
        </div>
    )
}

export default Card;