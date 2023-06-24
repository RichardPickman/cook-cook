import { cx } from '@/helpers';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    direction?: 'flex-row' | 'flex-col';
}

export const Layout = ({ children, direction = 'flex-row' }: Props) => {
    return <div className={cx('max-w-2xl mx-auto', direction)}>{children}</div>;
};

interface Directions {
    children: ReactNode;
    className: string;
}

export const Col = ({ children, className }: Directions) => {
    return <div className={cx('flex flex-col', className)}>{children}</div>;
};

export const Row = ({ children, className }: Directions) => {
    return <div className={cx('flex', className)}>{children}</div>;
};
