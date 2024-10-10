import type { SVGProps } from "react";
const SvgIcLogout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 25"
    {...props}
  >
    <mask
      id="ic_logout_svg__a"
      width={25}
      height={25}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M.172.53h24v24h-24z" />
    </mask>
    <g mask="url(#ic_logout_svg__a)">
      <path
        fill="#1C1B1F"
        d="M5.172 21.53q-.825 0-1.413-.588a1.93 1.93 0 0 1-.587-1.412v-14q0-.825.587-1.413a1.93 1.93 0 0 1 1.413-.587h7v2h-7v14h7v2zm11-4-1.375-1.45 2.55-2.55H9.172v-2h8.175l-2.55-2.55 1.375-1.45 5 5z"
      />
    </g>
  </svg>
);
export default SvgIcLogout;
