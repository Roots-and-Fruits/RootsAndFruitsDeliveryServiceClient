import type { SVGProps } from "react";
const SvgIcArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 25"
    {...props}
  >
    <mask
      id="ic_arrow_up_svg__a"
      width={25}
      height={25}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M.435.811h24v24h-24z" />
    </mask>
    <g mask="url(#ic_arrow_up_svg__a)">
      <path
        fill="#B6B6B6"
        d="m12.435 11.611-4.6 4.6-1.4-1.4 6-6 6 6-1.4 1.4z"
      />
    </g>
  </svg>
);
export default SvgIcArrowUp;
