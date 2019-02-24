export default ({ color = '#000', size }): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 125"
    height={size}
    width={size}
  >
    <path
      fill={color}
      d="
        M 22 78
        c 1 1 2.3 1.5 3.5 1.5
        S 28.1 79 29 78
        l 21-21 21 21
        c 1 1 2.3 1.5 3.5 1.5
        S 77.1 79 78 78
        c 2-2 2-5.1 0-7.1
        l -21-21 21-21
        c 2-2 2-5.1 0-7.1
        s -5.1-2-7.1 0
        l -21 21
        L 29 22
        c -2-2-5.1-2-7.1 0
        s -2 5.1 0 7.1
        l 21 21
        L 22 71
        c -2 1.9 -2 5.1 0 7
        z
      "
    />
  </svg>
);
