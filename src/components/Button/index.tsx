import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    onClick: () => void;
}

export const Button = ({ children, onClick }: Props) => {
    return (
        <button
            className="p-2 border rounded"
            onClick={onClick}
        >
            {children}
        </button>
    );
};
