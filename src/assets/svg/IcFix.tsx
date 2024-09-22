import type { SVGProps } from "react";
const SvgIcFix = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke="#EC6732"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.966 4.634 2.4 2.4m-8.4 6 2.91-.586a.8.8 0 0 0 .408-.219L12.8 5.71a.8.8 0 0 0 0-1.13l-1.38-1.38a.8.8 0 0 0-1.132.001L3.772 9.72a.8.8 0 0 0-.219.407z"
    />
  </svg>
);
export default SvgIcFix;
