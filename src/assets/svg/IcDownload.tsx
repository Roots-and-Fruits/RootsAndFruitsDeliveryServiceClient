import type { SVGProps } from "react";
const SvgIcDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 16"
    {...props}
  >
    <mask
      id="ic_download_svg__a"
      width={17}
      height={16}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M.5 0h16v16H.5z" />
    </mask>
    <g mask="url(#ic_download_svg__a)">
      <path
        fill="#EC6732"
        d="M8.5 10.667 5.167 7.333l.933-.966L7.834 8.1V2.667h1.333V8.1L10.9 6.367l.934.966zm-4 2.666q-.55 0-.941-.391A1.28 1.28 0 0 1 3.167 12v-2H4.5v2h8v-2h1.334v2q0 .55-.392.942a1.28 1.28 0 0 1-.942.391z"
      />
    </g>
  </svg>
);
export default SvgIcDownload;
