import React from 'react'

interface ISocialMedia {
    name: string,
    Icon: any,
    path: string,
}

const SocialMedia = ({ name, Icon, path }: ISocialMedia) => {
    return (
        <a href={path}>
            <Icon />
            {name}
        </a>
    )
}

export default SocialMedia