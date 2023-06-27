import { cx } from '@/helpers';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
    direction?: 'flex-row' | 'flex-col';
    id?: string;
}

export const Layout = ({ children, id, className, direction = 'flex-row' }: Props) => {
    return (
        <div
            id={id}
            className={cx('mx-auto max-w-5xl px-4', className, direction)}
        >
            {children}
        </div>
    );
};

interface Directions {
    children: ReactNode;
    className?: string;
}

export const Col = ({ children, className }: Directions) => {
    return <div className={cx('flex flex-col', className)}>{children}</div>;
};

export const Row = ({ children, className }: Directions) => {
    return <div className={cx('flex', className)}>{children}</div>;
};
