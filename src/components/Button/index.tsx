import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    onClick?: () => void;
}

export const Button = ({ children, onClick }: Props) => {
    return (
        <button
            className="p-3 bg-white gap-6 border rounded-md"
            onClick={onClick}
        >
            {children}
        </button>
    );
};
