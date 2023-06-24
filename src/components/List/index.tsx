import { Children, ReactNode } from 'react';
import { cx } from '@/helpers';

interface Props {
    children: ReactNode;
    className?: string;
}

export const List = ({ children, className = '' }: Props) => (
    <ul className={cx('flex', className)}>
        {Children.map(children, (child, index) => (
            <li key={index}>{child}</li>
        ))}
    </ul>
);
