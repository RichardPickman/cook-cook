import { cx } from '@/helpers';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export const Button = ({ children, className, onClick }: Props) => {
    return (
        <button
            className={cx('gap-6 rounded-md border bg-white p-3 hover:bg-gray-50', className)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
