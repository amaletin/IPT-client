interface IProps {
  color?: string;
  direction?: string;
  width?: string;
}

const SortIcon: React.FC<IProps> = ({ color = '#000', direction, width }) => {
  return (
    <svg
      aria-hidden="true"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      width={width}
    >
      <path
        fill={color}
        fillOpacity={direction === 'DESC' ? 1 : 0.5}
        d="M 41 288h 238c 21.4 0 32.1 25.9 17 41
           L 177 448c -9.4 9.4 -24.6 9.4 -33.9 0
           L 24 329c -15.1 -15.1 -4.4 -41 17 -41z"
      />
      <path
        fill={color}
        fillOpacity={direction === 'ASC' ? 1 : 0.5}
        d="M 296 183L 177 64c -9.4 -9.4 -24.6 -9.4 -33.9 0
           L 24 183c -15.1 15.1 -4.4 41 17 41h 238c 21.4 0 32.1 -25.9 17 -41z"
      />
    </svg>
  );
};

export default SortIcon;
