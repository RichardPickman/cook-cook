import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const Heading = ({ children }: Props) => {
    return <h2>{children}</h2>;
};
