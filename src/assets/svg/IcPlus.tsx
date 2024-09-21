import type { SVGProps } from "react";
const SvgIcPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 36 37"
    {...props}
  >
    <circle cx={18} cy={18.5} r={17.5} fill="#fff" stroke="#000" />
    <path
      fill="#000"
      d="M23.25 19.249h-4.5v4.5h-1.5v-4.5h-4.5v-1.5h4.5v-4.5h1.5v4.5h4.5z"
    />
  </svg>
);
export default SvgIcPlus;
