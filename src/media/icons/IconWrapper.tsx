import { ReactNode } from 'react';
import { cx } from '@/helpers';

interface Props {
    children: ReactNode;
    size: string;
    color: string;
}

export const IconWrapper = ({ children, size, color }: Props) => {
    return (
        <div className={`flex w-full h-full items-center justify-center rounded ${size} ${color}`}>
            {children}
        </div>
    );
};
