import React from 'react';
import type { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import './Button.scss';

interface IButton extends IClassNameProps {
    text: string;
    onClick?: () => void;
}

const cnButton = cn('Button');
const buttonCn = cnButton();

export const Button: React.FC<IButton> = props => {
    const { text, onClick } = props;

    return (
        <button className={buttonCn} onClick={onClick}>
            {text}
        </button>
    )
}