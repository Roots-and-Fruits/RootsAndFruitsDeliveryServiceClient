import type { SVGProps } from "react";
const SvgIcCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="ic_copy_svg__a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#ic_copy_svg__a)">
      <path
        fill="#1C1B1F"
        d="M9 18q-.825 0-1.412-.587A1.93 1.93 0 0 1 7 16V4q0-.824.588-1.412A1.93 1.93 0 0 1 9 2h9q.824 0 1.413.587Q20 3.176 20 4v12q0 .824-.587 1.413A1.93 1.93 0 0 1 18 18zm0-2h9V4H9zm-4 6q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 20V6h2v14h11v2z"
      />
    </g>
  </svg>
);
export default SvgIcCopy;