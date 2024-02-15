import './Button.scss';

export function Button({ onClick, label, className, disabled }) {
    return (
        <button className={`${className}`} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};