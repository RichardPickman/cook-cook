import { ReactNode } from 'react';

interface Props {
    to: string;
    children: ReactNode;
    target?: '_self' | '_blank';
}

export const Link = ({ to, children, target = '_self' }: Props) => {
    return (
        <a
            className="hover:underline"
            href={to}
            target={target}
            rel="noreferrer"
        >
            {children}
        </a>
    );
};
