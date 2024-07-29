interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {
    width?: string | number;
    height?: string | number;
}

export const IconChevronRight: React.FC<SvgComponentProps> = ({ width = '1em', height = '1em', ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80px"
        height="80px"
        fill="#555555"
        viewBox="0 -960 960 960"
        {...props}
    >
        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
    </svg>
);

