import { cx } from '@/helpers';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
}

export const Text = ({ children, className }: Props) => {
    return <p className={cx(className)}>{children}</p>;
};
